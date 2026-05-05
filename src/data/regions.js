export const regions = [
  {
    id: 'china',
    name: 'China',
    shortName: '中国',
    countries: ['CN'],
    countryNames: '中国大陆',
    emoji: '🇨🇳',
    color: '#EF4444',
    description: '中国市场，偏好简洁现代、国潮风格，红色金色吉祥'
  },
  {
    id: 'southeast-asia',
    name: 'Southeast Asia',
    shortName: 'SEA',
    countries: ['TH', 'VN', 'ID', 'PH', 'MY'],
    countryNames: '泰国、越南、印尼、菲律宾、马来西亚',
    emoji: '🌏',
    color: '#10b981',
    description: '东南亚市场，受佛教文化影响，偏好自然有机的设计风格'
  },
  {
    id: 'middle-east',
    name: 'Middle East',
    shortName: 'MENA',
    countries: ['SA', 'AE', 'EG', 'TR'],
    countryNames: '沙特、阿联酋、埃及、土耳其',
    emoji: '🕌',
    color: '#f59e0b',
    description: '中东市场，伊斯兰文化，偏好几何图案和极简风格'
  },
  {
    id: 'latin-america',
    name: 'Latin America',
    shortName: 'LATAM',
    countries: ['BR', 'MX', 'CO'],
    countryNames: '巴西、墨西哥、哥伦比亚',
    emoji: '🌺',
    color: '#ec4899',
    description: '拉美市场，热情奔放，偏好鲜艳色彩和动感设计'
  }
];

export const getRegionById = (id) => regions.find(r => r.id === id);
