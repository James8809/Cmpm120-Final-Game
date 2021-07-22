class Scene1 extends Phaser.Scene{
    constructor() {
        super("scene1")
    }

    init() {

    }
    preload() {
        this.load.image('scene1_bg', './assets/ocean_scene1.png');
        this.load.image('scene2_bg', './assets/ocean_scene2.png');
        this.load.image('floor', './assets/floor.png');
        this.load.image('obj1', './assets/book_bubble.png');
        this.load.audio('bgm2', './assets/bgm2.mp3');
        this.load.spritesheet('player', './assets/player_spritesheet.png',{
            frameWidth:66.5,
            frameHeight:113
        });
    }
    create() {
        // background
        this.bg1 = this.add.image(0, 0, 'scene2_bg').setOrigin(0, 0);
        this.cameras.main.setBounds(0, 0, this.bg1.displayWidth, this.bg1.displayHeight);
        w = this.bg1.width;
        h = this.bg1.height;
        this.physics.world.setBounds(0, 0, w, h);

        // platforms
        this.floor1 = 
        this.door = this.addPlat(w/2,h,"obj1")
            .setOrigin(1,1).setScale(0.3);

        // player
        this.player = new Teddy(this, w/2, 0,'player').setOrigin(0,1);
        this.cameras.main.startFollow(this.player);
        this.player.setCollideWorldBounds(true);
        this.anims.create({
            key:"left",
            frames: this.anims.generateFrameNumbers('player',
                {frames: [2,3]}),
            frameRate:5,
            repeat:-1
        });
        this.anims.create({
            key:"right",
            frames: this.anims.generateFrameNumbers('player',
                {frames: [1,0]}),
            frameRate:5,
            repeat: -1
        });

        // controls
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.gameOver = false;

        // collisions
        this.physics.add.overlap(this.player,this.door,this.open,null,this);

        // music
        if(!musicOn) {
            music = this.sound.add('bgm2');
            music.setLoop(true);
            //music.play();
            musicOn = true;
            console.log("new5");
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
            this.scene.start("scene2");
        }
    }
}