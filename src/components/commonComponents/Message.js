class Message {
    constructor(title, text, icon, buttonName, dangerMode) {
        this.title = title;
        this.text = text;
        this.icon = icon;
        this.buttonName = buttonName;
        this.dangerMode = dangerMode
    }

    render() {
        return swal({
            title: this.title,
            text: this.text,
            icon: this.icon,
            buttons: this.buttonName,
            dangerMode: this.dangerMode,
        });
    }

}

export default Message;