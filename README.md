#### 一、安装依赖

##### 1.项目依赖

```bash
npm i
```

##### 2.全局依赖

```bash
npm i -g @ionic/cli
```

本地开发环境额外安装：

```bash
npm i -g commitizen
```

#### 二、编译、构建

##### 1.H5平台

###### (1)开发模式

例如：

```bash
# 默认dev环境
npm run dev

# pro环境
npm run dev:pro
```

###### (2)构建模式

例如：

```bash
# 默认pro环境
npm run build

#fat环境
npm run build:fat
```

##### 2.安卓平台

##### 3.IOS平台

###### 1.第一次构建

(1)生成web资源

```bash
# uat环境
npm run build:uat
```

(2)生成ios

```bash
npm run add:ios
```

(3)修复插件并同步

```bash
npm run sync
```

###### 2.已存在dist目录和ios目录(二者不可或缺， 如缺失按照第一次构建的步骤生成对应目录)

(1)只更改了vue工程相关的，只需重新生成并拷贝web资源

```bash
# pro环境
npm run copy:pro
```

(2)更改了插件相关的，执行修复和同步插件的命令(该命令会自动把已存在的web资源拷贝到原生工程里面)

```bash
npm run:sync
```

