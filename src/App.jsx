import React, { useState } from 'react';
import IconInput from './components/IconInput';
import StyleSelector from './components/StyleSelector';
import InspirationReference from './components/InspirationReference';
import AIIconGenerator from './components/AIIconGenerator';
import SettingsModal from './components/SettingsModal';
import LandingPage from './components/LandingPage';
import RegionDesignPanel from './components/RegionDesignPanel';
import { hasApiKey } from './services/dashscopeService';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState('china');
  const [iconDescription, setIconDescription] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('color-linear');
  const [showSettings, setShowSettings] = useState(false);

  // Floating Clay Shapes Background Component
  const FloatingClayBackground = () => (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {/* Large violet blob */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-violet-200/40 to-violet-300/20 animate-clay-float"
        style={{
          boxShadow: '40px 40px 80px rgba(139, 92, 246, 0.08), -30px -30px 60px rgba(255, 255, 255, 0.4), inset 15px 15px 30px rgba(255, 255, 255, 0.2)'
        }}
      />
      {/* Pink blob */}
      <div
        className="absolute -right-[8%] top-[15%] w-[35vw] h-[35vw] rounded-[60%_40%_30%_70%/50%_60%_40%_50%] bg-gradient-to-br from-pink-200/35 to-pink-300/15 animate-clay-float-delayed animation-delay-2000"
        style={{
          boxShadow: '30px 30px 60px rgba(236, 72, 153, 0.06), -20px -20px 40px rgba(255, 255, 255, 0.3), inset 10px 10px 20px rgba(255, 255, 255, 0.2)'
        }}
      />
      {/* Blue blob */}
      <div
        className="absolute bottom-[8%] left-[25%] w-[30vw] h-[30vw] rounded-[50%_50%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-blue-200/35 to-cyan-200/15 animate-clay-float-slow animation-delay-4000"
        style={{
          boxShadow: '25px 25px 50px rgba(14, 165, 233, 0.05), -15px -15px 30px rgba(255, 255, 255, 0.3), inset 8px 8px 16px rgba(255, 255, 255, 0.2)'
        }}
      />
      {/* Emerald blob */}
      <div
        className="absolute -bottom-[8%] -right-[8%] w-[40vw] h-[40vw] rounded-[45%_55%_65%_35%/55%_45%_55%_45%] bg-gradient-to-br from-emerald-200/30 to-teal-200/10 animate-clay-float animation-delay-6000"
        style={{
          boxShadow: '35px 35px 70px rgba(16, 185, 129, 0.04), -25px -25px 50px rgba(255, 255, 255, 0.3), inset 12px 12px 24px rgba(255, 255, 255, 0.2)'
        }}
      />
      {/* Small decorative shapes */}
      <div
        className="absolute top-[25%] right-[30%] w-16 h-16 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-br from-amber-100/50 to-orange-100/30 animate-clay-float animation-delay-2000"
        style={{
          boxShadow: '8px 8px 16px rgba(245, 158, 11, 0.06), -6px -6px 12px rgba(255, 255, 255, 0.3), inset 3px 3px 6px rgba(255, 255, 255, 0.3)'
        }}
      />
      <div
        className="absolute top-[55%] left-[10%] w-12 h-12 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] bg-gradient-to-br from-rose-100/50 to-pink-100/30 animate-clay-float-delayed animation-delay-4000"
        style={{
          boxShadow: '6px 6px 12px rgba(244, 63, 94, 0.05), -4px -4px 8px rgba(255, 255, 255, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.3)'
        }}
      />
    </div>
  );

  // Landing Page
  if (showLanding) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <LandingPage onEnter={() => setShowLanding(false)} />

        {/* Settings Button on Landing */}
        <button
          onClick={() => setShowSettings(true)}
          className="fixed top-6 right-6 w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white hover:-translate-y-1"
          style={{
            paddingLeft: '0px',
            paddingRight: '0px',
            marginLeft: '63px',
            marginRight: '63px',
            boxShadow: '8px 8px 16px rgba(160, 150, 180, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)'
          }}
          title="设置"
        >
          <svg className="w-5 h-5" style={{ color: '#6b7280' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        <SettingsModal
          isOpen={showSettings}
          onClose={() => setShowSettings(false)}
        />
      </div>
    );
  }

  // Main App
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingClayBackground />

      <div className="relative max-w-6xl mx-auto py-6 px-4">
        {/* Header */}
        <header className="mb-6">
          <div className="clay-card p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Back Button */}
              <button
                onClick={() => setShowLanding(true)}
                className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center transition-all hover:bg-white hover:-translate-y-0.5"
                style={{ boxShadow: '4px 4px 8px rgba(160, 150, 180, 0.08), -3px -3px 6px rgba(255, 255, 255, 0.6)' }}
                aria-label="返回首页"
              >
                <svg className="w-5 h-5" style={{ color: '#635f69' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              {/* Logo */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(to bottom right, #A78BFA, #7C3AED)',
                  boxShadow: '4px 4px 8px rgba(139, 92, 246, 0.2)'
                }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h1
                  className="text-lg font-bold"
                  style={{ fontFamily: "'Alimama FangYuanTi VF', 'Noto Sans SC', sans-serif", color: '#332f3a' }}
                >
                  捏捏Icon
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* API Key Warning */}
              {!hasApiKey() && (
                <button
                  onClick={() => setShowSettings(true)}
                  className="clay-button clay-button-secondary text-sm py-2 px-4"
                  style={{ fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  配置 API
                </button>
              )}

              {/* Settings Button */}
              <button
                onClick={() => setShowSettings(true)}
                className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white hover:-translate-y-0.5"
                style={{ boxShadow: '6px 6px 12px rgba(160, 150, 180, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.7)' }}
                title="设置"
                aria-label="打开设置"
              >
                <svg className="w-5 h-5" style={{ color: '#635f69' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content - Left/Right Layout */}
        <div className="grid grid-cols-5 gap-6">
          {/* Left Column - 60% */}
          <div className="col-span-3">
            <div className="clay-card p-5 space-y-6">
              {/* Icon Input */}
              <div>
                <div className="section-label">描述图标 / Describe Icon</div>
                <IconInput
                  value={iconDescription}
                  onChange={setIconDescription}
                />
              </div>

              {/* Style Selection */}
              <div>
                <StyleSelector
                  selectedStyle={selectedStyle}
                  onSelect={setSelectedStyle}
                  regionId={selectedRegion}
                />
              </div>

              {/* Region Design Panel - Collapsible */}
              <RegionDesignPanel
                selectedRegion={selectedRegion}
                onSelectRegion={setSelectedRegion}
                keyword={iconDescription}
              />
            </div>
          </div>

          {/* Right Column - 40% */}
          <div className="col-span-2 space-y-6">
            {/* AI Generate */}
            <div className="clay-card p-5">
              <AIIconGenerator
                description={iconDescription}
                style={selectedStyle}
                region={selectedRegion}
                onSettingsClick={() => setShowSettings(true)}
              />
            </div>

            {/* Inspiration Reference */}
            <div className="clay-card p-5">
              <InspirationReference keyword={iconDescription} styleId={selectedStyle} />
            </div>
          </div>
        </div>
      </div>

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </div>
  );
}

export default App;
