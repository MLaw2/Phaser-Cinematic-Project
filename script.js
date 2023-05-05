class Intro extends Phaser.Scene{
    constructor(){
        super("Intro");
    }
    create(){
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xff9900, 1);
        this.graphics.fillCircle(100, 100, 50);
    }
}
class OpenDoor extends Phaser.scene{
    constructor(){
        super("OpenDoor");
    }
    create(){
        this.graphics = this.add.graphics();
    }
}
class GetIn extends Phaser.Scene{
}
class Startup extends Phaser.Scene{
}
let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 800,
    backgroundColor: 0x000000,
    scene: [Intro]
}
let game = new Phaser.Game(config);