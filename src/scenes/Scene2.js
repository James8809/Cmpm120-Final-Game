class Scene2 extends Phaser.Scene{
    constructor() {
        super("scene2")
    }

    init() {

    }
    preload() {
    }

    create() {
        this.physics.world.setBounds(0, 0, 1572, 1312);

        let platforms = this.physics.add.staticGroup();
        this.w = this.cameras.main.width;
        this.h = this.cameras.main.height;

        
        this.bg1 = this.add.image(0, 0, 'scene2').setOrigin(0, 0);
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