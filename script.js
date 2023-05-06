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
        let logo = this.add.text(-250, logoY,
            'I Like Cars',
            {
            fontFamily: 'Teoran',
            fontSize: logoSize,
            lineSpacing: 10
        });
        logo.setWordWrapWidth(10);
        this.tweens.add({
            targets: logo,
            x: logoX,
            duration: 2000,
            hold: 500,
            ease: 'quart.out'
        });

        this.time.delayedCall(3000, () =>{
            this.transitionOut();
            this.time.delayedCall(2000, () =>{
                this.scene.transition({
                    target: "OpenDoor",
                })
            })
        })
    }
    transitionOut(){
        this.cameras.main.fadeOut(1000,0,0,0);
    }
}
class OpenDoor extends Phaser.Scene{
    constructor(){
        super("OpenDoor");
    }
    create(){
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xffffff, 1);
        let garage = this.graphics.fillRect(300, 160, 180, 280);
        this.graphics.fillStyle(0x000000, 1);
        let door = this.graphics.fillRect(300, 160, 180, 280);
        this.tweens.add({
            targets: door,
            scaleX: 0,
            scaleY: 0,
            duration: 1000,
            ease: "linear"
        })
        // door.scaleX = 0.1;
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
    // scene: [Intro, OpenDoor, GetIn, Startup, MoveOut, MainMenu]
    scene: OpenDoor
}
let game = new Phaser.Game(config);