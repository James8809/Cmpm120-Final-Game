class Scene2 extends Phaser.Scene{
    constructor() {
        super("scene2")
    }

    init() {

    }
    preload() {
        this.load.image('scene3_bg', './assets/ocean_scene3.png');
        this.load.image('obj2', './assets/toy_bubble.png');
    }
    create() {
        this.bg1 = this.add.image(0, 0, 'scene3_bg').setOrigin(0, 0);
        this.cameras.main.setBounds(0, 0, this.bg1.displayWidth, this.bg1.displayHeight);
        w = this.bg1.width;
        h = this.bg1.height;
        this.physics.world.setBounds(0, 0, w, h);

        this.door = this.addPlat(w/2,h,"obj2")
            .setOrigin(1,1).setScale(0.3);

        this.player = new Teddy(this, w/2, 0,'player').setOrigin(0,1);
        this.cameras.main.startFollow(this.player);


        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        this.gameOver = false;
        this.physics.add.overlap(this.player,this.door,this.open,null,this);

        this.physics.add.collider(this.player, this.floor);
        this.physics.add.collider(this.player, this.plat1);
        this.physics.add.collider(this.player, this.shelfPlat1);
        this.player.setCollideWorldBounds(true);
        if(!musicOn) {
            music = this.sound.add('bgm2');
            music.setLoop(true);
            //music.play();
            musicOn = true;
            console.log("new3");
        }
    }
    update() {
        if(!this.gameOver) {
            this.player.update();
        }
        if(this.gameOver) {
        }
    }
    addPlat(width, height, pic) {
        this.name = this.physics.add.image(width, height, pic);
        this.name.setImmovable(true);
        this.name.body.allowGravity = false;
        return this.name;
    }
    open() {
        if(keyF.isDown) {
            this.scene.start("scene3");
        }
    }
}