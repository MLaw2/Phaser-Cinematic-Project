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
                    target: "OpenDoor"
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
        let garage = this.add.rectangle(400, 250, 180, 280, 0xffffff);
        let door = this.add.rectangle(400, 250, 180, 280, 0x000000);
        this.tweens.add({
            targets: door,
            x: 580,
            duration: 3000,
            ease: "quart.out"
        })
        this.time.delayedCall(3000, () =>{
            this.scene.transition({
                target: "GetIn"
            })
        })
    }
}
class GetIn extends Phaser.Scene{
    constructor(){
        super("GetIn");
    }
    preload(){
        this.load.image("carDoor", "./assets/Cropped enhanced mazda rx7 side profile.png");
        this.load.audio("carDoorClose", "./assets/less loud door slam.mp3");
    }
    create(){
        let carDoor = this.add.image(400, 300, 'carDoor');
        let slam = this.sound.add("carDoorClose", {loop: false});
        slam.play();
        this.tweens.add({
            targets: carDoor,
            y: 310,
            duration: 10,
            ease: "sine",
            yoyo: true,
            repeat: 4
        })
        this.time.delayedCall(2000, () =>{
            carDoor.destroy();
            this.scene.transition({
                target: "Startup"
            })
        })
    }
}
class Startup extends Phaser.Scene{
    constructor(){
        super("Startup");
    }
    preload(){
        this.load.image("carFront", "./assets/mazda rx7 front.png");
        this.load.audio("carStart", "./assets/rotary loud startup and revs.mp3");
        console.log("preload done");
    }
    create(){
        let carFront = this.add.image(400,300,'carFront');
        let carStart = this.sound.add("carStart", {loop: false});
        carStart.play();
        this.tweens.add({
            targets: carFront,
            y: 305,
            duration: 20,
            ease: "sine",
            yoyo:true,
            repeat: 35
        })
        this.time.delayedCall(1500, () =>{
            this.tweens.add({
                targets: carFront,
                y: 301,
                duration: 20,
                ease: "sine",
                yoyo: true,
                repeat: -1
            })
        })

        this.time.delayedCall(10000, () =>{
            this.scene.transition({
                target: "MoveOut"
            })
        })
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
    scene: [Startup, MoveOut, MainMenu]
}
let game = new Phaser.Game(config);