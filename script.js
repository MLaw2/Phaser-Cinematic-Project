class Intro extends Phaser.Scene{
    constructor(){
        super("Intro");
    }
    preload(){
    }
    create(){
        let logoX = 290;
        let logoY = 200;
        let logoSize = 40;
        let logoSpacing = 50;
        let logo1 = this.add.text(logoX, logoY, 'I', {
            fontFamily: 'Teoran',
            fontSize: logoSize 
        });
        let logo2 = this.add.text(logoX, logoY+logoSpacing, 'Like', {
            fontFamily: 'Teoran',
            fontSize: logoSize 
        });
        let logo3 = this.add.text(logoX, logoY+ (logoSpacing*2), 'Cars', {
            fontFamily: 'Teoran',
            fontSize: logoSize
        });
        // this.tweens.add()
        this.time.delayedCall(3000, () =>{
            this.scene.transition({
                target: "OpenDoor",
                duration: 500,
                onUpdate: this.transitionOut,
            })
        })
    }
    transitionOut(){
        ;
    }
}
class OpenDoor extends Phaser.Scene{
    constructor(){
        super("OpenDoor");
    }
    create(){
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xffffff, 1);
        this.graphics.fillRect(0, 0, 100, 100);
    }
}
class GetIn extends Phaser.Scene{
    constructor(){
        super("GetIn");
    }
}
class Startup extends Phaser.Scene{
    constructor(){
        super("Startup");
    }
}
class MoveOut extends Phaser.Scene{
    constructor(){
        super("MoveOut");
    }
}
class MainMenu extends Phaser.Scene{
    constructor(){
        super("MainMenu");
    }
}
let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [Intro, OpenDoor, GetIn, Startup, MoveOut, MainMenu]
}
let game = new Phaser.Game(config);