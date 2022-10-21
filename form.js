class Form{
    constructor() {
        this.title = createElement("h1")
        this.button = createButton("play")
        this.input = createInput("Enter your name")
        this.border = createDiv();
        this.icon = createImg("piano.png")
    }
    setElementsPosition() {
        this.title.position(width/2-100, height/10);
        this.button.position(width/2, height/2)
        this.input.position(width/2-50, height/2.2)
        this.border.position(width/2-400, height/5);
        this.icon.position(width/2-300, height/6)
       
       // this.button.size(100, 50)
    }
    setElementsClass() {
        this.button.class("button");
        this.input.class("name");
        this.border.class("border");
        this.title.class("title");
    };
    display() {
        this.setElementsPosition();
        this.setElementsClass();
        this.title.html("Welcome to Quick Notes!")
        this.mousePressed();
        
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.border.hide();
        this.icon.hide();
    }
    mousePressed() {
        this.button.mouseClicked(() => {
            this.title.html("Wait for another player to join");
            this.input.hide();
            this.button.hide();
            this.border.hide();
            this.icon.hide();
            playercount += 1;
            player.name = this.input.value();
            playerIndex = playercount;
            player.index = playerIndex;
            player.addPlayer();
            player.updateCount(playercount);

        })
    }
}