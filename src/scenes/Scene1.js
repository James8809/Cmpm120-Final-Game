class Scene1 extends Phaser.Scene{
    constructor() {
        super("scene1")
    }

    init() {

    }
    preload() {
        this.load.image('scene1_bg', './assets/background.png');
        this.load.image('scene2_bg', './assets/scene_b.png');
        this.load.image('scene3_bg', './assets/scene_c.png');
        this.load.image('scene4_bg', './assets/scene_d.png');
        this.load.image('floor', './assets/floor.png');
        this.load.image('teddy', './assets/teddy.png');
        this.load.image('door', './assets/door.png');
    }

    create() {
        this.bg1 = this.add.image(0, 0, 'scene1_bg').setOrigin(0, 0);
        this.cameras.main.setBounds(0, 0, this.bg1.displayWidth, this.bg1.displayHeight);
        w = this.bg1.width;
        h = this.bg1.height;
        console.log(w, h);
        this.physics.world.setBounds(0, 0, w, h);

        let platforms = this.physics.add.staticGroup();
        
        this.floor = this.physics.add.image(0, 1312, 'floor').setOrigin(0, 1);
        
        this.floor2 = this.physics.add.image(0, 500, 'floor').setOrigin(0, 1).setScale(0.1);
        this.floor2.setImmovable(true);
        this.floor2.body.allowGravity = false;

        this.floor.setCollideWorldBounds(true);

        
        this.door1 = this.physics.add.image(0 + borderPadding, h-this.floor.height,'door')
            .setOrigin(0,1).setScale(0.3);
        this.door2 = this.physics.add.image(w - borderPadding, h-this.floor.height,'door')
            .setOrigin(1,1).setScale(0.3);
        
        this.door1.setImmovable(true);
        this.door1.body.allowGravity = false;
        this.door2.setImmovable(true);
        this.door2.body.allowGravity = false;

        this.player = new Teddy(this,0,0,'teddy').setOrigin(0,0);
        this.cameras.main.startFollow(this.player);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        this.gameOver = false;
        //this.physics.add.overlap(this.p1Police,this.truckGroup,this.crash,null,this);

        this.physics.add.collider(this.player, this.floor);
        this.player.setCollideWorldBounds(true);
        console.log("hi");
    }
    update() {
        if(!this.gameOver) {
            this.player.update();
        }
        if(this.gameOver) {
        }
    }
    crash() {
        this.gameOver = true;
        this.truckGroup.runChildUpdate = false;
    }
    
}