class SGMapObj {
    constructor() {
        this.map = null
    }

    createMapObj(container) {
        //单例模式，确保地图对象只创建一次
        if (!this.map) {
            window.SGMap.tokenTask
                .login("key", "secret")
                .then(() => {
                    this.map = new window.SGMap.Map({
                        // 地图绑定的DOM元素ID
                        container: container,
                        // 地图样式
                        style: "aegis://styles/aegis/Streets-v2",
                        // 默认缩放层级
                        zoom: 11,
                        // 地图中心点
                        center: [118.3, 26.1],
                        // 地图默认字体
                        localIdeographFontFamily: "Microsoft YaHei Regular",
                    });
                });
        }
    }
}

export default new SGMapObj()