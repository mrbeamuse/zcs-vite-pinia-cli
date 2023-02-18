const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname,
      },

    ]).then((answers) => {
      this.answers = answers
    })
  }

  writing() {
    // 把每一个文件都通过模板转换到目标路径

    const templates = [
      ".cz-config.js",
      ".eslintignore",
      ".eslintrc.js",
      ".gitignore",
      ".prettierrc.js",
      "commitlint.config.js",
      "index.html",
      "README.md",
      "package.json",
      "pnpm-lock.yaml",
      "tsconfig.json",
      "tsconfig.node.json",
      "vite.config.ts",
      ".husky/commit-msg",
      ".husky/pre-commit",
      ".vscode/extensions.json",
      "public/favicon.ico",
      "src/App.vue",
      "src/main.ts",
      "src/env.d.ts,
      "src/router/index.ts",
      "src/assets/logo.png",
      "src/components/HelloWorld.vue",
      "src/components/usePinia.vue",
      "src/store/index.ts",
      "src/store/user.ts",
      "src/styles/index.scss,
      "src/utils/axios.ts",
      "src/views/About.vue",
      "src/views/vueUse.vue",
    ]

    templates.forEach((item) => {
      // item => 每个文件路径
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}
