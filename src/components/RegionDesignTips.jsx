import React from 'react';

const categoryDesignTips = {
  fashion: {
    name: '服饰',
    tips: {
      'china': [
        { icon: '🏮', text: '融入国潮元素、传统纹样' },
        { icon: '🎊', text: '红色、金色为主，寓意吉祥' },
        { icon: '✨', text: '简洁现代，避免过于复杂' },
      ],
      'southeast-asia': [
        { icon: '🌸', text: '融入热带花卉、传统纹样元素' },
        { icon: '✨', text: '使用金色、橙色等暖色调' },
        { icon: '💎', text: '可加入闪亮装饰元素' },
      ],
      'middle-east': [
        { icon: '🔷', text: '使用几何图案、阿拉伯花纹' },
        { icon: '🏆', text: '金色、绿色为主色调' },
        { icon: '⚠️', text: '避免人脸、人物形象' },
      ],
      'latin-america': [
        { icon: '🌺', text: '大胆使用热带元素、花朵' },
        { icon: '🌈', text: '高饱和度、鲜艳配色' },
        { icon: '💃', text: '动感曲线、活力设计' },
      ],
    },
  },
  beauty: {
    name: '美妆',
    tips: {
      'china': [
        { icon: '💄', text: '展示产品质感，简约大气' },
        { icon: '🌸', text: '可融入东方美学元素' },
        { icon: '✨', text: '配色干净，突出品质感' },
      ],
      'southeast-asia': [
        { icon: '💄', text: '展示产品本身，避免人脸' },
        { icon: '🌸', text: '配合花瓣、植物元素' },
        { icon: '💕', text: '粉色系、柔和渐变' },
      ],
      'middle-east': [
        { icon: '✨', text: '抽象化处理，强调产品质感' },
        { icon: '🏆', text: '金色、米色优雅配色' },
        { icon: '🚫', text: '禁止展示人脸、肤色对比' },
      ],
      'latin-america': [
        { icon: '🔥', text: '热情风格，大胆配色' },
        { icon: '🌺', text: '加入花朵装饰元素' },
        { icon: '💎', text: '闪亮、魅力感设计' },
      ],
    },
  },
  electronics: {
    name: '电子',
    tips: {
      'china': [
        { icon: '📱', text: '简洁科技感，线条利落' },
        { icon: '💡', text: '蓝色、深色系为主' },
        { icon: '✨', text: '可加入渐变光效' },
      ],
      'southeast-asia': [
        { icon: '📱', text: '简洁科技感，线条流畅' },
        { icon: '💡', text: '蓝色、绿色科技色系' },
        { icon: '✨', text: '可加入光效元素' },
      ],
      'middle-east': [
        { icon: '🔷', text: '几何图形为主，简洁明了' },
        { icon: '🏆', text: '蓝金配色，高端质感' },
        { icon: '⚠️', text: '避免人物形象展示' },
      ],
      'latin-america': [
        { icon: '⚡', text: '活力感，动感设计' },
        { icon: '🌈', text: '多彩配色，年轻化' },
        { icon: '✨', text: '加入渐变、光效' },
      ],
    },
  },
};

function detectCategory(keyword) {
  const categoryKeywords = {
    fashion: ['鞋', '裙', '包', '手表', '眼镜', '服饰', '衣服', '时尚', 'fashion', 'shoe', 'bag', 'dress', 'watch', 'glasses'],
    beauty: ['口红', '美妆', '化妆品', '唇膏', '化妆', 'beauty', 'lipstick', 'makeup', '护肤'],
    electronics: ['手机', '耳机', '电脑', '电子', '数码', 'phone', 'headphone', 'computer', 'laptop'],
  };

  const lowerKeyword = keyword.toLowerCase();
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(kw => lowerKeyword.includes(kw))) {
      return category;
    }
  }
  return 'fashion';
}

const RegionDesignTips = ({ regionId, keyword }) => {
  const category = detectCategory(keyword || '');
  const categoryInfo = categoryDesignTips[category] || categoryDesignTips.fashion;
  const regionTips = categoryInfo.tips[regionId] || categoryInfo.tips['southeast-asia'];

  const regionGeneralTips = {
    'china': { icon: '🇨🇳', text: '中国风格：简洁现代、国潮元素，红金配色' },
    'southeast-asia': { icon: '🌴', text: '东南亚风格：圆角设计，避免尖锐边角，温暖的色调' },
    'middle-east': { icon: '🕌', text: '中东风格：几何图案为主，简洁设计，金绿配色' },
    'latin-america': { icon: '🎭', text: '拉美风格：热情奔放，大胆配色，动感设计' },
  };

  return (
    <>
      {/* 针对性设计建议 */}
      <div className="space-y-3 mb-5">
        {regionTips.map((tip, index) => (
          <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-white/50"
            style={{ boxShadow: 'inset 2px 2px 4px rgba(160, 150, 180, 0.05), inset -2px -2px 4px rgba(255, 255, 255, 0.5)' }}>
            <span className="text-xl">{tip.icon}</span>
            <span className="text-sm text-clay-foreground">{tip.text}</span>
          </div>
        ))}
      </div>

      {/* 地区通用建议 */}
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-violet-50 to-pink-50"
        style={{ boxShadow: 'inset 3px 3px 6px rgba(139, 92, 246, 0.05), inset -3px -3px 6px rgba(255, 255, 255, 0.8)' }}>
        <span className="text-xl">{regionGeneralTips[regionId]?.icon || '💡'}</span>
        <span className="text-sm font-medium text-clay-foreground">{regionGeneralTips[regionId]?.text || '通用设计建议'}</span>
      </div>
    </>
  );
};

export default RegionDesignTips;
