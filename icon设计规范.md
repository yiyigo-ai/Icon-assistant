🎨 全球图标设计助手 - SVG设计规范与美学标准

📋 设计规范总纲

核心设计理念

✅ 统一美学原则：所有图标必须遵循「视觉重量一致」原则
✅ 技术规范：所有SVG必须符合Figma Design System技术要求
✅ 文化适配：在美学统一前提下满足地区文化合规
✅ 商业价值：确保金刚区图标在移动端的点击率最大化

🎯 4种设计风格规范（详细标准）

简单线性风格 (Simple Line)
json
{
  "styleName": "Simple Line",
  "target": "Middle East (Islamic design), Professional contexts",
  "strokeWidth": "2px",
  "fill": "none",
  "color": "#2E8B57",
  "complexityLevel": "low",
  "pathCount": "1-3 paths",
  "visualWeight": "light",
  "strokeJoin": "round",
  "strokeCap": "round"
}

详细设计要求：

📏 线条规范：
统一stroke-width: 2px（绝对不允许1.5px或2.5px）
所有线条粗细完全一致
不允许线条交叉重叠（会产生视觉重量不均）
线条间距最小1px，最大不超过stroke-width*3

🎯 形状规范：
使用几何圆形而非椭圆（保持视觉一致性）
角度必须是45°/90°/180°的倍数
曲线半径统一（小圆弧12px，大圆弧24px）
避免锐角（最小角度30°）

🎨 颜色规范：
主色：#2E8B57（绿色系，符合伊斯兰文化）
辅助色：#D4AF37（金色，用于装饰元素）
绝对禁止：渐变、阴影、透明度

错误示例 vs 正确示例：

❌ 错误：线条粗细不一
  ← 错误
  ← 错误

✅ 正确：统一线条粗细

❌ 错误：线条重叠

  ← 重叠区域视觉过重

✅ 正确：线条分离

  ← 保持间距

彩色线性风格 (Colored Line)
json
{
  "styleName": "Colored Line", 
  "target": "Southeast Asia (Buddhist aesthetic)", 
  "strokeWidth": "2px",
  "fill": "none",
  "colorPalette": ["#FFD700", "#2E8B57", "#8B4513"],
  "complexityLevel": "medium",
  "pathCount": "2-5 paths",
  "visualWeight": "medium",
  "strokeJoin": "round",
  "strokeCap": "round"
}

详细设计要求：

📏 色彩分配原则：
主路径：#FFD700（金色，代表皇室/神圣）
辅助路径：#2E8B57（绿色，代表自然/和谐）  
装饰路径：#8B4513（棕色，代表土地/稳定）
一个图标最多使用3种颜色，最少使用1种

🎯 层次分明：
主路径线条最显眼（可能使用更深的阴影色）
辅助路径作为支撑（视觉重量次之）
装饰路径最轻（细线或虚线效果）

🎨 色彩心理学：
金色：在东南亚文化中象征财富和神圣
绿色：伊斯兰和佛教文化中的吉祥色
棕色：自然、稳重，符合佛教禅意

技术实现要求：
xml

  
  
  

  ← 不允许渐变
   ← 不允许透明度变化

线面结合风格 (Line-Fill Hybrid)
json
{
  "styleName": "Line-Fill Hybrid",
  "target": "Latin America (Vibrant aesthetic)",
  "strokeWidth": "1.5px",
  "fillOpacity": "0.7",
  "colorPalette": ["#FF00FF", "#00FFFF", "#FFA500"],
  "complexityLevel": "high", 
  "pathCount": "3-7 paths",
  "visualWeight": "medium-heavy",
  "strokeJoin": "round",
  "strokeCap": "round"
}

详细设计要求：

⚖️ 平衡原则：
填充面积不超过图标总面积的60%
线条必须包围填充区域（形成清晰边界）
线条与填充颜色必须有足够对比度
填充区域之间最小间距1px

🎯 结构规范：
背景填充：使用浅色，作为基础
主体填充：使用中等饱和度颜色
轮廓线条：使用深色，定义形状边界
避免填充区域相互重叠

🎨 色彩搭配：
填充色：HSL饱和度60-80%，亮度40-70%
轮廓色：HSL饱和度80-100%，亮度20-40%
绝对禁止：填充色与轮廓色过于接近

正确实现示例：
xml

  
  
  
  
  
  

彩色面性风格 (Colored Fill)
json
{
  "styleName": "Colored Fill",
  "target": "Latin America (High-energy contexts)",
  "strokeWidth": "1px",
  "fill": "solid",
  "colorPalette": ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"],
  "complexityLevel": "medium",
  "pathCount": "2-6 paths", 
  "visualWeight": "heavy",
  "strokeJoin": "round",
  "strokeCap": "round"
}

详细设计要求：

🎨 色彩规范：
主色：#FF6B6B（热情、活力）
辅助色：#4ECDC4（清新、现代）
强调色：#45B7D1（专业、信任）
背景色：#96CEB4（自然、健康）
点缀色：#FFEAA7（温暖、友好）

⚖️ 比例控制：
主色占据40-50%面积
辅助色占据25-35%面积
强调色占据10-15%面积
背景色和点缀色各占5%

🎯 视觉层次：
暖色调元素置于前景
冷色调元素置于背景
高饱和度元素作为焦点
低饱和度元素作为过渡

📐 通用技术规范（适用于所有风格）

SVG结构标准
xml

  
  
    
  
  
  
  
    
  

路径优化要求
javascript
// ✅ 路径合并规范
// 错误：多个相同属性的path

// 正确：合并相同属性

  
  

尺寸与对齐规范

📏 画布规范：
总尺寸：88x88px（Figma金刚区标准）
ViewBox：0 0 88 88（保持1:1比例）
安全边距：四周各留8px空白区域
主体区域：72x72px（72x72px居中）

🎯 对齐原则：
所有几何形状必须对齐到2px网格
曲线控制点必须是整数坐标
避免小数坐标（如10.5, 20.3）
保持视觉中心与数学中心一致

性能优化要求
xml

  
    
    
  

  
    
    
  

🚨 常见错误与修复指南

错误类型1：线条粗细不一致
xml

  ← 粗细不一致
  ← 粗细不一致

  
  
  

错误类型2：路径重叠
xml

  ← 重叠区域

  ← 保持间距

错误类型3：视觉重量不均
xml

  ← 水平线
  ← 垂直线
  ← 斜线，视觉重量不同

    ← 统一长度
    ← 统一长度
    ← 统一长度

错误类型4：颜色混乱
xml

  
  

  
  

📊 质量检查清单

生成前检查
[ ] 线条粗细是否统一（stroke-width）
[ ] 是否存在路径重叠
[ ] 颜色数量是否超限
[ ] 是否使用了禁用的SVG特性
[ ] 是否符合目标地区文化规范

生成后验证
[ ] 视觉重量是否均匀分布
[ ] 颜色对比度是否合适
[ ] 图标在88x88画布中居中
[ ] 是否有不必要的复杂度
[ ] 是否满足Figma渲染要求

自动化验证脚本
javascript
function validateSVG(svgString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  
  const paths = doc.querySelectorAll('path');
  const strokeWidths = [...paths].map(path => path.getAttribute('stroke-width'));
  
  // 检查线条粗细一致性
  if (!strokeWidths.every(width => width === strokeWidths[0])) {
    throw new Error('❌ 线条粗细不一致');
  }
  
  // 检查颜色数量
  const colors = [...new Set([...paths].map(path => path.getAttribute('stroke')))];
  if (colors.length > 3) {
    throw new Error('❌ 颜色数量超限');
  }
  
  return true;
}

🎯 风格与地区匹配指南

地区-风格推荐矩阵
地区   推荐风格   次选风格   禁用风格   理由
Middle East   Simple Line   Colored Line   Colored Fill   伊斯兰文化偏好简洁几何

Southeast Asia   Colored Line   Line-Fill Hybrid   Simple Line   佛教文化喜欢温和色彩

Latin America   Colored Fill   Line-Fill Hybrid   Simple Line   拉美文化偏爱鲜艳色彩

品类-风格适配表
品类   时尚   美妆   电子   推荐风格
Fashion   ✅ 彩色面性   ✅ 彩色线性   ✅ 线面结合   根据地区调整

Beauty   ✅ 彩色线性   ✅ 简单线性   ✅ 线面结合   避免复杂填充

Electronics   ✅ 线面结合   ✅ 简单线性   ✅ 彩色面性   体现科技感

📚 设计参考资料

几何形状标准

圆形：使用正圆，半径为整数（12px, 24px, 36px）
方形：使用正方形，边长为偶数（16px, 32px, 48px）
三角形：使用等腰三角形，角度45°-90°-45°
菱形：使用正菱形，对角线比例1:1

曲线绘制规范

贝塞尔曲线：使用二次贝塞尔（Q命令），控制点距离端点不超过20px
弧形：使用椭圆弧（A命令），rx和ry相等
圆角：使用圆角矩形，radius不超过width/4

间距与比例

线条间距：最小1px，推荐2px
形状间距：最小2px，推荐4px
整体比例：72x72px主体区域 / 88x88px总画布
安全边距：四周各8px

重要提醒：这些规范不是建议，是强制执行的标准。任何生成的SVG必须完全符合以上规范，否则将无法通过质量检查。Claude在生成SVG时，必须严格按照这些标准执行，确保每个图标都具备专业的视觉一致性和商业可用性。