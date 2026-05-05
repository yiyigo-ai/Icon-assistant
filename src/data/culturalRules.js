// 文化合规规则库
export const culturalRules = {
  'southeast-asia': {
    'fashion': {
      do: [
        '使用大象或莲花图案',
        '采用金色到绿色的渐变',
        '添加有机曲线（最小8px圆角）',
        '包含热带叶子图案'
      ],
      avoid: [
        '脚部指向（佛教禁忌）',
        '人脸或完整人物形象',
        '小于45度的锐角',
        '纯黑色背景',
        '乌鸦图案'
      ],
      safeColors: ['#FFD700', '#2E8B57', '#D4AF37', '#F0E68C', '#10b981'],
      dangerousColors: ['#000000', '#FF0000', '#4A4A4A'],
    },
    'beauty': {
      do: [
        '使用自然植物元素',
        '采用柔和的粉色系',
        '添加水滴或花瓣图案'
      ],
      avoid: [
        'Before/After对比图',
        '过度修图的人脸',
        '动物测试暗示'
      ],
      safeColors: ['#FFB6C1', '#DDA0DD', '#98FB98', '#F0E68C'],
      dangerousColors: ['#000000', '#8B0000'],
    },
    'electronics': {
      do: [
        '使用简洁的几何图形',
        '采用科技蓝色系',
        '添加动态线条'
      ],
      avoid: [
        '过于复杂的图案',
        '暗色调为主'
      ],
      safeColors: ['#0ea5e9', '#6366f1', '#10b981', '#f59e0b'],
      dangerousColors: ['#000000', '#4A4A4A'],
    }
  },
  'middle-east': {
    'fashion': {
      do: [
        '使用几何图案',
        '采用金色和绿色',
        '添加阿拉伯书法元素',
        '使用右手指向'
      ],
      avoid: [
        '人脸或人物形象',
        '动物图案（尤其是猪、狗）',
        '酒精相关元素',
        '左手使用场景'
      ],
      safeColors: ['#2E8B57', '#D4AF37', '#F5F5DC', '#f59e0b'],
      dangerousColors: ['#FF0000', '#000000'],
    },
    'beauty': {
      do: [
        '使用几何花纹',
        '采用金色和米色',
        '抽象化处理'
      ],
      avoid: [
        '人脸展示',
        'Before/After对比',
        '动物形象',
        '暴露的身体部位'
      ],
      safeColors: ['#D4AF37', '#F5F5DC', '#8B4513', '#D2691E'],
      dangerousColors: ['#FF0000', '#FF69B4', '#000000'],
    },
    'electronics': {
      do: [
        '使用几何图形',
        '采用蓝金配色',
        '简洁线条设计'
      ],
      avoid: [
        '人物形象',
        '复杂图案'
      ],
      safeColors: ['#0ea5e9', '#D4AF37', '#2E8B57', '#F5F5DC'],
      dangerousColors: ['#FF0000', '#000000'],
    }
  },
  'latin-america': {
    'fashion': {
      do: [
        '使用鲜艳色彩',
        '添加动感的曲线',
        '融入热带元素',
        '采用渐变效果'
      ],
      avoid: [
        '过于暗沉的色调',
        '僵硬的几何形状'
      ],
      safeColors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#ec4899'],
      dangerousColors: ['#000000', '#4A4A4A'],
    },
    'beauty': {
      do: [
        '使用热情的粉红色',
        '添加动感的形状',
        '融入拉丁元素'
      ],
      avoid: [
        '暗色调',
        '过于保守的设计'
      ],
      safeColors: ['#FF6B6B', '#FF69B4', '#FFB6C1', '#DDA0DD'],
      dangerousColors: ['#000000', '#4A4A4A'],
    },
    'electronics': {
      do: [
        '使用高饱和度色彩',
        '添加动感元素',
        '融入科技感'
      ],
      avoid: [
        '单调的配色',
        '过于严肃的设计'
      ],
      safeColors: ['#0ea5e9', '#ec4899', '#f59e0b', '#10b981'],
      dangerousColors: ['#000000'],
    }
  }
};

// 四种图标风格定义
export const styles = [
  {
    id: 'simple-linear',
    name: '简单线性',
    nameEn: 'Simple Linear',
    description: '纯色线条，简洁明了',
    safeForRegions: ['southeast-asia', 'middle-east', 'latin-america']
  },
  {
    id: 'color-linear',
    name: '彩色线性',
    nameEn: 'Color Linear',
    description: '多彩线条，细节丰富',
    safeForRegions: ['southeast-asia', 'middle-east', 'latin-america']
  },
  {
    id: 'line-surface',
    name: '线面结合',
    nameEn: 'Line & Surface',
    description: '线条+色块，层次分明',
    safeForRegions: ['southeast-asia', 'latin-america']
  },
  {
    id: 'color-surface',
    name: '彩色面性',
    nameEn: 'Color Surface',
    description: '实心填充，视觉强烈',
    safeForRegions: ['southeast-asia', 'latin-america']
  }
];

export const getStyleById = (id) => styles.find(s => s.id === id);

export const getCulturalRules = (regionId, categoryId) => {
  return culturalRules[regionId]?.[categoryId] || culturalRules[regionId]?.['fashion'] || null;
};

export const isStyleSafeForRegion = (styleId, regionId) => {
  const style = getStyleById(styleId);
  return style?.safeForRegions.includes(regionId) ?? true;
};
