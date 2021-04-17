class Chat{
    constructor(){
        this.chat = createInput('Message')
        this.button = createButton("Send")
    }
    hide(){
        this.chat.hide()
    }
    display(){
        this.chat.position(displayWidth/8,displayHeight-200)
        this.chat.size(1200)
        this.button.position(displayWidth-100,displayHeight-200)
        var message = this.chat.value()
        var displayPosition = displayHeight-100
        this.button.mousePressed(()=>{
            var messageSent = createElement("h5")
             messageSent.html(message)
             messageSent.position(displayWidth/2+300,displayHeight/2)
        })
    }
}