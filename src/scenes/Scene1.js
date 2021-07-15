class Scene1 extends Phaser.Scene{
    constructor() {
        super("scene1")
    }

    init() {

    }
    preload() {
        this.load.image('scene1_bg', './assets/background.png');
        this.load.image('scene2_bg', './assets/background_2.png');
        this.load.image('floor', './assets/floor.png');
        this.load.image('teddy', './assets/teddy.png');
    }

    create() {
        this.physics.world.setBounds(0, 0, 1572, 1312);

        let platforms = this.physics.add.staticGroup();
        this.w = this.cameras.main.width;
        this.h = this.cameras.main.height;

        
        this.bg1 = this.add.image(0, 0, 'scene1_bg').setOrigin(0, 0);
        this.floor = this.physics.add.image(0, 1312, 'floor').setOrigin(0, 1);
        
        this.floor.setCollideWorldBounds(true);
        this.cameras.main.setBounds(0, 0, this.bg1.displayWidth, this.bg1.displayHeight);

        this.player = new Teddy(this,0,0,'teddy').setOrigin(0,0);
        this.cameras.main.startFollow(this.player);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        this.gameOver = false;
        var spawn = true;
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