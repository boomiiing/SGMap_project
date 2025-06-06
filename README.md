# SGMap_project
思极地图业务开发

## 开发文档：https://map.sgcc.com.cn/products/js-sdk/v3/#quick/quickstart

### 2025/6/5
完成地图初始化，输入正确的key与secert后，地图可以正常显示

### 2025/6/6
考虑到地图模块的复用，如果每次复用地图模块都创建一次对象，会导致页面卡顿。因此采用构造函数+单例模式，确保多个组件之间使用同一个地图对象