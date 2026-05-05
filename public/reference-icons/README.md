# 参考图标说明

此文件夹用于存放各风格的参考图标，供AI生成时参考。

## 需要的文件

请将以下4张参考图放入此文件夹：

1. **color-surface.png** - 彩色面性风格参考图
2. **simple-linear.png** - 简单线性风格参考图
3. **color-linear.png** - 彩色线性风格参考图
4. **line-surface.png** - 线面结合风格参考图

## 参考图要求

- 格式：PNG
- 尺寸：建议 200x200 像素或更大
- 内容：展示对应风格的典型图标示例
- 背景：白色或透明背景

## 如何让API使用参考图

通义万相API需要**公网可访问的URL**才能使用参考图功能。有两种方式：

### 方式1：上传到图床
1. 将参考图上传到图床（如阿里云OSS、七牛云、又拍云等）
2. 获取公网可访问的URL
3. 在 `src/services/dashscopeService.js` 中配置 `STYLE_REFERENCE_URLS`

```javascript
const STYLE_REFERENCE_URLS = {
  'color-surface': 'https://your-oss.com/reference-icons/color-surface.png',
  'simple-linear': 'https://your-oss.com/reference-icons/simple-linear.png',
  'color-linear': 'https://your-oss.com/reference-icons/color-linear.png',
  'line-surface': 'https://your-oss.com/reference-icons/line-surface.png'
};
```

### 方式2：不使用参考图
如果不配置公网URL，系统仍可正常工作：
- 本地会显示参考图预览
- AI生成时会使用对应的提示词模板
- 提示词模板中已包含风格描述，可以生成符合要求的图标

## 提示词模板

### 彩色面性 (color-surface)
一个扁平的矢量图标，主题是[ICON_NAME]，一种颜色轻微渐变，颜色模式为正片叠底，通过图层的混合重叠效果营造深度感，形态由几何图形的相互加减组合构成，整体形态圆润无明显棱角，无描边，干净简约的UI风格，在Figma中完成设计，居中于白色背景上。

### 简单线性 (simple-linear)
一个简单的线性图标，主题是[ICON_NAME]，极简风格，干净纤细的描边，统一的线宽，无填充，单色（例如黑色或深灰色），基于矢量，轮廓清晰，整体形态圆润无明显棱角，在Figma中完成设计，居中于白色背景上。参考icon如图所示。

### 彩色线性 (color-linear)
一个两色的线性图标，主题是[ICON_NAME]，极简风格，干净的矢量线条，图标的重点部分用橙色线条以作点缀，无填充，统一的线宽，整体形态圆润无明显棱角，现代且有趣的UI风格，在Figma中设计，居中于白色背景上。参考icon如图所示。

### 线面结合 (line-surface)
一个两色的线面结合图标，主题是[ICON_NAME]，极简风格，干净的矢量线条，图标的重点部分使用不同颜色，有一个小面积的橙色填充区域以作强调，统一的线宽，整体形态圆润无明显棱角，现代且有趣的UI风格，在Figma中设计，居中于白色背景上。参考icon如图所示。
