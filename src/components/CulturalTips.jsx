import React from 'react';
import { getCulturalRules } from '../data/culturalRules';

const CulturalTips = ({ regionId, categoryId }) => {
  const rules = getCulturalRules(regionId, categoryId);

  if (!rules) return null;

  return (
    <div className="bg-white p-4 border-2 border-black relative mt-6">
      {/* Corner Decorations */}
      <div className="absolute top-2 right-2 flex gap-1">
        <div className="w-2 h-2 bg-[#D02020]"></div>
        <div className="w-2 h-2 bg-[#1040C0] rounded-full"></div>
      </div>

      <h2 className="bauhaus-label text-xs text-[#121212] mb-4 flex items-center gap-2">
        <span className="w-3 h-3 bg-[#F0C020] rotate-45"></span>
        文化合规指南
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* 宜做 */}
        <div className="p-3 bg-white border-2 border-black">
          <h3 className="font-bold text-xs uppercase tracking-wide mb-3 flex items-center gap-2 text-[#1040C0]">
            <div className="w-4 h-4 bg-[#1040C0] flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            推荐做法
          </h3>
          <ul className="space-y-2">
            {rules.do.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-[#121212]">
                <span className="text-[#1040C0] font-bold">■</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 禁忌 */}
        <div className="p-3 bg-white border-2 border-black">
          <h3 className="font-bold text-xs uppercase tracking-wide mb-3 flex items-center gap-2 text-[#D02020]">
            <div className="w-4 h-4 bg-[#D02020] flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            需要避免
          </h3>
          <ul className="space-y-2">
            {rules.avoid.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-[#121212]">
                <span className="text-[#D02020] font-bold">▲</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 安全色系 */}
      <div className="mt-4 pt-4 border-t-2 border-black">
        <h3 className="text-xs font-bold uppercase tracking-wide mb-2">安全色系</h3>
        <div className="flex flex-wrap gap-2">
          {rules.safeColors.map((color, index) => (
            <div key={index} className="flex items-center gap-2 bg-white border-2 border-black px-2 py-1">
              <div
                className="w-4 h-4 border border-black"
                style={{ backgroundColor: color }}
              />
              <span className="text-[10px] font-mono font-bold">{color}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalTips;
