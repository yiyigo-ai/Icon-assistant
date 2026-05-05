/**
 * 捏捏Icon - Tailwind配置 (增强版)
 * Enhanced Tailwind Config for NieNie Icon Landing Page
 *
 * 使用方法: 重命名此文件为 tailwind.config.js 替换原文件
 * 或合并两个配置
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* ==========================================
         色彩系统 - Color System
         ========================================== */

      colors: {
        // 主品牌色 - Primary (Purple)
        primary: {
          50: '#FAF5FF',
          100: '#F4F1FA',   // 页面背景
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C4B5FD',   // 渐变起点
          500: '#A78BFA',
          600: '#8B5CF6',
          700: '#7C3AED',   // 渐变终点
          800: '#6D28D9',
          900: '#5B21B6',
        },

        // 辅助色 - Secondary (Blue)
        secondary: {
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        },

        // 强调色 - Accent (Orange, for CTA)
        accent: {
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',   // 主要CTA
          600: '#EA580C',
        },

        // 中性色 - Neutral/Gray
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },

        // 语义色 - Semantic
        semantic: {
          success: '#10B981',
          'success-bg': '#D1FAE5',
          warning: '#F59E0B',
          'warning-bg': '#FEF3C7',
          error: '#EF4444',
          'error-bg': '#FEE2E2',
          info: '#3B82F6',
          'info-bg': '#DBEAFE',
        },

        // 保留原有的clay颜色
        clay: {
          canvas: '#F4F1FA',
          cardBg: '#FFFFFF',
          foreground: '#332F3A',
          muted: '#635F69',
          accent: '#7C3AED',
          accentAlt: '#DB2777',
          secondary: '#0EA5E9',
          success: '#10B981',
          warning: '#F59E0B',
        },
      },

      /* ==========================================
         字体系统 - Typography
         ========================================== */

      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        display: ['Quicksand', 'Nunito', 'Noto Sans SC Rounded', 'system-ui', 'sans-serif'],
        primary: ['"PingFang SC"', '"Microsoft YaHei"', '"Hiragino Sans GB"', 'sans-serif'],
        english: ['Inter', '"SF Pro Display"', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', '"SF Mono"', 'monospace'],
        number: ['"SF Pro Display"', '"DIN Alternate"', 'Inter', 'sans-serif'],
      },

      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        'xl': ['1.25rem', { lineHeight: '1.4' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'xs': ['0.75rem', { lineHeight: '1.5' }],
      },

      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'normal': '0',
        'wide': '0.01em',
      },

      /* ==========================================
         间距系统 - Spacing
         ========================================== */

      spacing: {
        '0': '0',
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.25rem',   // 20px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
      },

      /* ==========================================
         圆角系统 - Border Radius
         ========================================== */

      borderRadius: {
        'none': '0',
        'sm': '0.25rem',    // 4px
        'md': '0.5rem',     // 8px
        'lg': '0.75rem',    // 12px
        'xl': '1rem',       // 16px
        '2xl': '1.25rem',   // 20px
        '3xl': '1.5rem',    // 24px
        '4xl': '2rem',      // 32px
        '5xl': '3rem',      // 48px
        '6xl': '4rem',      // 64px
        '7xl': '5rem',      // 80px
        'full': '9999px',

        // 黏土风格不规则圆角
        'clay-hero': '60px 80px 70px 90px',
        'clay-card': '40px 50px 45px 55px',
        'clay-btn': '20px 24px 22px 26px',
        'clay-soft': '30px 40px 35px 45px',
      },

      /* ==========================================
         阴影系统 - Shadows
         ========================================== */

      boxShadow: {
        // 标准阴影
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

        // 黏土风格阴影 (Claymorphism)
        'clay-sm': '8px 8px 16px rgba(124, 58, 237, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.8)',
        'clay-md': '12px 12px 24px rgba(124, 58, 237, 0.2), -12px -12px 24px rgba(255, 255, 255, 0.9)',
        'clay-lg': '20px 20px 40px rgba(124, 58, 237, 0.25), -20px -20px 40px rgba(255, 255, 255, 0.95)',
        'clay-xl': '30px 30px 60px rgba(124, 58, 237, 0.3), -30px -30px 60px rgba(255, 255, 255, 1)',

        // 黏土内阴影
        'clay-inset-sm': 'inset 4px 4px 8px rgba(124, 58, 237, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.7)',
        'clay-inset-md': 'inset 8px 8px 16px rgba(124, 58, 237, 0.15), inset -8px -8px 16px rgba(255, 255, 255, 0.8)',
        'clay-inset-lg': 'inset 12px 12px 24px rgba(124, 58, 237, 0.2), inset -12px -12px 24px rgba(255, 255, 255, 0.85)',

        // 玻璃态阴影 (Glassmorphism)
        'glass': '0 8px 32px rgba(124, 58, 237, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        'glass-hover': '0 12px 40px rgba(124, 58, 237, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.5)',

        // 保留原有clay阴影
        'clay-deep': '30px 30px 60px #cdc6d9, -30px -30px 60px #ffffff, inset 10px 10px 20px rgba(139, 92, 246, 0.05), inset -10px -10px 20px rgba(255, 255, 255, 0.8)',
        'clay-card': '16px 16px 32px rgba(160, 150, 180, 0.2), -10px -10px 24px rgba(255, 255, 255, 0.9), inset 6px 6px 12px rgba(139, 92, 246, 0.03), inset -6px -6px 12px rgba(255, 255, 255, 1)',
        'clay-card-hover': '20px 20px 40px rgba(160, 150, 180, 0.25), -14px -14px 32px rgba(255, 255, 255, 1), inset 8px 8px 16px rgba(139, 92, 246, 0.05), inset -8px -8px 16px rgba(255, 255, 255, 1)',
        'clay-button': '12px 12px 24px rgba(139, 92, 246, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.4), inset 4px 4px 8px rgba(255, 255, 255, 0.4), inset -4px -4px 8px rgba(0, 0, 0, 0.1)',
        'clay-button-hover': '16px 16px 32px rgba(139, 92, 246, 0.35), -10px -10px 20px rgba(255, 255, 255, 0.5), inset 5px 5px 10px rgba(255, 255, 255, 0.5), inset -5px -5px 10px rgba(0, 0, 0, 0.1)',
        'clay-pressed': 'inset 10px 10px 20px #d9d4e3, inset -10px -10px 20px #ffffff',
        'clay-input': 'inset 6px 6px 12px #d9d4e3, inset -6px -6px 12px #ffffff',
      },

      /* ==========================================
         模糊效果 - Backdrop Blur
         ========================================== */

      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },

      /* ==========================================
         渐变背景 - Background Gradients
         ========================================== */

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #C4B5FD 0%, #7C3AED 100%)',
        'gradient-soft': 'linear-gradient(135deg, #E9D5FF 0%, #C4B5FD 50%, #A78BFA 100%)',
        'gradient-cta': 'linear-gradient(135deg, #FB923C 0%, #F97316 100%)',
        'gradient-bg': 'linear-gradient(180deg, #FAF5FF 0%, #F4F1FA 100%)',

        // 保留原有渐变
        'gradient-clay': 'linear-gradient(to bottom right, #A78BFA, #7C3AED)',
        'gradient-clay-pink': 'linear-gradient(to bottom right, #F472B6, #DB2777)',
        'gradient-clay-blue': 'linear-gradient(to bottom right, #38BDF8, #0EA5E9)',
        'gradient-clay-emerald': 'linear-gradient(to bottom right, #34D399, #10B981)',
      },

      /* ==========================================
         动画系统 - Animations
         ========================================== */

      animation: {
        // 基础动画
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'clay-bounce': 'clayBounce 0.5s ease-out',
        'soft-pulse': 'softPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-flow': 'gradientFlow 8s ease infinite',

        // 保留原有动画
        'clay-float': 'clay-float 8s ease-in-out infinite',
        'clay-float-delayed': 'clay-float-delayed 10s ease-in-out infinite',
        'clay-float-slow': 'clay-float-slow 12s ease-in-out infinite',
        'clay-breathe': 'clay-breathe 6s ease-in-out infinite',
      },

      keyframes: {
        // 新增动画
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        clayBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '75%': { transform: 'scale(0.98)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },

        // 保留原有动画
        'clay-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'clay-float-delayed': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-2deg)' },
        },
        'clay-float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        'clay-breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },

      /* ==========================================
         过渡动画 - Transitions
         ========================================== */

      transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },

      transitionTimingFunction: {
        'ease-linear': 'linear',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elastic': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        'clay': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'soft': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },

      /* ==========================================
         响应式容器 - Container
         ========================================== */

      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '32px',
          lg: '48px',
          xl: '64px',
        },
      },

      /* ==========================================
         断点系统 - Breakpoints
         ========================================== */

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      /* ==========================================
         Z-Index 层级
         ========================================== */

      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      },
    },
  },
  plugins: [],
}
