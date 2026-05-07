import React, { useState, useEffect } from 'react';

const LandingPage = ({ onEnter }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 功能特性数据
  const features = [
    { emoji: '🎨', title: '风格多样', subtitle: '多种风格随心选' },
    { emoji: '🌍', title: '本地优化', subtitle: '多地区市场适配' },
    { emoji: '✨', title: 'AI 智能生成', subtitle: '高效快速出图' },
    { emoji: '💡', title: '专业设计建议', subtitle: '提升图标吸引力' },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#F3F1F9', marginTop: '-27px', marginBottom: '-27px' }}
    >
      {/* 动态背景装饰 */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            top: '-5%',
            left: '-5%',
            width: '500px',
            height: '500px',
            backgroundColor: 'rgba(139, 75, 240, 0.08)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            top: '30%',
            right: '-8%',
            width: '400px',
            height: '400px',
            backgroundColor: 'rgba(219, 39, 119, 0.06)',
            animation: 'float 25s ease-in-out infinite',
            animationDelay: '-5s',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            bottom: '10%',
            left: '30%',
            width: '300px',
            height: '300px',
            backgroundColor: 'rgba(14, 165, 233, 0.05)',
            animation: 'float 18s ease-in-out infinite',
            animationDelay: '-10s',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl landing-bg-orb-extra"
          style={{
            bottom: '-6%',
            right: '12%',
            width: '280px',
            height: '280px',
            backgroundColor: 'rgba(167, 139, 250, 0.09)',
          }}
        />
        <div
          className="absolute rounded-full blur-2xl landing-bg-orb-extra landing-bg-orb-extra-alt"
          style={{
            top: '45%',
            left: '2%',
            width: '200px',
            height: '200px',
            backgroundColor: 'rgba(236, 72, 153, 0.06)',
          }}
        />
      </div>

      {/* 浮动小装饰 */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            top: '12%',
            left: '8%',
            width: '8px',
            height: '8px',
            backgroundColor: 'rgba(139, 75, 240, 0.5)',
            animation: 'bounce 3s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '20%',
            right: '10%',
            width: '6px',
            height: '6px',
            backgroundColor: 'rgba(219, 39, 119, 0.5)',
            animation: 'bounce 4s ease-in-out infinite',
            animationDelay: '-1s',
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: '25%',
            left: '5%',
            width: '10px',
            height: '10px',
            backgroundColor: 'rgba(139, 75, 240, 0.4)',
            borderRadius: '2px',
            transform: 'rotate(45deg)',
            animation: 'bounce 3.5s ease-in-out infinite',
            animationDelay: '-2s',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: '15%',
            right: '8%',
            width: '8px',
            height: '8px',
            backgroundColor: 'rgba(14, 165, 233, 0.5)',
            animation: 'bounce 4.5s ease-in-out infinite',
            animationDelay: '-1.5s',
          }}
        />
        <div
          className="absolute rounded-full landing-particle-drift"
          style={{
            top: '55%',
            left: '18%',
            width: '5px',
            height: '5px',
            backgroundColor: 'rgba(139, 75, 240, 0.45)',
            boxShadow: '0 0 14px rgba(139, 75, 240, 0.35)',
          }}
        />
        <div
          className="absolute rounded-full landing-particle-drift"
          style={{
            top: '38%',
            right: '22%',
            width: '7px',
            height: '7px',
            backgroundColor: 'rgba(244, 114, 182, 0.4)',
            animationDelay: '-2s',
          }}
        />
        <div
          className="absolute rounded-full landing-particle-drift"
          style={{
            bottom: '35%',
            right: '28%',
            width: '4px',
            height: '4px',
            backgroundColor: 'rgba(34, 211, 238, 0.55)',
            animationDelay: '-4s',
          }}
        />
      </div>

      {/* 主内容区 - 1920px 设计宽度适配，缩放到90% */}
      <div
        className="relative mx-auto"
        style={{
          maxWidth: '1920px',
          minHeight: '100vh',
          padding: '60px 127px 50px',
          transform: 'scale(0.9)',
          transformOrigin: 'top center',
        }}
      >
        {/* Header */}
        <header className="flex items-center" style={{ height: '40px', marginTop: '0px', marginBottom: '90px' }}>
          {/* Logo - 笑脸 */}
          <div
            className="relative"
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #A78BFA 0%, #8B4BF0 100%)',
              borderRadius: '10px',
            }}
          >
            {/* 左眼 */}
            <div
              className="absolute rounded-full"
              style={{
                width: '6px',
                height: '6px',
                left: '8px',
                top: '10px',
                backgroundColor: 'white',
              }}
            />
            {/* 右眼 */}
            <div
              className="absolute rounded-full"
              style={{
                width: '6px',
                height: '6px',
                right: '8px',
                top: '10px',
                backgroundColor: 'white',
              }}
            />
            {/* 嘴巴 */}
            <svg
              className="absolute"
              style={{ bottom: '9px', left: '50%', transform: 'translateX(-50%)' }}
              width="14"
              height="11"
              viewBox="0 0 14 11"
            >
              <path d="M1 4 Q7 12 13 4" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {/* 品牌名 */}
          <span
            style={{
              marginLeft: '12px',
              fontFamily: 'Alimama FangYuanTi VF, Noto Sans SC, sans-serif',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1F2937',
              letterSpacing: '-0.6px',
            }}
          >
            捏捏Icon
          </span>
        </header>

        {/* Hero 区域 — 左侧完全参与文档流；右侧仅用 absolute + 占位宽，调右侧不影响左侧排版 */}
        <div className="relative" style={{ paddingTop: '56px' }}>
          <div className="flex items-start" style={{ gap: '315px' }}>
          {/* 左侧内容（不设 height，避免与按钮叠字） */}
          <div style={{ flex: '0 0 auto', maxWidth: '632px', width: '623px', marginTop: '-13px', marginBottom: '-13px' }}>
            {/* Badge */}
            <div
              className="flex items-center badge-pulse"
              style={{
                backgroundColor: 'white',
                border: '1px solid #E9E9E9',
                borderRadius: '9999px',
                height: '47px',
                padding: '0 24px 0 23px',
                marginBottom: '30px',
                width: 'fit-content',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                className="animate-pulse"
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#4ADE80',
                  borderRadius: '9999px',
                  marginRight: '11px',
                }}
              />
              <span
                style={{
                  fontFamily: 'Inter, Noto Sans SC, sans-serif',
                  fontSize: '20px',
                  color: '#6B7280',
                  letterSpacing: '0.35px',
                  whiteSpace: 'nowrap',
                }}
              >
                用捏捏Icon，效率一再up
              </span>
            </div>

            {/* 主标题 */}
            <div style={{ marginBottom: '28px' }}>
              <h1
                style={{
                  fontFamily: 'Alimama FangYuanTi VF, Noto Sans SC, sans-serif',
                  fontSize: '70px',
                  fontWeight: 'bold',
                  color: '#1A1A1A',
                  letterSpacing: '-1.35px',
                  lineHeight: '74px',
                  marginBottom: '21px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s ease',
                }}
              >
                像<span style={{ color: '#8B4BF0' }}>捏粘土</span>一样简单，
              </h1>
              <h1
                style={{
                  fontFamily: 'Alimama FangYuanTi VF, Noto Sans SC, sans-serif',
                  fontSize: '70px',
                  fontWeight: 'bold',
                  color: '#1A1A1A',
                  letterSpacing: '-1.35px',
                  lineHeight: '74px',
                  marginBottom: '21px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s ease 0.1s',
                }}
              >
                让 AI 与你一起塑造
              </h1>
              <h1
                style={{
                  fontFamily: 'Alimama FangYuanTi VF, Noto Sans SC, sans-serif',
                  fontSize: '70px',
                  fontWeight: 'bold',
                  color: '#1A1A1A',
                  letterSpacing: '-1.35px',
                  lineHeight: '74px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s ease 0.2s',
                }}
              >
                独一无二的图标
              </h1>
            </div>

            {/* 描述文字 */}
            <div style={{ paddingTop: '0px', paddingBottom: '0px', marginTop: '-43px' }}>
              <p
                style={{
                  fontFamily: 'Inter, Noto Sans SC, sans-serif',
                  fontSize: '16px',
                  color: '#6B7280',
                  letterSpacing: '0.3px',
                  lineHeight: '1.6',
                  marginTop: '75px',
                  marginBottom: '75px',
                  paddingBottom: '0px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s ease 0.4s',
                }}
              >
                输入描述，AI 自动生成专业图标。提供东南亚、中东、拉美等地区在地化设计建议，支持多风格、多格式导出，助力品牌出海。
              </p>
            </div>

            {/* CTA 按钮 */}
            <button
              type="button"
              onClick={onEnter}
              className="cta-button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                width: '290px',
                height: '67px',
                background: 'linear-gradient(164.74deg, #8B4BF0 0%, #7537E1 100%)',
                borderRadius: '9999px',
                boxShadow: '0px 10px 20px rgba(124, 58, 237, 0.4)',
                border: 'none',
                cursor: 'pointer',
                marginTop: '-35px',
                marginBottom: '29px',
                paddingLeft: '37px',
                paddingTop: '0px',
                paddingBottom: '0px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s ease 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span
                className="cta-text"
                style={{
                  fontFamily: 'Alimama FangYuanTi VF, Noto Sans SC, sans-serif',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: 'white',
                  letterSpacing: '0.4px',
                  marginLeft: '0px',
                  marginRight: '0px',
                  marginTop: '0px',
                  marginBottom: '0px',
                  paddingLeft: '7px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                开始创作
              </span>
              <svg className="cta-arrow" width="38" height="38" viewBox="0 0 24 24" fill="none" style={{ fontSize: '40px', position: 'relative', zIndex: 2, paddingLeft: '5px', paddingRight: '2px', marginLeft: '5px', marginRight: '12px' }}>
                <path d="M13 7L18 12L13 17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 12H18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <div className="cta-shine" />
            </button>
          </div>

          {/* 与右侧图同宽，高度 0：仅占位横向，纵向高度永远跟左侧走 */}
          <div
            aria-hidden
            className="flex-shrink-0"
            style={{
              width: '1040px',
              marginLeft: '-235px',
              height: 0,
              overflow: 'visible',
            }}
          />
        </div>

          {/* 右侧图片 — 脱离文档流：尺寸/translate 只作用于本层，不挤压左侧 */}
          <div
            className="absolute bottom-0 hero-visual-wrap overflow-visible"
            style={{
              left: 'calc(623px + 315px - 285px)',
              top: 'auto',
              width: '1040px',
              height: '680px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(44px) scale(1)' : 'translate(50px, 44px) scale(0.95)',
              transition: 'all 0.8s ease 0.3s',
            }}
          >
            <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
              <div
                className="hero-deco-orb hero-deco-orb-a"
                style={{
                  position: 'absolute',
                  top: '6%',
                  right: '5%',
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(139, 75, 240, 0.38) 0%, transparent 72%)',
                  filter: 'blur(2px)',
                }}
              />
              <div
                className="hero-deco-orb hero-deco-orb-b"
                style={{
                  position: 'absolute',
                  bottom: '14%',
                  left: '-4%',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(219, 39, 119, 0.24) 0%, transparent 72%)',
                  filter: 'blur(1px)',
                }}
              />
              <div
                className="hero-deco-orb hero-deco-orb-c"
                style={{
                  position: 'absolute',
                  top: '42%',
                  right: '-3%',
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)',
                }}
              />
              <div
                className="hero-sparkle hero-sparkle-1"
                style={{
                  position: 'absolute',
                  top: '18%',
                  left: '10%',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(139, 75, 240, 0.7)',
                  boxShadow: '0 0 14px rgba(139, 75, 240, 0.55)',
                }}
              />
              <div
                className="hero-sparkle hero-sparkle-2"
                style={{
                  position: 'absolute',
                  bottom: '28%',
                  right: '12%',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(14, 165, 233, 0.6)',
                  boxShadow: '0 0 12px rgba(14, 165, 233, 0.45)',
                }}
              />
              <div
                className="hero-sparkle hero-sparkle-3"
                style={{
                  position: 'absolute',
                  top: '52%',
                  right: '2%',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(244, 114, 182, 0.75)',
                }}
              />
              <div
                className="hero-sparkle hero-sparkle-4"
                style={{
                  position: 'absolute',
                  bottom: '8%',
                  left: '22%',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(167, 139, 250, 0.65)',
                }}
              />
            </div>
            <div className="hero-img-float relative z-10 h-full w-full">
              <img
                src="/clay-image.png"
                alt="捏捏Icon 产品界面展示"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 28px 56px rgba(124, 58, 237, 0.18))',
                }}
              />
            </div>
          </div>
        </div>

        {/* 底部功能特性 - 左右结构 */}
        <div
          className="flex items-center landing-features-row"
          style={{
            marginTop: '160px',
            width: '899px',
            gap: '98px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 0.6s',
          }}
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 landing-feature-item feature-hover">
              <span
                className="landing-feature-emoji"
                style={{
                  fontSize: '32px',
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {feature.emoji}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: 'Inter, Noto Sans SC, sans-serif',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#525252',
                  }}
                >
                  {feature.title}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, Noto Sans SC, sans-serif',
                    fontSize: '12px',
                    color: '#6B7280',
                  }}
                >
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 动画样式 */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, -30px); }
          50% { transform: translate(-15px, 20px); }
          75% { transform: translate(15px, 10px); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes landing-bg-drift {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
          50% { transform: translate(24px, -18px) scale(1.05); opacity: 0.92; }
        }

        @keyframes landing-particle-drift-move {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(10px, -22px); }
          66% { transform: translate(-12px, 8px); }
        }

        .landing-bg-orb-extra {
          animation: landing-bg-drift 22s ease-in-out infinite;
        }

        .landing-bg-orb-extra-alt {
          animation-duration: 26s;
          animation-direction: alternate-reverse;
        }

        .landing-particle-drift {
          animation: landing-particle-drift-move 9s ease-in-out infinite, pulse 3.5s ease-in-out infinite;
        }

        @keyframes hero-soft-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.012); }
        }

        @keyframes hero-orb-drift {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(14px, -20px); }
          66% { transform: translate(-10px, 12px); }
        }

        @keyframes hero-orb-drift-alt {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-16px, 16px); }
        }

        @keyframes hero-orb-drift-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, 14px); }
        }

        @keyframes hero-sparkle-twinkle {
          0%, 100% { opacity: 0.35; transform: scale(0.82); }
          50% { opacity: 1; transform: scale(1.18); }
        }

        @keyframes landing-feature-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .hero-img-float {
          animation: hero-soft-float 5.2s ease-in-out infinite;
        }

        .hero-deco-orb-a {
          animation: hero-orb-drift 13s ease-in-out infinite;
        }

        .hero-deco-orb-b {
          animation: hero-orb-drift-alt 10.5s ease-in-out infinite;
        }

        .hero-deco-orb-c {
          animation: hero-orb-drift-slow 15s ease-in-out infinite;
        }

        .hero-sparkle-1 {
          animation: hero-sparkle-twinkle 2.2s ease-in-out infinite;
        }

        .hero-sparkle-2 {
          animation: hero-sparkle-twinkle 2.9s ease-in-out infinite 0.35s;
        }

        .hero-sparkle-3 {
          animation: hero-sparkle-twinkle 2.6s ease-in-out infinite 0.8s;
        }

        .hero-sparkle-4 {
          animation: hero-sparkle-twinkle 3.2s ease-in-out infinite 0.2s;
        }

        .landing-feature-emoji {
          display: inline-block;
          animation: landing-feature-bob 3.2s ease-in-out infinite;
        }

        /* CTA 按钮 Hover 效果 */
        .cta-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0px 15px 30px rgba(124, 58, 237, 0.5), 0 0 40px rgba(139, 75, 240, 0.3);
        }

        .cta-button:active {
          transform: translateY(0) scale(0.98);
          box-shadow: 0px 5px 10px rgba(124, 58, 237, 0.4);
        }

        .cta-button .cta-arrow {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .cta-arrow {
          transform: translateX(5px);
        }

        .cta-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }

        .cta-button:hover .cta-shine {
          left: 150%;
        }

        /* 功能特性 Hover 效果 */
        .feature-hover {
          transition: all 0.3s ease;
          padding: 8px 12px;
          margin: -8px -12px;
          border-radius: 12px;
        }

        .feature-hover:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 75, 240, 0.1);
        }

        .feature-hover:hover .landing-feature-emoji {
          transform: scale(1.2);
          transition: transform 0.3s ease;
        }

        /* Badge 呼吸动效 */
        .badge-pulse {
          animation: badge-glow 2s ease-in-out infinite;
        }

        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
          50% { box-shadow: 0 4px 20px rgba(139, 75, 240, 0.15); }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
