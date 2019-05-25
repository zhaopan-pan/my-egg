module.exports = {
  root: true,
  extends: 'eslint-config-egg',
  // for experimental features support
  parser: 'babel-eslint',
  rules: {
    // see https://github.com/eslint/eslint/issues/6274
    // 允许使用async
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
    // 开发环境换行符
    'linebreak-style': ["error", "windows"],
    // 三等号
    'eqeqeq': 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 0,
    // 关键字后面使用一致的空格
    'keyword-spacing': 0,
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': 0,
    // 引号类型
    "quotes": [1, "single"],
    // 禁止出现未使用过的变量
    'no-unused-vars': 1,
    // 要求或禁止末尾逗号
    'comma-dangle': 1,
    // js语句结尾必须使用分号
    // @fixable 结尾必须有分号
    'semi': [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true
      }
    ],
    // @fixable 分号必须写在行尾，禁止在行首出现
    'semi-style': [
      'error',
      'last'
    ],
    // @fixable 限制换行符为 LF 或 CRLF
    // @off 没必要限制
    'linebreak-style': 'off',
    // @fixable 禁止出现连续的多个空格;l除非是注释前，或对齐对象的属性、变量定义、import 等
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          BinaryExpression: true,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    'indent': [4, 4, {
      'SwitchCase': 2 // 针对switch case的缩进
    }],
  },

};