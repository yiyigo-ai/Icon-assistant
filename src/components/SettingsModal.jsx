import React, { useState, useEffect } from 'react';
import { getApiKey, saveApiKey, hasApiKey } from '../services/dashscopeService';

const SettingsModal = ({ isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setApiKey(getApiKey());
      setSaved(false);
    }
  }, [isOpen]);

  const handleSave = () => {
    saveApiKey(apiKey.trim());
    setSaved(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const handleClear = () => {
    setApiKey('');
    saveApiKey('');
  };

  if (!isOpen) return null;

  return (
    <div className="clay-modal-overlay" onClick={onClose}>
      <div className="clay-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom right, #A78BFA, #7C3AED)',
                boxShadow: '4px 4px 8px rgba(139, 92, 246, 0.25)'
              }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="font-display text-xl font-extrabold text-clay-foreground" style={{ fontFamily: 'Nunito, sans-serif' }}>
              设置
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center transition-all hover:bg-white hover:-translate-y-0.5"
            style={{ boxShadow: '4px 4px 8px rgba(160, 150, 180, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)' }}
          >
            <svg className="w-5 h-5 text-clay-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* API Key 配置 */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-clay-muted mb-2 font-medium">通义万相 API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="请输入您的 API Key"
              className="clay-input"
            />
            <p className="mt-3 text-sm text-clay-muted">
              获取方式：登录
              <a
                href="https://bailian.console.aliyun.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500 hover:text-violet-600 mx-1 font-medium"
              >
                阿里云百炼控制台
              </a>
              创建 API Key
            </p>
          </div>

          {/* 状态提示 */}
          {saved && (
            <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600 text-sm font-medium flex items-center gap-2"
              style={{ boxShadow: 'inset 3px 3px 6px rgba(16, 185, 129, 0.1)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              保存成功！
            </div>
          )}

          {hasApiKey() && !saved && (
            <div className="p-4 rounded-2xl bg-violet-50 text-violet-600 text-sm font-medium flex items-center gap-2"
              style={{ boxShadow: 'inset 3px 3px 6px rgba(139, 92, 246, 0.1)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              API Key 已配置
            </div>
          )}
        </div>

        {/* 按钮组 */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={handleClear}
            className="clay-button clay-button-secondary"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            清除
          </button>
          <button
            onClick={handleSave}
            disabled={!apiKey.trim()}
            className={`
              flex-1 h-14 rounded-[20px] font-bold text-[15px] tracking-wide transition-all
              ${apiKey.trim()
                ? 'clay-button'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            保存
          </button>
        </div>

        {/* 使用说明 */}
        <div className="mt-6 pt-5 border-t border-clay-muted/10">
          <p className="text-sm text-clay-muted flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            API Key 仅存储在本地浏览器，不会上传到任何服务器。
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
