# UIDatePicker

日期选择控件及其使用示例及其使用，效果如果：

![预览图](https://github.com/xulidong/UIDatePicker/blob/master/picture/sample.png)

使用步骤：

1. 将 UIDatePicker 文件夹拷贝到项目中  
2. 在脚本中创建一个 Prefab，值设为 UIDatePicker  
3. 需要显示时，创建节点，设置日期和回调  

```javascript
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        pfbDatePicker: cc.Prefab,
    },

    onLoad: function () {
        let date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDate();

        this.updateDate();
    },

    onClickDate: function() {
        // 创建添加 UIDatePicker 节点
        let node = cc.instantiate(this.pfbDatePicker);
        node.parent = this.node;
        let datePicker = node.getComponent("UIDatePicker");
        // 设置初始显示的日期
        datePicker.setDate(this.year, this.month, this.day);
        // 设置确定选中日期之后的回调
        datePicker.setPickDateCallback((year, month, day)=>{
            this.year = year;
            this.month = month;
            this.day = day;
            this.updateDate();
        });
    },

    updateDate () {
        this.label.string = cc.js.formatStr("%s-%s-%s", this.year, this.month + 1, this.day);
    }
});

```
