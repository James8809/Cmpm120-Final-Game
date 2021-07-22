class Scene1 extends Phaser.Scene{
    constructor() {
        super("scene1")
    }

    init() {

    }
    preload() {
        this.load.image('scene2_bg', './assets/ocean_scene2.png');
        this.load.image('floor', './assets/floor.png');
        this.load.image('obj1', './assets/book_bubble.png');
        this.load.image('plat', './assets/platform.png');
        this.load.image('ground', './assets/ground.png');
        this.load.spritesheet('teddy', './assets/teddy2.png',{
            frameWidth:64,
            frameHeight:113
        });
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
        this.floor0 = this.addPlat(0,h, "ground").setOrigin(0,1);
        this.floor01 = this.addPlat(w/2,h, "ground").setOrigin(0,1);
        this.floor1 = this.addPlat(w/2,200,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor2 = this.addPlat(200,600,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor3 = this.addPlat(1735,1000,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor4 = this.addPlat(1900,1600,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor5 = this.addPlat(1680,2100,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor6 = this.addPlat(752,2700,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor7 = this.addPlat(1568,3000,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor8 = this.addPlat(359,3400,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor9 = this.addPlat(600,3700,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor10 = this.addPlat(200,2500,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor11 = this.addPlat(150,1300,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor12 = this.addPlat(275,1750,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor13 = this.addPlat(1800,3550,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor14 = this.addPlat(826,2170,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor15 = this.addPlat(900,750,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor16 = this.addPlat(1235,1850,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor17 = this.addPlat(1200,3250,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor18 = this.addPlat(1680,2500,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor19 = this.addPlat(932,1100,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.floor20 = this.addPlat(1680,450,"plat").setOrigin(0.5, 0.5).setScale(2.5);
        this.door = this.addPlat(w/2,h,"obj1")
            .setOrigin(1,1).setScale(0.3);

        // player
        this.player = new Teddy(this, w/2, 0,'teddy').setOrigin(0,1);
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
        this.anims.create({
            key:"front",
            frames: this.anims.generateFrameNumbers('teddy'),
            frameRate:5,
            repeat: -1
        })

        // controls
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        cursors = this.input.keyboard.createCursorKeys();
        this.gameOver = false;

        // collisions
        this.physics.add.overlap(this.player,this.door,this.open,null,this);
        this.physics.add.collider(this.player, this.floor0);
        this.physics.add.collider(this.player, this.floor01);
        this.physics.add.collider(this.player, this.floor1);
        this.physics.add.collider(this.player, this.floor2);
        this.physics.add.collider(this.player, this.floor3);
        this.physics.add.collider(this.player, this.floor4);
        this.physics.add.collider(this.player, this.floor5);
        this.physics.add.collider(this.player, this.floor6);
        this.physics.add.collider(this.player, this.floor7);
        this.physics.add.collider(this.player, this.floor8);
        this.physics.add.collider(this.player, this.floor9);
        this.physics.add.collider(this.player, this.floor10);
        this.physics.add.collider(this.player, this.floor11);
        this.physics.add.collider(this.player, this.floor12);
        this.physics.add.collider(this.player, this.floor13);
        this.physics.add.collider(this.player, this.floor14);
        this.physics.add.collider(this.player, this.floor15);
        this.physics.add.collider(this.player, this.floor16);
        this.physics.add.collider(this.player, this.floor17);
        this.physics.add.collider(this.player, this.floor18);
        this.physics.add.collider(this.player, this.floor19);
        this.physics.add.collider(this.player, this.floor20);
        // music
        if(!musicOn) {
            music = this.sound.add('bgm2');
            music.setLoop(true);
            //music.play();
            musicOn = true;
            console.log("new6");
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