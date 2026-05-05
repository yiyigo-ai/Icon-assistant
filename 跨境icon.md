```markdown
# 🌍 跨境电商金刚区图标设计助手 - Claude Code实现规范


## 📋 项目概述
**项目名称**：GlobalIcon Designer  
**核心价值**：为跨境电商平台（类似AliExpress/TikTok Shop）设计师提供**从0开始**的地区化图标设计工具，自动处理文化合规问题，提升设计效率300%。  
**目标用户**：跨境电商平台UI/UX设计师、产品经理  
**关键差异**：  
✅ 按**地区**而非国家划分（业务真实逻辑）  
✅ **从0生成**完整SVG图标（非变体调整）  
✅ 内置**文化合规引擎**（预防法务风险）  
✅ 一键导出到**Figma Design System**（生产环境可用）

---

## 🎯 核心功能需求

### 1. 地区选择系统
```json
{
  "regions": [
    {
      "id": "southeast-asia",
      "name": "Southeast Asia (SEA)",
      "countries": ["TH", "VN", "ID", "PH", "MY"],
      "culturalKey": "buddhist-tropical",
      "uiDisplay": "🌏 Southeast Asia (TH, VN, ID, PH, MY)"
    },
    {
      "id": "middle-east",
      "name": "Middle East (MENA)",
      "countries": ["SA", "AE", "EG", "TR"],
      "culturalKey": "islamic-geometric",
      "uiDisplay": " Middle East (SA, AE, EG, TR)"
    },
    {
      "id": "latin-america",
      "name": "Latin America (LATAM)",
      "countries": ["BR", "MX", "CO"],
      "culturalKey": "vibrant-festive",
      "uiDisplay": "🌺 Latin America (BR, MX, CO)"
    }
  ]
}
```
**交互要求**：
- 默认选中 `southeast-asia`
- 悬停显示国家列表和文化简介
- 选择后动态加载对应文化规则

### 2. 品类选择系统
```json
{
  "categories": [
    {
      "id": "fashion",
      "name": "Fashion",
      "description": "Clothing, accessories, footwear",
      "businessPriority": 1,
      "culturalSensitivity": "high"
    },
    {
      "id": "beauty",
      "name": "Beauty",
      "description": "Cosmetics, skincare, haircare",
      "businessPriority": 2, 
      "culturalSensitivity": "critical"
    },
    {
      "id": "electronics",
      "name": "Electronics",
      "description": "Phones, gadgets, accessories",
      "businessPriority": 3,
      "culturalSensitivity": "medium"
    }
  ]
}
```
**交互要求**：
- 默认选中 `fashion`
- 选择Beauty品类时自动显示风险警告
- 根据地区+品类组合动态推荐风格

### 3. 图标风格推荐引擎
```json
{
  "styleRecommendations": {
    "southeast-asia": {
      "fashion": "soft-gradient",
      "beauty": "soft-gradient", 
      "electronics": "soft-gradient"
    },
    "middle-east": {
      "fashion": "minimal-line",
      "beauty": "minimal-line",
      "electronics": "minimal-line"
    },
    "latin-america": {
      "fashion": "vibrant-filled",
      "beauty": "vibrant-filled",
      "electronics": "vibrant-filled"
    }
  },
  "availableStyles": [
    {
      "id": "soft-gradient",
      "name": "Soft Gradient",
      "description": "Organic curves with gentle color transitions",
      "safeForRegions": ["southeast-asia", "latin-america"]
    },
    {
      "id": "minimal-line",
      "name": "Minimal Line",
      "description": "Clean geometric patterns with thin strokes",
      "safeForRegions": ["middle-east", "southeast-asia"]
    },
    {
      "id": "vibrant-filled",
      "name": "Vibrant Filled",
      "description": "Bold solid colors with dynamic shapes",
      "safeForRegions": ["latin-america", "southeast-asia"]
    }
  ]
}
```
**交互要求**：
- 自动推荐默认风格，显示"Recommended"标签
- 允许手动覆盖，但覆盖时显示文化风险警告
- 禁止在中东地区选择Vibrant Filled风格

### 4. 文化合规引擎（核心差异化）
```typescript
interface CulturalRule {
  region: string;
  category: string;
  do: string[];           // 必须包含的元素
  avoid: string[];        // 必须避免的元素  
  safeColors: string[];   // 安全色系（HEX格式）
  dangerousColors: string[]; // 禁忌色系
  shapeConstraints: {
    minRadius: string;    // 最小圆角
    noSharpAngles: boolean; // 禁止锐角
    noHumanFigures: boolean; // 禁止人像
  };
  platformSpecs: {
    size: string;         // 88x88px
    safeArea: string;     // 20px留白
  };
}
```
**关键规则示例**：
```json
{
  "middle-east": {
    "beauty": {
      "do": ["geometric-patterns", "right-hand-direction", "arabic-calligraphy"],
      "avoid": ["human-faces", "animal-figures", "alcohol-related", "before-after"],
      "safeColors": ["#2E8B57", "#D4AF37", "#F5F5DC"],
      "dangerousColors": ["#FF0000", "#000000"],
      "shapeConstraints": {
        "minRadius": "4px",
        "noSharpAngles": true,
        "noHumanFigures": true
      }
    }
  }
}
```
**执行要求**：
- 生成图标前强制检查规则
- 生成后提供合规报告（PDF格式）
- 高风险操作需要用户二次确认

### 5. 输出与导出系统
```json
{
  "exportOptions": [
    {
      "format": "svg",
      "description": "Raw SVG file for development"
    },
    {
      "format": "figma-component",
      "description": "Figma Design System component with variants"
    },
    {
      "format": "compliance-report",
      "description": "PDF cultural compliance report"
    }
  ]
}
```
**Figma集成要求**：
- 生成Figma Design System组件
- 包含地区变体（SEA/MENA/LATAM）
- 自动创建颜色变量
- 保留图层命名规范

---

## ⚙️ 技术架构

### 前端技术栈
```json
{
  "core": "Figma Plugin API (TypeScript)",
  "uiFramework": "React + Figma UI Kit",
  "stateManagement": "Zustand (lightweight)",
  "svgGeneration": "Custom SVG generator + Lucide utils",
  "aiIntegration": "Claude API for design suggestions",
  "styling": "CSS-in-JS with culture-aware variables"
}
```

### 项目结构
```
├── manifest.json                # Figma插件配置
├── package.json
├── tsconfig.json
├── src/
│   ├── ui/                     # 插件UI组件
│   │   ├── RegionSelector.tsx
│   │   ├── CategorySelector.tsx  
│   │   ├── StyleSelector.tsx
│   │   ├── PreviewPanel.tsx
│   │   └── ExportPanel.tsx
│   ├── engine/
│   │   ├── culturalRules/      # 文化规则库
│   │   │   ├── index.ts
│   │   │   ├── southeast-asia.ts
│   │   │   ├── middle-east.ts
│   │   │   └── latin-america.ts
│   │   ├── svgGenerator.ts     # SVG生成引擎
│   │   └── complianceChecker.ts # 合规检查器
│   ├── agents/                 # AI代理
│   │   ├── designAgent.ts      # 设计建议代理
│   │   └── complianceAgent.ts  # 合规检查代理
│   ├── utils/
│   │   ├── figmaExporter.ts    # Figma导出工具
│   │   ├── pdfGenerator.ts     # PDF报告生成
│   │   └── colorUtils.ts       # 颜色处理工具
│   └── main.ts                 # 插件入口
└── assets/
    └── icons/                  # 基础图标模板
```

### 关键API规范
```typescript
// 文化规则获取API
function getCulturalRules(regionId: string, categoryId: string): CulturalRule {
  // 从规则库加载对应规则
}

// SVG生成API  
function generateSVG(regionId: string, categoryId: string, styleId: string, customColors?: string[]): string {
  // 1. 获取文化规则
  // 2. 应用风格模板
  // 3. 生成合规SVG
  // 4. 返回SVG字符串
}

// Figma导出API
async function exportToFigma(svg: string, regionId: string, categoryId: string): Promise {
  // 1. 创建Figma节点
  // 2. 设置变体属性
  // 3. 生成Design System组件
}
```

---

## 🚀 实现路线图（分阶段）

### 阶段1：基础框架搭建（2天）
```markdown
✅ **任务清单**：
- [ ] 创建Figma插件基础项目（使用plugin-resources模板）
- [ ] 配置TypeScript + React环境
- [ ] 实现UI框架：RegionSelector + CategorySelector
- [ ] 搭建文化规则库基础结构
- [ ] 集成Claude API基础调用

✅ **验收标准**：
- 插件能正常显示在Figma中
- 地区和品类选择器正常工作
- 能从规则库加载基础配置
```

### 阶段2：核心功能实现（3天）
```markdown
✅ **任务清单**：
- [ ] 实现SVG生成引擎（基于Lucide架构改造）
- [ ] 构建文化合规检查器
- [ ] 开发预览面板（实时显示生成结果）
- [ ] 实现合规报告生成（PDF格式）
- [ ] 添加风险警告系统

✅ **验收标准**：
- 能生成符合文化规则的SVG图标
- 合规检查器能正确识别禁忌元素
- 生成PDF报告包含宜/不宜指南
```

### 阶段3：Figma集成 & 优化（2天）
```markdown
✅ **任务清单**：
- [ ] 实现Figma Design System导出
- [ ] 添加颜色变量自动创建
- [ ] 优化性能（Web Worker处理复杂计算）
- [ ] 添加错误处理和用户反馈
- [ ] 编写完整测试用例

✅ **验收标准**：
- 一键导出到Figma生成Design System组件
- 支持地区变体切换
- 处理100+图标生成无性能问题
```

### 阶段4：文档 & 发布（1天）
```markdown
✅ **任务清单**：
- [ ] 编写用户操作手册
- [ ] 创建开发文档
- [ ] 打包发布到Figma社区
- [ ] 准备演示视频

✅ **验收标准**：
- 新用户能在5分钟内上手
- 开发者能理解架构设计
- 通过Figma审核
```

---

## 🔧 具体实现要求

### 1. 文化规则库规范
```typescript
// 文件路径：src/engine/culturalRules/southeast-asia.ts
export const SEA_FASHION_RULES: CulturalRule = {
  region: "southeast-asia",
  category: "fashion",
  do: [
    "Use elephant or lotus motifs",
    "Apply gold-to-green gradient",
    "Add organic curves (min 8px radius)",
    "Include tropical leaf patterns"
  ],
  avoid: [
    "Pointing feet direction",
    "Human faces or full bodies",
    "Sharp angles under 45 degrees",
    "Pure black backgrounds",
    "Crow symbolism"
  ],
  safeColors: ["#FFD700", "#2E8B57", "#D4AF37", "#F0E68C"],
  dangerousColors: ["#000000", "#FF0000", "#4A4A4A"],
  shapeConstraints: {
    minRadius: "8px",
    noSharpAngles: true,
    noHumanFigures: true
  },
  platformSpecs: {
    size: "88x88px",
    safeArea: "20px"
  }
};
```

### 2. SVG生成算法要求
```typescript
// 文件路径：src/engine/svgGenerator.ts
export function generateFashionIcon(regionId: string, styleId: string): string {
  // 1. 获取文化规则
  const rules = getCulturalRules(regionId, 'fashion');
  
  // 2. 选择基础模板
  const baseTemplate = getBaseTemplate('fashion', styleId);
  
  // 3. 应用文化规则
  const modifiedSVG = applyCulturalRules(baseTemplate, rules);
  
  // 4. 优化SVG
  return optimizeSVG(modifiedSVG);
}

// 关键算法：文化规则应用
function applyCulturalRules(svg: string, rules: CulturalRule): string {
  // 颜色替换
  let result = replaceColors(svg, rules.safeColors, rules.dangerousColors);
  
  // 形状调整
  if (rules.shapeConstraints.minRadius) {
    result = applyMinRadius(result, rules.shapeConstraints.minRadius);
  }
  
  // 元素过滤
  if (rules.shapeConstraints.noHumanFigures) {
    result = removeHumanFigures(result);
  }
  
  return result;
}
```

### 3. Figma导出规范
```typescript
// 文件路径：src/utils/figmaExporter.ts
export async function exportDesignSystemComponent(
  svg: string,
  regionId: string,
  categoryId: string
): Promise {
  // 1. 创建主组件
  const mainNode = figma.createComponent();
  mainNode.resize(100, 100);
  
  // 2. 设置变体属性
  mainNode.setVariantProperties({
    region: regionId,
    category: categoryId,
    style: getRecommendedStyle(regionId, categoryId)
  });
  
  // 3. 添加SVG内容
  const svgNode = await figma.importSvg(svg);
  mainNode.appendChild(svgNode);
  
  // 4. 创建颜色变量
  createRegionColorVariables(regionId);
  
  // 5. 生成Design System
  figma.currentPage.appendChild(mainNode);
  figma.notify(`✅ ${categoryId} icon exported to Figma Design System!`);
}
```

---

## ✅ 质量保证要求

### 1. 测试用例
```markdown
✅ **单元测试**：
- 文化规则加载正确性测试
- SVG生成合规性测试
- 颜色替换算法测试

✅ **集成测试**：
- 完整工作流测试（选择→生成→导出）
- 边界条件测试（无效输入、极端参数）
- 性能测试（100次连续生成）

✅ **文化合规测试**：
- 中东Beauty品类：确保无人脸/动物形象
- 东南亚Fashion：确保无脚部指向
- 拉美Electronics：确保高饱和度色彩
```

### 2. 性能指标
```json
{
  "svgGenerationTime": "< 2 seconds",
  "complianceCheckTime": "< 500ms",
  "figmaExportTime": "< 3 seconds",
  "memoryUsage": "< 100MB",
  "concurrentRequests": "Support 5+ simultaneous generations"
}
```

### 3. 错误处理
```typescript
// 统一错误处理
export class CulturalDesignError extends Error {
  constructor(
    public errorCode: string,
    public userMessage: string,
    public technicalDetails?: string
  ) {
    super(userMessage);
    this.name = 'CulturalDesignError';
  }
}

// 使用示例
try {
  generateSVG('invalid-region', 'fashion', 'soft-gradient');
} catch (error) {
  if (error instanceof CulturalDesignError) {
    figma.notify(`❌ ${error.userMessage}`);
    console.error(error.technicalDetails);
  }
}
```

---

## 📚 参考资源
```markdown
✅ **必读文档**：
- Figma Plugin API: https://www.figma.com/plugin-docs/
- Lucide Icons Architecture: https://github.com/lucide-icons/lucide
- Fluent UI Cultural Context: https://github.com/microsoft/fluentui/tree/master/packages/react/src/utilities/cultural
- i18n-lint Rules: https://github.com/i18n-lint/i18n-lint

✅ **关键开源项目**：
- plugin-resources: https://github.com/figma/plugin-resources
- agency-agents: https://github.com/agency-agents (AI代理架构)
- i18n-lint: https://github.com/i18n-lint/i18n-lint (合规检查)
```

> **重要提醒**：**不要从零开始**！优先复用开源项目的成熟架构：
> 1. 从 `plugin-resources` 复用Figma插件基础架构
> 2. 从 `lucide` 复用SVG生成和操作逻辑  
> 3. 从 `fluentui` 复用文化上下文管理
> 4. 从 `agency-agents` 复用AI代理工作流
> 
> **你的核心价值在于文化规则库和业务逻辑，不是基础架构**
```

这个文档已经完整定义了项目需求、架构和实现步骤。**直接复制给Claude Code**，他会按照这个规范一步步帮你实现功能。文档特点：

✅ **极度可执行**：包含具体文件路径、函数签名、数据结构  
✅ **技术深度**：覆盖从UI到后端引擎的完整技术栈  
✅ **业务精准**：基于真实跨境电商业务逻辑  
✅ **风险控制**：内置文化合规检查，避免法务问题  
✅ **分阶段交付**：清晰的4阶段路线图，可快速验证MVP

**下一步行动**：将此文档完整复制给Claude Code，他会从阶段1开始逐步实现。建议先让他完成`manifest.json`和基础项目结构，再逐步推进核心功能。