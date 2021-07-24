class Scene3 extends Phaser.Scene{
    constructor() {
        super("scene3")
    }

    init() {

    }
    preload() {
        this.load.image('scene4_bg', './assets/ocean_scene4.png');
        this.load.image('obj3', './assets/hold_bubble.png');
    }
    create() {
        // background
        this.bg1 = this.add.image(0, 0, 'scene4_bg').setOrigin(0, 0);
        this.cameras.main.setBounds(0, 0, this.bg1.displayWidth, this.bg1.displayHeight);
        w = this.bg1.width;
        h = this.bg1.height;
        this.physics.world.setBounds(0, 0, w, h);
        this.enemyGroup = this.add.group({
            runChildUpdate: true,
            active: true
        });
        this.floorGroup = this.add.group({
            active: true
        })

        // platforms and enemies
        this.floor0 = this.addPlat(0,h, "ground",0).setOrigin(0,1);
        this.floor1 = this.addPlat(w/2,200,"plat",0).setOrigin(0.5, 0).setScale(2.5);
        this.floor2 = this.addPlat(520,550,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor3 = this.addPlat(200,1000,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor4 = this.addPlat(1745,1050,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor5 = this.addPlat(450,1987,"plat",0).setOrigin(0.5, 0).setScale(2.5);
        this.door2 = this.physics.add.image(1782 + 150,3275,"obj3")
            .setOrigin(1,1);
        this.floor6 = this.addPlat(1179,2850,"plat",0).setOrigin(0.5, 0).setScale(2.5);
        this.floor7 = this.addPlat(1492,3078,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor8 = this.addPlat(1300,3500,"plat",0).setOrigin(0.5, 0).setScale(2.5);
        this.floor9 = this.addPlat(425,3650,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor10 = this.addPlat(1736,2100,"plat",0).setOrigin(0.5, 0).setScale(2.5);
        this.door = this.physics.add.image(400,2500,"obj3")
            .setOrigin(1,1);
        this.floor11 = this.addPlat(600,1400,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor12 = this.addPlat(1831,1700,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor13 = this.addPlat(1638,3750,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor14 = this.addPlat(628,2170,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor15 = this.addPlat(1172,750,"plat",0).setOrigin(0.5, 0).setScale(2.5);
        this.floor16 = this.addPlat(1238,1900,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor17 = this.addPlat(673,3250,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor18 = this.addPlat(257,2500,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor19 = this.addPlat(1100,1200,"plat",0).setOrigin(0.5, 0).setScale(2.5);
        this.floor20 = this.addPlat(1725,450,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor21 = this.addPlat(1050,1600,"plat",0).setOrigin(0.5, 0).setScale(2.5);
        this.floor22 = this.addPlat(200,1723,"plat",0).setOrigin(0.5, 0).setScale(2.5);
        this.floor23 = this.addPlat(1457,2350,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor24 = this.addPlat(394,3000,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor25 = this.addPlat(1832,2631,"plat",1).setOrigin(0.5, 0).setScale(2.5);
        this.floor26 = this.addPlat(978, 2578,"plat",0).setOrigin(0.5, 0).setScale(2.5);
        this.floor27 = this.addPlat(1782, 3275,"plat",0).setOrigin(0.5, 0).setScale(2.5);
        this.door3 = this.physics.add.image(250,1723,"obj3")
            .setOrigin(1,1);

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
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

        //minor settings
        this.gameOver = false;
        this.count = 0;

        // collisions
        this.door.body.allowGravity = false;
        this.door2.body.allowGravity = false;
        this.door3.body.allowGravity = false;
        this.physics.add.overlap(this.player,this.door,this.open,null,this);
        this.physics.add.overlap(this.player,this.door2,this.open,null,this);
        this.physics.add.overlap(this.player,this.door3,this.open,null,this);
        this.physics.add.collider(this.player, this.floorGroup);
        this.physics.add.overlap(this.player,this.enemyGroup,this.crash,null,this);
        // music
        this.player.on('animationrepeat', function () {
            if(this.player.anims.currentAnim.key === 'left' || this.player.anims.currentAnim.key === 'right'
               & this.player.body.touching.down) {
              this.sound.play('step');
            }
        }.bind(this));

    }
    update() {
        if(!this.gameOver) {
            this.player.update();
            if (keyP.isDown) {
                this.scene.start('scene0');
            }
            if(this.count == 1) {
                console.log("going final");
                this.scene.start("creditScene");
            }
        }
        if(this.gameOver) {
            this.scene.start("scene3");
        }
    }
    addPlat(width, height, pic, num) {
        this.name = this.physics.add.image(width, height, pic);
        this.name.setImmovable(true);
        this.name.body.allowGravity = false;
        this.floorGroup.add(this.name);
        if(num == 1) {
            this.addEnemy(width, height, "enemy");
        }
        return this.name;
    }
    addEnemy(width, height, pic) {
        this.name2 = new EvilTeddy(this, width, height, pic);
        this.enemyGroup.add(this.name2);
    }
    open(player, door) {
        if(keyF.isDown) {
            pick.play();
            door.destroy();
            this.count++;
        }
    }
    crash(){
        this.gameOver = true;
        this.enemyGroup.runChildUpdate = false;
        hurt.play();
    }
}