### 描述

基于airbnb进行一定程度规则调整

### 使用

安装
```
  npm install -D eslint-config-dtsmart
```
相关依赖版本

- "eslint": "^7.16.0"
- "eslint-plugin-import": "^2.22.1"
- "eslint-plugin-jsx-a11y": "^6.4.1"
- "eslint-plugin-react": "^7.21.5"
- "eslint-plugin-react-hooks": "^4.0.8"
- "@typescript-eslint/eslint-plugin": "^2.28.0"
- "@typescript-eslint/parser": "^2.28.0"

配置
.eslinrc.js或者类似档配置文件中
```
  {
    "extends": "dtsmart",
    "rules": {
      ...
    }
  }
```

publish（发布）
```
  npm run publish
```


### 测试

test（测试）
```
  npm run tests
```

### 其它
