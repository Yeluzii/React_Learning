const blogs = [
    // 原始数据 (id 1-3)
    {
        id: 1,
        title: "Webpack 5 新特性深度解析",
        content: "详解 webpack 5 的 new cache system, persistent caching 和 tree shaking 优化技术。",
        author: "Alice Smith",
        coverImage: "https://picsum.photos/seed/webpack/600",
        reads: 8342,
        collections: 1237,
        likes: 2154,
        tags: ["构建工具", "webpack配置", "性能优化"]
    },
    {
        id: 2,
        title: "ES6+ 特性实战应用",
        content: "模块化编程、解构赋值、类语法和 async/await 在大型项目中的最佳实践。",
        author: "John Doe",
        coverImage: "https://picsum.photos/seed/es6/600",
        reads: 9715,
        collections: 1824,
        likes: 3120,
        tags: ["ES标准", "代码规范", "现代JS"]
    },
    {
        id: 3,
        title: "Babel + TypeScript 工具链搭建",
        content: "如何在项目中集成 Babel 转译与 TypeScript 类型检查的完整流程说明。",
        author: "Sarah Johnson",
        coverImage: "https://picsum.photos/seed/babelts/600",
        reads: 7458,
        collections: 982,
        likes: 1834,
        tags: ["代码转译", "类型系统", "工具集成"]
    },
    {
        id: 4,
        title: "前端工程化性能优化最佳实践",
        content: "从打包体积压缩到浏览器缓存策略的全方位性能提升方案。",
        author: "Michael Chen",
        coverImage: "https://picsum.photos/seed/performanceOpti/600",
        reads: 6891,
        collections: 634,
        likes: 1523,
        tags: ["构建优化", "性能指标", "工程实践"]
    },
    {
        id: 5,
        title: "ESLint 在团队开发中的规范管理",
        content: "如何通过配置插件和共享 .eslintrc 文件建立统一的代码质量标准体系。",
        author: "Emily White",
        coverImage: "https://picsum.photos/seed/eslint/600",
        reads: 5974,
        collections: 821,
        likes: 1345,
        tags: ["代码规范", "eslint配置", "团队协作"]
    },
    {
        id: 6,
        title: "模块化设计模式解密",
        content: "单文件组件、接口分离等模式在大型项目中的分层架构实践。",
        author: "Jordan Baker",
        coverImage: "https://picsum.photos/seed/modularDesign/600",
        reads: 4123,
        collections: 327,
        likes: 891,
        tags: ["架构设计", "模块化开发", "软件工程"]
    },
    {
        id: 7,
        title: "自动化测试体系搭建指南",
        content: "Jest + Cypress 实现单元测试、E2E 测试和覆盖率报告的端到端方案。",
        author: "Sophia Lee",
        coverImage: "https://picsum.photos/seed/testAutomation/600",
        reads: 5523,
        collections: 489,
        likes: 1172,
        tags: ["测试驱动开发", "CI工具", "质量保障"]
    },
    {
        id: 8,
        title: "微前端架构实现实战",
        content: "使用 Module Federation 和系统化部署模式构建独立功能模块的可扩展架构。",
        author: "David Kim",
        coverImage: "https://picsum.photos/seed/microFrontends/600",
        reads: 7132,
        collections: 945,
        likes: 2312,
        tags: ["微服务", "前端架构", "系统设计"]
    },
    {
        id: 9,
        title: "TypeScript 在 React 中的深度应用",
        content: "组件类型推导、泛型使用以及与 Redux 集成的最佳实践案例分析。",
        author: "Emma Green",
        coverImage: "https://picsum.photos/seed/typescriptReact/600",
        reads: 8934,
        collections: 1257,
        likes: 2720,
        tags: ["类型系统", "组件优化", "框架集成"]
    },
    {
        id: 10,
        title: "CI/CD 管道搭建全解析",
        content: "从 Git Hooks 到 Kubernetes 部署的自动化流程配置详解。",
        author: "James Taylor",
        coverImage: "https://picsum.photos/seed/cicdPipeline/600",
        reads: 5876,
        collections: 712,
        likes: 1435,
        tags: ["持续集成", "部署策略", "工具链"]
    },
    {
        id: 11,
        title: "依赖管理的现代化方案",
        content: "PM2/Yarn Workspaces 及 Turbopack 在构建速度与包管理中的应用。",
        author: "Grace Adams",
        coverImage: "https://picsum.photos/seed/dependencyMgmt/600",
        reads: 3741,
        collections: 258,
        likes: 936,
        tags: ["依赖优化", "包管理", "构建工具"]
    }
]

export default blogs;