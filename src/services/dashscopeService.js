// 通义万相API服务
// 通过Vite代理调用，解决CORS问题

const API_BASE = '/api/dashscope';

// 风格对应的提示词模板
const STYLE_PROMPT_TEMPLATES = {
  'color-surface': '高质量UI图标设计，主题是[ICON_NAME]，扁平化风格，单色渐变填充，正片叠底混合模式，几何图形组合，圆润形态无棱角，无描边，简约干净，白色背景居中，矢量风格，专业设计，高清晰度。不要描边，不要线条轮廓，不要阴影效果，不要立体感。',

  'simple-linear': '高质量线性图标设计，主题是[ICON_NAME]，极简风格，干净纤细描边，统一2px线宽，无填充，纯黑色，矢量风格，轮廓清晰圆润，白色背景居中，专业UI设计，高清晰度。不要填充色，不要面性效果，不要渐变，不要阴影。',

  'color-linear': '高质量双色线性图标设计，主题是[ICON_NAME]，纯线条风格，无填充，主色黑色线条，重点部分橙色线条点缀，统一2px线宽，圆润形态，白色背景居中，现代UI风格，高清晰度。不要填充，不要面性效果，不要色块，不要渐变填充，只能是线条。',

  'line-surface': '高质量线面结合图标设计，主题是[ICON_NAME]，极简风格，干净矢量线条，黑色线条为主，重点部分小面积橙色填充强调，统一2px线宽，圆润形态，白色背景居中，现代UI风格，高清晰度。不要大面积填充，不要立体效果，不要阴影。'
};

// 风格对应的参考图路径（本地预览用）
const STYLE_REFERENCE_IMAGES = {
  'color-surface': '/reference-icons/color-surface.png',
  'simple-linear': '/reference-icons/simple-linear.png',
  'color-linear': '/reference-icons/color-linear.png',
  'line-surface': '/reference-icons/line-surface.png'
};

// 风格对应的参考图公网URL（API调用用，需要用户配置）
// 如果您有参考图的公网URL，可以在这里配置
const STYLE_REFERENCE_URLS = {
  // 'color-surface': 'https://your-domain.com/reference-icons/color-surface.png',
  // 'simple-linear': 'https://your-domain.com/reference-icons/simple-linear.png',
  // 'color-linear': 'https://your-domain.com/reference-icons/color-linear.png',
  // 'line-surface': 'https://your-domain.com/reference-icons/line-surface.png'
};

// 从localStorage获取API Key
export const getApiKey = () => {
  return localStorage.getItem('dashscope_api_key') || '';
};

// 保存API Key到localStorage
export const saveApiKey = (apiKey) => {
  localStorage.setItem('dashscope_api_key', apiKey);
};

// 检查API Key是否已配置
export const hasApiKey = () => {
  return !!getApiKey();
};

// 将图片转换为Base64
const imageToBase64 = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('图片转换失败:', error);
    return null;
  }
};

// 创建图片生成任务 - 使用通义万相 (wanx-v1)
export const createImageTask = async (prompt, options = {}) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('请先配置API Key');
  }

  // 使用通义万相模型 (wanx-v1)
  // 文档: https://help.aliyun.com/zh/model-studio/developer-reference/use-wanx-by-api
  const requestBody = {
    model: 'wanx-v1',
    input: {
      prompt: prompt
    },
    parameters: {
      n: 1,
      size: '1024*1024'
    }
  };

  // 如果有参考图，使用图生图模式
  if (options.refImageBase64) {
    requestBody.input.ref_image = options.refImageBase64;
    console.log('已添加参考图到请求（图生图模式）');
  }

  // 通义万相使用 text2image/image-synthesis API
  const response = await fetch(`${API_BASE}/services/aigc/text2image/image-synthesis`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'X-DashScope-Async': 'enable'  // 启用异步模式
    },
    body: JSON.stringify(requestBody)
  });

  // 检查 Content-Type，避免解析 HTML 错误页面
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    const text = await response.text();
    console.error('API 返回非 JSON 响应:', text.substring(0, 500));
    throw new Error(`API 错误 (${response.status}): ${text.substring(0, 100)}`);
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || data.error?.message || '创建任务失败');
  }

  // 通义万相返回格式：异步模式返回 task_id
  if (data.output?.task_id) {
    return {
      sync: false,
      taskId: data.output.task_id
    };
  }

  // 如果有同步结果（某些配置可能支持）
  if (data.output?.results) {
    const imageUrl = data.output.results[0]?.url;
    if (imageUrl) {
      return {
        sync: true,
        imageUrl: imageUrl
      };
    }
  }

  throw new Error('创建任务失败: ' + JSON.stringify(data));
};

// 查询任务状态
export const queryTaskStatus = async (taskId) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('请先配置API Key');
  }

  const response = await fetch(`${API_BASE}/tasks/${taskId}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });

  // 检查 Content-Type，避免解析 HTML 错误页面
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    const text = await response.text();
    console.error('API 返回非 JSON 响应:', text.substring(0, 500));
    throw new Error(`API 错误 (${response.status}): ${text.substring(0, 100)}`);
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || data.error?.message || '查询任务失败');
  }

  return data.output;
};

// 轮询等待任务完成
export const waitForTask = async (taskId, onProgress, maxAttempts = 60, interval = 1000) => {
  let attempts = 0;

  while (attempts < maxAttempts) {
    await new Promise(resolve => setTimeout(resolve, interval));
    attempts++;

    const taskStatus = await queryTaskStatus(taskId);

    if (onProgress) {
      onProgress({
        status: taskStatus.task_status,
        attempts,
        maxAttempts
      });
    }

    if (taskStatus.task_status === 'SUCCEEDED') {
      return {
        success: true,
        imageUrl: taskStatus.results?.[0]?.url,
        taskMetrics: taskStatus.task_metrics
      };
    }

    if (taskStatus.task_status === 'FAILED') {
      throw new Error(taskStatus.message || '图片生成失败');
    }
  }

  throw new Error('生成超时，请重试');
};

// 完整的图片生成流程
export const generateImage = async (prompt, onProgress, options = {}) => {
  // 创建任务
  const result = await createImageTask(prompt, options);

  // 同步返回结果
  if (result.sync && result.imageUrl) {
    return {
      success: true,
      imageUrl: result.imageUrl
    };
  }

  // 异步任务，需要轮询
  if (onProgress) {
    onProgress({ stage: 'created', taskId: result.taskId });
  }

  const taskResult = await waitForTask(result.taskId, onProgress);
  return taskResult;
};

// 根据用户输入生成完整的prompt（使用模板）
export const buildPrompt = (description, style, region) => {
  // 获取对应风格的模板
  const template = STYLE_PROMPT_TEMPLATES[style] || STYLE_PROMPT_TEMPLATES['color-surface'];

  // 替换模板中的占位符
  const prompt = template.replace('[ICON_NAME]', description);

  return prompt;
};

// 获取风格对应的参考图路径（本地预览）
export const getReferenceImage = (style) => {
  return STYLE_REFERENCE_IMAGES[style] || null;
};

// 获取风格对应的参考图公网URL（API调用）
export const getReferenceImageUrl = (style) => {
  return STYLE_REFERENCE_URLS[style] || null;
};

// 获取风格的提示词模板
export const getPromptTemplate = (style) => {
  return STYLE_PROMPT_TEMPLATES[style] || null;
};

// 检查风格是否有参考图
export const hasReferenceImage = (style) => {
  return !!STYLE_REFERENCE_IMAGES[style];
};

export default {
  getApiKey,
  saveApiKey,
  hasApiKey,
  generateImage,
  buildPrompt,
  getReferenceImage,
  getReferenceImageUrl,
  getPromptTemplate,
  hasReferenceImage
};
