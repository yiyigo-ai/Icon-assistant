import React from 'react';

// 风格配置：每个风格在每个地区适合的使用场景
const styleScenarios = {
  'simple-linear': {
    name: '简单线性',
    description: '单一线条，简洁几何',
    scenarios: {
      'china': ['电商', '出行', '工具'],
      'southeast-asia': ['电商', '社交', '出行'],
      'middle-east': ['电商', '金融', '工具'],
      'latin-america': ['社交', '出行', '影音'],
    },
  },
  'color-linear': {
    name: '彩色线性',
    description: '多层线条，层次分明',
    scenarios: {
      'china': ['社交', '影音', '电商'],
      'southeast-asia': ['电商', '社交', '影音'],
      'middle-east': ['电商', '社交', '金融'],
      'latin-america': ['电商', '社交', '影音'],
    },
  },
  'line-surface': {
    name: '线面结合',
    description: '线条勾勒，色块填充',
    scenarios: {
      'china': ['电商', '社交', '金融'],
      'southeast-asia': ['电商', '社交', '出行'],
      'middle-east': ['工具'],
      'latin-america': ['电商', '社交', '影音'],
    },
  },
  'color-surface': {
    name: '彩色面性',
    description: '实心填充，视觉强烈',
    scenarios: {
      'china': ['社交', '影音', '游戏'],
      'southeast-asia': ['社交', '影音', '游戏'],
      'middle-east': ['工具'],
      'latin-america': ['社交', '影音', '游戏'],
    },
  },
};

const StyleSelector = ({ selectedStyle, onSelect, regionId }) => {
  return (
    <div>
      <div className="section-label">选择风格 / Select Style</div>
      <div className="grid grid-cols-4 gap-3">
        {Object.entries(styleScenarios).map(([styleId, style]) => {
          const isSelected = selectedStyle === styleId;
          const scenarios = style.scenarios[regionId] || style.scenarios['china'];

          return (
            <button
              key={styleId}
              onClick={() => onSelect(styleId)}
              className={`clay-select-card text-center p-3 relative ${isSelected ? 'selected' : ''}`}
            >
              {/* Selected Indicator - Top Right */}
              {isSelected && (
                <div
                  className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(to bottom right, #A78BFA, #7C3AED)',
                    boxShadow: '2px 2px 4px rgba(139, 92, 246, 0.3)',
                  }}
                >
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              {/* 统一浅色背景 */}
              <div
                className="w-10 h-10 mx-auto mb-2 rounded-[8px] flex items-center justify-center"
                style={{
                  backgroundColor: '#F5F3FF',
                  boxShadow: 'inset 2px 2px 4px rgba(139, 92, 246, 0.1), inset -2px -2px 4px rgba(255, 255, 255, 0.8)',
                }}
              >
                <svg viewBox="0 0 40 40" className="w-6 h-6">
                  {/* 简单线性：单色线条 */}
                  {styleId === 'simple-linear' && (
                    <>
                      <circle cx="20" cy="20" r="12" fill="none" stroke="#7C3AED" strokeWidth="2.5" />
                      <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="none" stroke="#7C3AED" strokeWidth="2.5" />
                    </>
                  )}

                  {/* 彩色线性：多层线条，深浅变化 */}
                  {styleId === 'color-linear' && (
                    <>
                      <circle cx="20" cy="20" r="12" fill="none" stroke="#7C3AED" strokeWidth="2.5" />
                      <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="none" stroke="#A78BFA" strokeWidth="2.5" />
                      <circle cx="20" cy="20" r="5" fill="none" stroke="#C4B5FD" strokeWidth="2" />
                    </>
                  )}

                  {/* 线面结合：线条+半透明填充 */}
                  {styleId === 'line-surface' && (
                    <>
                      <circle cx="20" cy="20" r="12" fill="rgba(167, 139, 250, 0.3)" stroke="#7C3AED" strokeWidth="2" />
                      <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="rgba(124, 58, 237, 0.4)" stroke="#7C3AED" strokeWidth="2" />
                    </>
                  )}

                  {/* 彩色面性：实心填充 */}
                  {styleId === 'color-surface' && (
                    <>
                      <circle cx="20" cy="20" r="12" fill="#7C3AED" />
                      <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="#A78BFA" />
                    </>
                  )}
                </svg>
              </div>

              <h3
                className="font-bold text-xs"
                style={{ fontFamily: 'Alimama FangYuanTi VF, Noto Sans SC, sans-serif', color: '#332F3A' }}
              >
                {style.name}
              </h3>

              {/* 使用场景标签 */}
              <div className="mt-1.5 flex flex-wrap justify-center gap-0.5">
                {scenarios.slice(0, 2).map((scenario) => (
                  <span
                    key={scenario}
                    className="text-[9px] px-1.5 py-0.5 rounded-[8px] font-medium"
                    style={{ backgroundColor: '#F3E8FF', color: '#7C3AED' }}
                  >
                    {scenario}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
