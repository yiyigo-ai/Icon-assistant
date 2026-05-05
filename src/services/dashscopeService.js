// 通义万相API服务
// 通过Vite代理调用，解决CORS问题

const API_BASE = '/api/dashscope';

// 风格对应的提示词模板
const STYLE_PROMPT_TEMPLATES = {
  'color-surface': '一个扁平的矢量图标，主题是[ICON_NAME]，一种颜色轻微渐变，颜色模式为正片叠底，通过图层的混合重叠效果营造深度感，形态由几何图形的相互加减组合构成，整体形态圆润无明显棱角，无描边，干净简约的UI风格，在Figma中完成设计，居中于白色背景上。',

  'simple-linear': '一个简单的线性图标，主题是[ICON_NAME]，极简风格，干净纤细的描边，统一的线宽，无填充，单色（例如黑色或深灰色），基于矢量，轮廓清晰，整体形态圆润无明显棱角，在Figma中完成设计，居中于白色背景上。参考icon如图所示。',

  'color-linear': '一个两色的线性图标，主题是[ICON_NAME]，极简风格，干净的矢量线条，图标的重点部分用橙色线条以作点缀，无填充，统一的线宽，整体形态圆润无明显棱角，现代且有趣的UI风格，在Figma中设计，居中于白色背景上。参考icon如图所示。',

  'line-surface': '一个两色的线面结合图标，主题是[ICON_NAME]，极简风格，干净的矢量线条，图标的重点部分使用不同颜色，有一个小面积的橙色填充区域以作强调，统一的线宽，整体形态圆润无明显棱角，现代且有趣的UI风格，在Figma中设计，居中于白色背景上。参考icon如图所示。'
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

// 创建图片生成任务 - 使用 qwen-image-2.0-pro
export const createImageTask = async (prompt, options = {}) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('请先配置API Key');
  }

  // 构建消息内容
  const content = [];

  // 如果有参考图，添加到content
  if (options.refImageBase64) {
    // qwen-image 支持 base64 格式：data:image/png;base64,xxx
    content.push({
      image: options.refImageBase64
    });
    console.log('已添加参考图到请求');
  }

  // 添加文本提示
  content.push({
    text: prompt
  });

  const requestBody = {
    model: 'qwen-image-2.0-pro',
    input: {
      messages: [{
        role: 'user',
        content: content
      }]
    },
    parameters: {
      n: 1,
      size: '1024*1024'
    }
  };

  // 使用 multimodal-generation API
  const response = await fetch(`${API_BASE}/services/aigc/multimodal-generation/generation`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || '创建任务失败');
  }

  // 检查同步返回结果 - qwen-image-2.0-pro 格式
  if (data.output?.choices) {
    const imageUrl = data.output.choices[0]?.message?.content?.[0]?.image;
    if (imageUrl) {
      return {
        sync: true,
        imageUrl: imageUrl
      };
    }
  }

  // 检查异步任务
  if (data.output?.task_id) {
    return {
      sync: false,
      taskId: data.output.task_id
    };
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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || '查询任务失败');
  }

  return data.output;
};

// 轮询等待任务完成
export const waitForTask = async (taskId, onProgress, maxAttempts = 60, interval = 2000) => {
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
