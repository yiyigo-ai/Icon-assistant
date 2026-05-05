import React from 'react';
import { categories } from '../data/categories';

const CategorySelector = ({ selectedCategory, onSelect }) => {
  return (
    <div className="mb-6">
      <h2 className="bauhaus-label text-xs text-[#121212] mb-3">选择品类 / Select Category</h2>
      <div className="grid grid-cols-3 gap-3">
        {categories.map((category, index) => {
          const isSelected = selectedCategory === category.id;
          const colors = ['bg-[#D02020]', 'bg-[#1040C0]', 'bg-[#F0C020]'];
          const accentColor = colors[index % 3];

          return (
            <button
              key={category.id}
              onClick={() => onSelect(category.id)}
              className={`
                relative p-4 border-2 border-black transition-all text-left
                ${isSelected
                  ? 'bg-[#121212] text-white shadow-[4px_4px_0px_0px_#D02020]'
                  : 'bg-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#121212]'
                }
              `}
            >
              {/* Geometric Accent */}
              <div className={`absolute top-2 right-2 w-3 h-3 ${accentColor} ${index === 0 ? 'rounded-full' : index === 1 ? '' : 'rotate-45'}`}></div>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{category.icon}</span>
                <span className="font-bold text-sm uppercase tracking-wide">{category.name}</span>
              </div>
              <p className="text-[10px] opacity-70">{category.nameZh}</p>

              {/* Sensitivity Badge */}
              {category.sensitivity === 'critical' && (
                <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 bg-[#F0C020] text-black text-[10px] font-bold border border-black">
                  ▲ 高敏感
                </div>
              )}

              {/* Selected Indicator */}
              {isSelected && (
                <div className="absolute bottom-2 left-2">
                  <svg className="w-4 h-4 text-[#F0C020]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
