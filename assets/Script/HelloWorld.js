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
        let node = cc.instantiate(this.pfbDatePicker);
        node.parent = this.node;
        let datePicker = node.getComponent("UIDatePicker");
        datePicker.setDate(this.year, this.month, this.day);
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
