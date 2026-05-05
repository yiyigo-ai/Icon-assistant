import React from 'react';

const IconPreview = ({ generatedIcons, selectedIndex, onSelect, currentIcon, styleId }) => {
  const styleNames = {
    'simple-linear': '简单线性',
    'color-linear': '彩色线性',
    'line-surface': '线面结合',
    'color-surface': '彩色面性',
  };

  if (generatedIcons.length === 0) {
    return (
      <div className="bg-white p-4 border-2 border-black relative">
        {/* Corner Decorations */}
        <div className="absolute top-2 right-2 flex gap-1">
          <div className="w-2 h-2 bg-[#1040C0] rounded-full"></div>
          <div className="w-2 h-2 bg-[#F0C020]"></div>
        </div>

        <h2 className="bauhaus-label text-xs text-[#121212] mb-3 flex items-center gap-2">
          <span className="w-3 h-3 bg-[#D02020]"></span>
          图标预览
        </h2>

        <div className="border-2 border-dashed border-gray-300 p-8 flex items-center justify-center min-h-[200px]">
          <div className="text-center text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs font-bold uppercase">生成后显示预览</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 border-2 border-black relative">
      {/* Corner Decorations */}
      <div className="absolute top-2 right-2 flex gap-1">
        <div className="w-2 h-2 bg-[#D02020]"></div>
        <div className="w-2 h-2 bg-[#F0C020] rounded-full"></div>
      </div>

      <h2 className="bauhaus-label text-xs text-[#121212] mb-3 flex items-center gap-2">
        <span className="w-3 h-3 bg-[#1040C0]"></span>
        图标预览
        <span className="text-[10px] font-normal text-gray-500 ml-2">
          （共 {generatedIcons.length} 个）
        </span>
      </h2>

      {/* 小图标选择区 */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {generatedIcons.map((icon, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`
              flex-shrink-0 w-14 h-14 p-2 border-2 border-black transition-all
              ${selectedIndex === index
                ? 'bg-[#121212] shadow-[3px_3px_0px_0px_#D02020]'
                : 'bg-white hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#121212]'
              }
            `}
          >
            <div
              className="w-full h-full flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            />
          </button>
        ))}
      </div>

      {/* 大图标预览区 */}
      <div className="border-2 border-black p-6 bg-white flex items-center justify-center min-h-[180px]">
        <div
          className="w-32 h-32 flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: currentIcon }}
        />
      </div>

      {/* 当前信息 */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-[#121212] text-white text-xs font-bold">
            方案 {selectedIndex + 1}
          </span>
          <span className="px-2 py-1 bg-[#1040C0] text-white text-xs font-bold">
            {styleNames[styleId]}
          </span>
        </div>
        <span className="text-xs text-gray-500 font-bold">88 × 88 px</span>
      </div>
    </div>
  );
};

export default IconPreview;
