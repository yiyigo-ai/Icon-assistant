import React from 'react';
import { regions } from '../data/regions';

const RegionSelector = ({ selectedRegion, onSelect, customRegions = [] }) => {
  const regionGradients = {
    'china': 'linear-gradient(to bottom right, #EF4444, #DC2626)',
    'southeast-asia': 'linear-gradient(to bottom right, #34D399, #059669)',
    'middle-east': 'linear-gradient(to bottom right, #FBBF24, #D97706)',
    'latin-america': 'linear-gradient(to bottom right, #F472B6, #DB2777)',
  };

  // 合并预设区域和自定义区域
  const allRegions = [...regions, ...customRegions];

  return (
    <div className="grid grid-cols-3 gap-3">
      {allRegions.map((region) => {
        const isSelected = selectedRegion === region.id;
        const gradientStyle = regionGradients[region.id] || 'linear-gradient(to bottom right, #A78BFA, #7C3AED)';

        return (
          <button
            key={region.id}
            onClick={() => onSelect(region.id)}
            className={`clay-select-card text-left ${isSelected ? 'selected' : ''}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0"
                style={{
                  background: gradientStyle,
                  boxShadow: '3px 3px 6px rgba(160, 150, 180, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.8)'
                }}>
                <span className="text-base">{region.emoji}</span>
              </div>
              <span className="font-display font-bold text-xs truncate" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {region.shortName}
              </span>
            </div>
            <p className="text-[10px] text-clay-muted truncate">{region.countryNames}</p>

            {/* Selected Indicator */}
            {isSelected && (
              <div className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(to bottom right, #A78BFA, #7C3AED)',
                  boxShadow: '2px 2px 4px rgba(139, 92, 246, 0.3)'
                }}>
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default RegionSelector;
