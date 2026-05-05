import React, { useState } from 'react';

const REGION_COLORS = {
  'china': [
    { name: '中国红', hex: '#E53935', desc: '喜庆/吉祥' },
    { name: '金色', hex: '#FFD700', desc: '尊贵/财富' },
    { name: '墨黑', hex: '#2C2C2C', desc: '稳重/大气' },
    { name: '青花蓝', hex: '#1E88E5', desc: '传统/典雅' },
    { name: '玉绿', hex: '#4CAF50', desc: '自然/和谐' },
    { name: '紫禁红', hex: '#8B0000', desc: '宫廷/庄重' },
  ],
  'southeast-asia': [
    { name: '金色', hex: '#FFD700', desc: '皇室/神圣' },
    { name: '绿色', hex: '#2E8B57', desc: '自然/和谐' },
    { name: '棕色', hex: '#8B4513', desc: '土地/稳定' },
    { name: '米黄', hex: '#F0E68C', desc: '温和/友好' },
    { name: '橙黄', hex: '#FFA500', desc: '活力/热情' },
    { name: '青绿', hex: '#20B2AA', desc: '清新/自然' },
  ],
  'middle-east': [
    { name: '伊斯兰绿', hex: '#2E8B57', desc: '宗教/吉祥' },
    { name: '金色', hex: '#D4AF37', desc: '装饰/尊贵' },
    { name: '米白', hex: '#F5F5DC', desc: '纯净/简洁' },
    { name: '深蓝', hex: '#1E3A5F', desc: '稳重/专业' },
    { name: '橄榄绿', hex: '#6B8E23', desc: '自然/平和' },
    { name: '沙金', hex: '#C4A35A', desc: '沙漠/传统' },
  ],
  'latin-america': [
    { name: '热情红', hex: '#FF6B6B', desc: '活力/激情' },
    { name: '清新青', hex: '#4ECDC4', desc: '现代/清新' },
    { name: '天蓝', hex: '#45B7D1', desc: '专业/信任' },
    { name: '自然绿', hex: '#96CEB4', desc: '健康/自然' },
    { name: '暖黄', hex: '#FFEAA7', desc: '友好/温暖' },
    { name: '品红', hex: '#FF00FF', desc: '鲜艳/个性' },
  ],
};

const ColorPicker = ({ regionId }) => {
  const [copiedColor, setCopiedColor] = useState(null);
  const colors = REGION_COLORS[regionId] || REGION_COLORS['china'];

  const handleCopy = async (hex, e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedColor(hex);
      setTimeout(() => setCopiedColor(null), 1500);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div>
      {/* Color Grid */}
      <div className="grid grid-cols-6 gap-3">
        {colors.map((color) => (
          <div key={color.hex} className="relative group flex flex-col items-center">
            <button
              onClick={(e) => handleCopy(color.hex, e)}
              className="clay-swatch"
              style={{ backgroundColor: color.hex }}
            >
              {/* Copy Button */}
              <div
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                style={{ boxShadow: '2px 2px 4px rgba(160, 150, 180, 0.2)' }}
              >
                {copiedColor === color.hex ? (
                  <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-clay-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
            </button>

            {/* Color Name */}
            <span className="text-[10px] text-clay-muted mt-1.5 font-medium">{color.name}</span>

            {/* Tooltip */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-[20px] text-[11px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10"
              style={{ boxShadow: '8px 8px 16px rgba(160, 150, 180, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9)' }}>
              <div className="font-bold text-clay-foreground" style={{ fontFamily: "'Alimama FangYuanTi VF', sans-serif" }}>{color.name}</div>
              <div className="text-violet-500 font-mono">{color.hex}</div>
              <div className="text-clay-muted">{color.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
