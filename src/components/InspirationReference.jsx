import React from 'react';

const InspirationReference = ({ keyword, styleId }) => {
  const styleKeywords = {
    'simple-linear': '线性 简约',
    'color-linear': '彩色 线性',
    'line-surface': '线面 结合',
    'color-surface': '面性 填充',
  };

  const generateIconfontUrl = (searchKeyword, styleKeyword) => {
    const query = encodeURIComponent(`${searchKeyword} ${styleKeyword}`);
    return `https://www.iconfont.cn/search/index?searchType=icon&q=${query}&page=1`;
  };

  const styleLabel = styleKeywords[styleId] || '';
  const iconfontUrl = generateIconfontUrl(keyword || '', styleLabel);

  // 主要参考网站
  const primarySites = [
    {
      name: 'iconfont',
      url: iconfontUrl,
      gradient: 'linear-gradient(to bottom right, #A78BFA, #EC4899)',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.18 5 4.03 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      desc: keyword ? `搜索「${keyword}」` : '阿里巴巴图标库',
      descSub: '海量图标资源',
    },
    {
      name: '花瓣网',
      url: keyword
        ? `https://huaban.com/search/?q=${encodeURIComponent(keyword)}&type=design`
        : 'https://huaban.com/',
      gradient: 'linear-gradient(to bottom right, #F472B6, #DB2777)',
      icon: <span className="text-white text-lg font-bold">花</span>,
      desc: keyword ? `搜索「${keyword}」` : '设计灵感采集',
      descSub: '国内设计师首选',
    },
  ];

  // 更多参考网站
  const moreSites = [
    {
      name: 'Pinterest',
      url: keyword
        ? `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(`${keyword} icon`)}`
        : 'https://www.pinterest.com/',
      gradient: 'linear-gradient(to bottom right, #EF4444, #DC2626)',
      icon: <span className="text-white text-sm font-bold">P</span>,
      desc: '全球创意',
    },
    {
      name: 'Dribbble',
      url: keyword
        ? `https://dribbble.com/search/${encodeURIComponent(keyword)}-icon`
        : 'https://dribbble.com/search/icon',
      gradient: 'linear-gradient(to bottom right, #38BDF8, #0284C7)',
      icon: <span className="text-white text-sm font-bold">D</span>,
      desc: '设计作品',
    },
    {
      name: 'Flaticon',
      url: keyword
        ? `https://www.flaticon.com/search?word=${encodeURIComponent(keyword)}&type=icon`
        : 'https://www.flaticon.com/',
      gradient: 'linear-gradient(to bottom right, #34D399, #059669)',
      icon: <span className="text-white text-sm font-bold">F</span>,
      desc: '免费图标',
    },
    {
      name: 'Noun',
      url: keyword
        ? `https://thenounproject.com/search/?q=${encodeURIComponent(keyword)}&i=icon`
        : 'https://thenounproject.com/',
      gradient: 'linear-gradient(to bottom right, #64748b, #334155)',
      icon: <span className="text-white text-sm font-bold">N</span>,
      desc: '极简图标',
    },
  ];

  return (
    <div>
      <div className="section-label">
        <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
        </svg>
        灵感参考 / Inspiration
      </div>

      {/* 主要参考网站 - 大卡片 */}
      <div className="space-y-3 mb-4">
        {primarySites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-[20px] bg-white/70 backdrop-blur-sm transition-all hover:bg-white hover:-translate-y-0.5 group"
            style={{ boxShadow: '6px 6px 12px rgba(160, 150, 180, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.7)' }}
          >
            <div
              className="w-12 h-12 rounded-[8px] flex items-center justify-center flex-shrink-0"
              style={{ background: site.gradient, boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.15)' }}
            >
              {site.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-sm text-clay-foreground" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {site.name}
              </p>
              <p className="text-xs text-clay-muted truncate">{site.desc}</p>
              <p className="text-[10px] text-clay-muted/70">{site.descSub}</p>
            </div>
            <svg className="w-4 h-4 text-clay-muted/50 group-hover:text-violet-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>

      {/* 更多参考网站 - 小卡片网格 */}
      <div className="grid grid-cols-2 gap-2">
        {moreSites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-[20px] bg-white/50 backdrop-blur-sm transition-all hover:bg-white/80 hover:-translate-y-0.5 group"
            style={{ boxShadow: '4px 4px 8px rgba(160, 150, 180, 0.08), -3px -3px 6px rgba(255, 255, 255, 0.6)' }}
          >
            <div
              className="w-7 h-7 rounded-[8px] flex items-center justify-center flex-shrink-0"
              style={{ background: site.gradient, boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.12)' }}
            >
              {site.icon}
            </div>
            <div className="min-w-0">
              <p className="font-display font-bold text-xs text-clay-foreground truncate" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {site.name}
              </p>
              <p className="text-[10px] text-clay-muted truncate">{site.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* 设计提示 */}
      <div
        className="mt-4 p-3 rounded-[20px] bg-gradient-to-r from-amber-50 to-orange-50"
        style={{ boxShadow: 'inset 2px 2px 4px rgba(245, 158, 11, 0.05), inset -2px -2px 4px rgba(255, 255, 255, 0.8)' }}
      >
        <p className="text-xs text-clay-foreground">
          💡 参考优秀图标的设计思路，保持风格统一、线条粗细一致、视觉重心平衡。
        </p>
      </div>
    </div>
  );
};

export default InspirationReference;
