# AI Fluency 学习驾驶舱

基于 Anthropic Academy 的 **AI Fluency Framework & Foundations** 课程构建的完整学习系统。

## 🚀 如何使用

### 本地直接打开
直接双击 `index.html` 即可在浏览器中查看。

### 本地服务器（推荐）
```bash
cd web
python -m http.server 8080
```
然后访问 http://localhost:8080

## 📁 项目结构

```
web/
├── index.html          # 主入口
├── css/
│   └── styles.css      # 全局样式（深色/浅色双主题）
├── js/
│   ├── data.js         # 课程数据 Lesson 1-3B
│   ├── data2.js        # 课程数据 Lesson 4-7
│   ├── data3.js        # 课程数据 Lesson 8-11 + 跨课整合 + 自测题 + 办公自动化
│   └── app.js          # 应用逻辑（路由、渲染、搜索、自测交互）
└── README.md           # 本文件
```

## ✨ 功能特性

- **双模式系统**：浏览模式（快速总览）+ 精读模式（6 层完整内容）
- **11 节完整课程**：每课包含完整知识点、要点、误区、术语、自测题
- **4Ds 专题页**：Delegation / Description / Discernment / Diligence
- **四重目标页**：Effective / Efficient / Ethical / Safe
- **跨课整合**：12 条原则、复习清单、工作流模板
- **办公自动化专题**：4 个完整场景分析（询盘报价、表格清洗、采购整理、SOP 生成）
- **自测系统**：15 道题目，即时反馈
- **全局搜索**：搜索知识点、术语、课程
- **深色/浅色主题**切换
- **三栏布局**：左导航 + 中内容 + 右辅助面板

## 🔧 后续扩展建议

- [ ] 接入 XMind 思维导图结构
- [ ] 项目工作台（基于 Lesson 5/9 的项目练习）
- [ ] 提示词模板库
- [ ] 更多自测题
- [ ] 学习进度追踪
- [ ] 个人笔记持久化（localStorage）
