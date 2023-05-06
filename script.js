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

        this.time.delayedCall(5000, () =>{
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
    preload(){
        this.load.image("carSide", "./assets/Cropped enhanced mazda rx7 side profile with no rear wheel.png");
        this.load.image("carWheel", "./assets/rear rx7 tire.png");
    }
    create(){
        let carSide = this.add.image(0, 300, "carSide");
        let carWheel = this.add.image(485, 418, "carWheel");
        this.tweens.add({
            targets: carWheel,
            x: -150,
            duration: 2000,
            ease: "Quad.in",
        })
        this.tweens.add({
            targets: carSide,
            x: -1000,
            duration: 2510,
            ease: "Quad.in"
        })

        this.time.delayedCall(3000, () =>{
            this.scene.transition({
                target: "MainMenu"
            })
        })
    }
}
class MainMenu extends Phaser.Scene{
    constructor(){
        super("MainMenu");
    }
    preload(){
        this.load.image("mazda", "./assets/mazda rx7 color drift.png");
        this.load.image("logo", "./assets/main logo.png");
    }
    create(){
        let wallpaper = this.add.rectangle(400, 300, 800, 600, 0xADD8E6);
        let mazda = this.add.image(1400, 400, "mazda");
        mazda.setDisplaySize(1601/3, 798/3);
        let logo = this.add.image(1000, 150, "logo");
        let actionText = this.add.text(1000, 200, "Vroom Vroom.");
        actionText.setFontSize(32);
        actionText.setFontStyle('bold');
        this.tweens.add({
            targets: actionText,
            x: 530,
            duration: 1000,
            ease: "quart.out"
        })
        this.tweens.add({
            targets: logo,
            x: 600,
            duration: 1000,
            ease: "quart.out"
        })
        this.tweens.add({
            targets: mazda, 
            x: 300,
            duration: 1500,
            ease: "quart.out"
        })

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