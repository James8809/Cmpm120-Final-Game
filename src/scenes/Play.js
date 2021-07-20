class Play extends Phaser.Scene{
    constructor() {
        super("playScene")
    }

    init() {

    }
    preload() {
        this.load.image('scene1', './assets/background.png');
        this.load.image('scene2', './assets/background_2.png');
        this.load.image('dude', './assets/teddy.png');
    }

    create() {
        //this.physics.world.setBounds(0, 0, 1050, 600);

        this.w = this.cameras.main.width;
        this.h = this.cameras.main.height;

        
        this.bg1 = this.add.image(0, 0, 'scene1').setOrigin(0, 0);
        this.cameras.main.setBounds(0, 0, this.bg1.displayWidth, this.bg1.displayHeight);

        this.player = this.add.sprite(0, 0, 'dude').setOrigin(0, 0);
        this.player.moveSpeed = 10;
        this.cameras.main.startFollow(this.player);

        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        this.gameOver = false;
        var spawn = true;
        //this.physics.add.overlap(this.p1Police,this.truckGroup,this.crash,null,this);
    }
    update() {
        if(!this.gameOver) {
            if(keyUP.isDown && this.player.y >= 0 + this.player.moveSpeed) {
                this.player.y -= this.player.moveSpeed;
            }
            if(keyDOWN.isDown && this.player.y <= 1312 - this.player.moveSpeed) {
                this.player.y += this.player.moveSpeed;
            }
            if(keyLEFT.isDown && this.player.x >= 0 + this.player.moveSpeed) {
                this.player.x -= this.player.moveSpeed;
            }
            if(keyRIGHT.isDown && this.player.x <= 1575 - this.player.moveSpeed) {
                this.player.x += this.player.moveSpeed;
            }
        }
        if(this.gameOver) {
            
        }
    }
    crash() {
        this.gameOver = true;
        this.truckGroup.runChildUpdate = false;
    }
    
}