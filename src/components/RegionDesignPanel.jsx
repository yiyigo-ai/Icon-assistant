import React, { useState } from 'react';
import RegionSelector from './RegionSelector';
import ColorPicker from './ColorPicker';
import RegionDesignTips from './RegionDesignTips';

const RegionDesignPanel = ({ selectedRegion, onSelectRegion, keyword }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [customRegions, setCustomRegions] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newRegionName, setNewRegionName] = useState('');
  const [newRegionEmoji, setNewRegionEmoji] = useState('🌍');

  const handleAddRegion = () => {
    if (newRegionName.trim()) {
      const newRegion = {
        id: `custom-${Date.now()}`,
        name: newRegionName.trim(),
        shortName: newRegionName.trim().slice(0, 4),
        emoji: newRegionEmoji,
        countryNames: '自定义区域',
      };
      setCustomRegions([...customRegions, newRegion]);
      setNewRegionName('');
      setNewRegionEmoji('🌍');
      setShowAddModal(false);
    }
  };

  const emojiOptions = ['🌍', '🌎', '🌏', '🇪🇺', '🇺🇸', '🇨🇳', '🇯🇵', '🇰🇷', '🇬🇧', '🇫🇷', '🇩🇪', '🇦🇺', '🇧🇷', '🇲🇽', '🌟', '⭐'];

  return (
    <div>
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-2"
      >
        <div className="section-label mb-0">
          <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          地域设计建议 / Region Design
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-clay-muted">
            {isExpanded ? '收起' : '展开'}
          </span>
          <svg
            className={`w-4 h-4 text-clay-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="pt-2 space-y-5">
          {/* Region Selector */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="sub-label">选择地区</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAddModal(true);
                }}
                className="text-xs font-semibold text-violet-500 hover:text-violet-600 transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                新增区域
              </button>
            </div>
            <RegionSelector
              selectedRegion={selectedRegion}
              onSelect={onSelectRegion}
              customRegions={customRegions}
            />
          </div>

          {/* Color Picker */}
          <div>
            <div className="sub-label">颜色建议</div>
            <ColorPicker regionId={selectedRegion} />
          </div>

          {/* Design Tips */}
          <div>
            <div className="sub-label">设计建议</div>
            <RegionDesignTips
              regionId={selectedRegion}
              keyword={keyword}
            />
          </div>
        </div>
      )}

      {/* Add Region Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowAddModal(false)}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-[40px] p-6 w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '16px 16px 32px rgba(160, 150, 180, 0.2), -10px -10px 24px rgba(255, 255, 255, 0.9)' }}
          >
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Alimama FangYuanTi VF', sans-serif", color: '#332F3A' }}>
              新增自定义区域
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-clay-muted mb-2 block">区域名称</label>
                <input
                  type="text"
                  value={newRegionName}
                  onChange={(e) => setNewRegionName(e.target.value)}
                  placeholder="如：欧洲、南美、北美..."
                  className="clay-input"
                />
              </div>

              <div>
                <label className="text-sm text-clay-muted mb-2 block">选择图标</label>
                <div className="flex flex-wrap gap-2">
                  {emojiOptions.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => setNewRegionEmoji(emoji)}
                      className={`w-10 h-10 rounded-[8px] flex items-center justify-center text-xl transition-all ${
                        newRegionEmoji === emoji
                          ? 'bg-violet-100 ring-2 ring-violet-500'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 clay-button clay-button-secondary"
              >
                取消
              </button>
              <button
                onClick={handleAddRegion}
                disabled={!newRegionName.trim()}
                className={`flex-1 clay-button ${!newRegionName.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                添加
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionDesignPanel;
