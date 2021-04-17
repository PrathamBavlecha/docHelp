class Login{
    constructor(){
        this.username = createInput("Username")
        this.password = createInput("Password")
        this.login = createButton("Login")
    }
    hide(){
      this.username.hide()
      this.password.hide()
      this.login.hide()
    }
    display(){
        var title = createElement("h1")
        title.html("Doc Help")
        title.position(displayWidth/2-90,200)

        this.username.position(displayWidth/2-275,displayHeight/2)
        this.password.position(displayWidth/2-275,displayHeight/2+30)
        this.username.size(500)
        this.password.size(500)
        this.login.position(displayWidth/2-50,displayHeight/2+70)
        this.login.mousePressed(()=>{
            this.username.hide()
            this.password.hide()
            title.hide()
            this.login.hide()
            chat = new Chat()
            chat.display()
        })
    }
}