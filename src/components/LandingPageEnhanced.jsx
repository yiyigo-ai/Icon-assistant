import React, { useState, useEffect, useRef } from 'react';

/**
 * 增强版落地页设计方案
 *
 * 设计理念：
 * - Claymorphism（黏土拟态）风格
 * - 视觉冲击力与内容丰富度兼顾
 * - 微交互增强用户体验
 */

const LandingPageEnhanced = ({ onEnter }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 功能亮点数据
  const features = [
    {
      id: 'ai-generate',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI智能生成',
      description: '输入描述，AI秒速生成专业图标，让创意即刻呈现',
      color: 'from-violet-400 to-violet-600',
      shadowColor: 'rgba(139, 92, 246, 0.25)'
    },
    {
      id: 'cultural-adapt',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '多地区文化适配',
      description: '自动适配东南亚、欧美、中东等地区审美偏好',
      color: 'from-pink-400 to-pink-600',
      shadowColor: 'rgba(236, 72, 153, 0.25)'
    },
    {
      id: 'style-variants',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: '多样化风格',
      description: '扁平、渐变、3D等多种风格一键切换',
      color: 'from-blue-400 to-blue-600',
      shadowColor: 'rgba(96, 165, 250, 0.25)'
    },
    {
      id: 'design-tips',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '专业设计建议',
      description: '实时提供设计优化建议，提升图标质量',
      color: 'from-emerald-400 to-emerald-600',
      shadowColor: 'rgba(16, 185, 129, 0.25)'
    }
  ];

  // 图标展示数据
  const iconShowcase = [
    { id: 1, name: '购物车', style: 'color-linear' },
    { id: 2, name: '用户中心', style: 'flat-minimal' },
    { id: 3, name: '消息通知', style: 'gradient-3d' },
    { id: 4, name: '搜索', style: 'color-linear' },
    { id: 5, name: '收藏', style: 'flat-minimal' },
    { id: 6, name: '分享', style: 'gradient-3d' },
  ];

  // 使用流程数据
  const steps = [
    {
      number: '01',
      title: '输入描述',
      description: '用自然语言描述你想要的图标'
    },
    {
      number: '02',
      title: '选择风格',
      description: '选择适合目标市场的图标风格'
    },
    {
      number: '03',
      title: '一键生成',
      description: 'AI自动生成并优化你的图标'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: '#F4F1FA' }}>
      {/* ========== 导航栏 ========== */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrollY > 50 ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
          boxShadow: scrollY > 50 ? '0 4px 20px rgba(160, 150, 180, 0.1)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                boxShadow: '4px 4px 8px rgba(139, 92, 246, 0.25)'
              }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span
              className="text-lg font-bold hidden sm:block"
              style={{ fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif', color: '#332f3a' }}
            >
              Clay Icons
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#features"
              className="text-sm font-medium transition-colors hover:text-violet-600"
              style={{ fontFamily: 'AlimamaFangYuanTiVF, sans-serif', color: '#635f69' }}
            >
              功能
            </a>
            <a
              href="#showcase"
              className="text-sm font-medium transition-colors hover:text-violet-600"
              style={{ fontFamily: 'AlimamaFangYuanTiVF, sans-serif', color: '#635f69' }}
            >
              案例
            </a>
            <button
              onClick={onEnter}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                boxShadow: '6px 6px 12px rgba(139, 92, 246, 0.25)'
              }}
            >
              开始创作
            </button>
          </div>
        </div>
      </nav>

      {/* ========== Hero 区域 ========== */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* 主装饰形状 */}
        <div
          className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px]"
          style={{
            right: '-15%',
            top: '50%',
            transform: `translateY(-50%) translateX(${scrollY * 0.05}px)`,
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            background: 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 25%, #8b5cf6 50%, #7c3aed 75%, #6d28d9 100%)',
            boxShadow: `
              40px 40px 80px rgba(139, 92, 246, 0.3),
              -20px -20px 60px rgba(255, 255, 255, 0.8),
              inset 20px 20px 40px rgba(255, 255, 255, 0.3),
              inset -10px -10px 30px rgba(109, 40, 217, 0.2)
            `,
            animation: 'clay-morph 12s ease-in-out infinite',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease-out'
          }}
        />

        {/* 浮动装饰形状 */}
        <div
          className="absolute w-20 h-20 opacity-80"
          style={{
            left: '10%',
            top: '20%',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            background: 'linear-gradient(135deg, #fda4af 0%, #fb7185 100%)',
            boxShadow: `
              12px 12px 24px rgba(251, 113, 133, 0.2),
              -8px -8px 16px rgba(255, 255, 255, 0.6),
              inset 6px 6px 12px rgba(255, 255, 255, 0.4)
            `,
            animation: 'clay-float-soft 8s ease-in-out infinite'
          }}
        />

        <div
          className="absolute w-14 h-14 opacity-80"
          style={{
            left: '25%',
            bottom: '25%',
            borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%',
            background: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 100%)',
            boxShadow: `
              8px 8px 16px rgba(96, 165, 250, 0.2),
              -6px -6px 12px rgba(255, 255, 255, 0.6),
              inset 4px 4px 8px rgba(255, 255, 255, 0.4)
            `,
            animation: 'clay-float-soft 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />

        <div
          className="absolute w-10 h-10 opacity-80"
          style={{
            right: '30%',
            bottom: '15%',
            borderRadius: '50% 50% 40% 60% / 40% 60% 40% 60%',
            background: 'linear-gradient(135deg, #86efac 0%, #4ade80 100%)',
            boxShadow: `
              6px 6px 12px rgba(74, 222, 128, 0.2),
              -4px -4px 8px rgba(255, 255, 255, 0.6),
              inset 3px 3px 6px rgba(255, 255, 255, 0.4)
            `,
            animation: 'clay-float-soft 9s ease-in-out infinite',
            animationDelay: '4s'
          }}
        />

        {/* Hero 内容 */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
          <div className="max-w-xl">
            {/* 主标题 */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
              style={{
                fontFamily: 'Quicksand, ui-sans-serif, sans-serif',
                fontWeight: 700,
                color: '#1a1625',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              Clay Icons
            </h1>

            {/* 中文名称 */}
            <p
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: 'AlimamaFangYuanTiVF, ui-sans-serif, sans-serif',
                color: '#374151',
                letterSpacing: '0.02em',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
              }}
            >
              捏捏Icon
            </p>

            {/* 描述 */}
            <p
              className="text-base sm:text-lg mb-10 max-w-md"
              style={{
                fontFamily: 'AlimamaFangYuanTiVF, ui-sans-serif, sans-serif',
                color: '#6b7280',
                lineHeight: 1.6,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
              }}
            >
              像捏黏土一样简单，让 AI 帮你塑造独一无二的跨境电商图标
            </p>

            {/* CTA 按钮组 */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
              }}
            >
              <button
                onClick={onEnter}
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold transition-all duration-200 hover:-translate-y-1"
                style={{
                  fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif',
                  fontWeight: 600,
                  color: 'white',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: '16px',
                  boxShadow: `
                    8px 8px 16px rgba(139, 92, 246, 0.3),
                    -4px -4px 12px rgba(255, 255, 255, 0.5),
                    inset 2px 2px 4px rgba(255, 255, 255, 0.2)
                  `
                }}
              >
                开始创作
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold transition-all duration-200 hover:-translate-y-1"
                style={{
                  fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif',
                  fontWeight: 600,
                  color: '#332f3a',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '16px',
                  boxShadow: `
                    6px 6px 12px rgba(160, 150, 180, 0.12),
                    -4px -4px 10px rgba(255, 255, 255, 0.8)
                  `
                }}
              >
                了解更多
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* 提示信息 */}
            <p
              className="mt-8 text-sm"
              style={{
                fontFamily: 'AlimamaFangYuanTiVF, sans-serif',
                color: '#9ca3af',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s ease-out 0.5s'
              }}
            >
              需要配置阿里云百炼 API Key
            </p>
          </div>
        </div>
      </section>

      {/* ========== 功能亮点区域 ========== */}
      <section id="features" className="relative py-24">
        {/* 背景装饰 */}
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #A78BFA 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* 区域标题 */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif', color: '#1a1625' }}
            >
              核心功能
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'AlimamaFangYuanTiVF, sans-serif', color: '#6b7280' }}
            >
              为跨境电商量身打造的AI图标设计工具，让创意触手可及
            </p>
          </div>

          {/* 功能卡片网格 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="relative group"
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 * (index + 1)}s`
                }}
              >
                <div
                  className="h-full p-6 rounded-3xl transition-all duration-300 group-hover:-translate-y-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: activeFeature === feature.id
                      ? `16px 16px 32px ${feature.shadowColor}, -10px -10px 24px rgba(255, 255, 255, 0.9)`
                      : '12px 12px 24px rgba(160, 150, 180, 0.12), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                  }}
                >
                  {/* 图标 */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${feature.color} text-white`}
                    style={{
                      boxShadow: `6px 6px 12px ${feature.shadowColor}`
                    }}
                  >
                    {feature.icon}
                  </div>

                  {/* 标题 */}
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif', color: '#1a1625' }}
                  >
                    {feature.title}
                  </h3>

                  {/* 描述 */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'AlimamaFangYuanTiVF, sans-serif', color: '#6b7280' }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 图标展示区域 ========== */}
      <section id="showcase" className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* 区域标题 */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif', color: '#1a1625' }}
            >
              图标案例
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'AlimamaFangYuanTiVF, sans-serif', color: '#6b7280' }}
            >
              多种风格，一键生成，满足不同场景需求
            </p>
          </div>

          {/* 图标网格 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {iconShowcase.map((icon, index) => (
              <div
                key={icon.id}
                className="aspect-square rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '8px 8px 16px rgba(160, 150, 180, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)'
                }}
              >
                <div className="text-center">
                  <div
                    className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white"
                    style={{
                      boxShadow: '4px 4px 8px rgba(139, 92, 246, 0.2)'
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p
                    className="text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{ fontFamily: 'AlimamaFangYuanTiVF, sans-serif', color: '#332f3a' }}
                  >
                    {icon.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 使用流程区域 ========== */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* 区域标题 */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif', color: '#1a1625' }}
            >
              使用流程
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'AlimamaFangYuanTiVF, sans-serif', color: '#6b7280' }}
            >
              三步完成专业图标设计
            </p>
          </div>

          {/* 步骤卡片 */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* 连接线 */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-16 left-1/2 w-full h-0.5"
                    style={{
                      background: 'linear-gradient(to right, #A78BFA, #EFEBF5)'
                    }}
                  />
                )}

                <div
                  className="text-center p-8 rounded-3xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '12px 12px 24px rgba(160, 150, 180, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                  }}
                >
                  {/* 步骤编号 */}
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                      boxShadow: '8px 8px 16px rgba(139, 92, 246, 0.25)'
                    }}
                  >
                    {step.number}
                  </div>

                  {/* 步骤标题 */}
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif', color: '#1a1625' }}
                  >
                    {step.title}
                  </h3>

                  {/* 步骤描述 */}
                  <p
                    className="text-sm"
                    style={{ fontFamily: 'AlimamaFangYuanTiVF, sans-serif', color: '#6b7280' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA 区域 ========== */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="text-center p-12 sm:p-16 rounded-[40px]"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: `
                20px 20px 40px rgba(139, 92, 246, 0.15),
                -15px -15px 30px rgba(255, 255, 255, 0.8),
                inset 8px 8px 16px rgba(255, 255, 255, 0.5)
              `
            }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif', color: '#1a1625' }}
            >
              准备好开始创作了吗?
            </h2>
            <p
              className="text-lg mb-8 max-w-xl mx-auto"
              style={{ fontFamily: 'AlimamaFangYuanTiVF, sans-serif', color: '#6b7280' }}
            >
              立即体验AI图标设计的魅力，让你的跨境电商业务脱颖而出
            </p>

            <button
              onClick={onEnter}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold transition-all duration-200 hover:-translate-y-1"
              style={{
                fontFamily: 'Quicksand, AlimamaFangYuanTiVF, sans-serif',
                fontWeight: 600,
                color: 'white',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                borderRadius: '20px',
                boxShadow: `
                  10px 10px 20px rgba(139, 92, 246, 0.35),
                  -6px -6px 16px rgba(255, 255, 255, 0.5),
                  inset 3px 3px 6px rgba(255, 255, 255, 0.25)
                `
              }}
            >
              开始创作
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ========== 页脚 ========== */}
      <footer className="py-12" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
                }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span
                className="text-sm"
                style={{ fontFamily: 'AlimamaFangYuanTiVF, sans-serif', color: '#635f69' }}
              >
                Clay Icons - 捏捏Icon
              </span>
            </div>

            <p
              className="text-sm"
              style={{ fontFamily: 'AlimamaFangYuanTiVF, sans-serif', color: '#9ca3af' }}
            >
              Powered by 阿里云百炼 AI
            </p>
          </div>
        </div>
      </footer>

      {/* CSS 动画定义 */}
      <style>{`
        @keyframes clay-morph {
          0%, 100% {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            transform: translateY(-50%) rotate(0deg);
          }
          25% {
            border-radius: 50% 50% 60% 40% / 50% 60% 40% 50%;
          }
          50% {
            border-radius: 60% 40% 50% 50% / 60% 40% 60% 40%;
            transform: translateY(-50%) rotate(3deg);
          }
          75% {
            border-radius: 50% 60% 40% 60% / 40% 50% 50% 60%;
          }
        }

        @keyframes clay-float-soft {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPageEnhanced;
