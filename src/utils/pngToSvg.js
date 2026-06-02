// PNG 转 SVG 工具
import ImageTracer from 'imagetracerjs';

/**
 * 将图片 URL 转换为 SVG
 * @param {string} imageUrl - 图片 URL
 * @param {object} options - 转换选项
 * @returns {Promise<string>} - SVG 字符串
 */
export const convertImageToSvg = (imageUrl, options = {}) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      try {
        // 创建 canvas 获取图片数据
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // 获取图片数据
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // 默认选项 - 适合图标转换
        const defaultOptions = {
          // 描摹精度
          ltres: 1,
          qtres: 1,
          pathomit: 8,
          // 颜色量化
          colorsampling: 2,
          numberofcolors: 16,
          mincolorratio: 0,
          colorquantcycles: 3,
          // 简化选项
          blurradius: 0,
          blurdelta: 20,
          // SVG 输出选项
          scale: 1,
          roundcoords: 1,
          lcpr: 0,
          qcpr: 0,
          desc: false,
          viewbox: false,
        };

        const finalOptions = { ...defaultOptions, ...options };

        // 转换为 SVG
        const svgString = ImageTracer.imagedataToSVG(imageData, finalOptions);

        resolve(svgString);
      } catch (error) {
        reject(new Error('SVG 转换失败: ' + error.message));
      }
    };

    img.onerror = () => {
      reject(new Error('图片加载失败'));
    };

    img.src = imageUrl;
  });
};

/**
 * 下载 SVG 文件
 * @param {string} svgString - SVG 字符串
 * @param {string} filename - 文件名
 */
export const downloadSvg = (svgString, filename = 'icon.svg') => {
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * 将 SVG 转换为 Data URL
 * @param {string} svgString - SVG 字符串
 * @returns {string} - Data URL
 */
export const svgToDataUrl = (svgString) => {
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  return URL.createObjectURL(blob);
};

export default {
  convertImageToSvg,
  downloadSvg,
  svgToDataUrl
};
