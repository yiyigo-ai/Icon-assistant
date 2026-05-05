import React, { useState } from 'react';

const ExportPanel = ({ svgContent, iconDescription, styleId, figmaFileUrl }) => {
  const [message, setMessage] = useState(null);

  const styleNames = {
    'simple-linear': '简单线性',
    'color-linear': '彩色线性',
    'line-surface': '线面结合',
    'color-surface': '彩色面性',
  };

  const downloadSVG = () => {
    if (!svgContent) return;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const fileName = iconDescription || 'icon';
    a.download = `${fileName}-${styleId}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setMessage({ type: 'success', text: 'SVG 已下载' });
    setTimeout(() => setMessage(null), 2000);
  };

  return (
    <div className="bg-white p-4 border-2 border-black relative">
      {/* Corner Decorations */}
      <div className="absolute top-2 right-2 flex gap-1">
        <div className="w-2 h-2 bg-[#F0C020]"></div>
        <div className="w-2 h-2 bg-[#D02020] rotate-45"></div>
      </div>

      <h2 className="bauhaus-label text-xs text-[#121212] mb-3 flex items-center gap-2">
        <span className="w-3 h-3 bg-[#1040C0]"></span>
        导出
      </h2>

      {message && (
        <div className="mb-3 p-2 bg-[#F0C020] text-black text-xs font-bold border-2 border-black">
          {message.text}
        </div>
      )}

      <div className="flex gap-2">
        {/* 下载SVG按钮 */}
        <button
          onClick={downloadSVG}
          disabled={!svgContent}
          className={`
            flex-1 flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wide border-2 border-black transition-all
            ${svgContent
              ? 'bg-[#D02020] text-white shadow-[3px_3px_0px_0px_#121212] hover:-translate-y-0.5 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          下载 SVG
        </button>

        {/* Figma链接按钮 */}
        <a
          href={figmaFileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wide border-2 border-black bg-[#1040C0] text-white shadow-[3px_3px_0px_0px_#121212] hover:-translate-y-0.5 transition-all"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.588 4.587a3 3 0 0 0 0 4.243l5.1 5.1a1 1 0 0 0 1.414 0l5.1-5.1a3 3 0 0 0-4.243-4.243L12 5.465l-.959-.96a3 3 0 0 0-4.243 0l-.01.01-.2.072z"/>
          </svg>
          打开 Figma
        </a>
      </div>

      {/* 当前选择信息 */}
      <div className="mt-3 pt-3 border-t-2 border-black flex items-center gap-2">
        {iconDescription && (
          <span className="px-2 py-0.5 bg-gray-100 text-[#121212] text-xs font-bold border border-black truncate max-w-[120px]">
            {iconDescription}
          </span>
        )}
        {styleId && (
          <span className="px-2 py-0.5 bg-[#F0C020] text-[#121212] text-xs font-bold border border-black">
            {styleNames[styleId]}
          </span>
        )}
      </div>
    </div>
  );
};

export default ExportPanel;
