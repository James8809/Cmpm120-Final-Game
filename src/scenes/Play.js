class Play extends Phaser.Scene{
    constructor() {
        super("playScene")
    }

    init() {

    }
    preload() {
        this.load.image('truck', './assets/truck.png');
        this.load.image('highway', './assets/new_Freeway.png');
        this.load.image('police', './assets/police.png');
        this.load.spritesheet('policeAnim', './assets/spritesheet.png',{
            frameWidth:105,
            frameHeight:59
        });
        this.load.spritesheet('truckAnim', './assets/truck_final_spritesheet_2.png',{
            frameWidth:204.25,
            frameHeight:80,
        });
        this.load.audio('audio_background', ['assets/background.wav']);
        this.load.audio('horn', ['assets/horn.wav'])
    }
    create() {
        this.physics.world.setBounds(0, 0, 1050, 600);
        this.truckGroup = this.add.group({
            runChildUpdate: true,
            active: true
        });

        this.time.delayedCall(2500, () => { 
            this.addTruck(); 
        });

        this.highway = this.add.tileSprite(0, 0, 3000, 600, 'highway').setOrigin(0, 0);
        this.gameOver = false;
        this.p1Police = new Police(this, 10, 18.5,'police').setOrigin(0,0);
        //this.p2Police = new Police(this, w/2, truckMargin + 360, 'police').setOrigin(0,0);
        
        this.anims.create({
            key:"police_anim",
            frames: this.anims.generateFrameNumbers('policeAnim'),
            framerate:20,
            repeat: -1
        });
        this.anims.create({
            key:"truck_anim",
            frames: this.anims.generateFrameNumbers('truckAnim'),
            framerate:20,
            repeat: -1
        });
        this.p1Police.play('police_anim');
        //this.p2Police.play('police_anim');
         
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        music = this.sound.add('audio_background');
        //music.setLoop(true);
        music.play();
        /*
        musicConfig = {
            mute:false,
            volume:0.5,
            rate:1,
            detune:0,
            seek:0,
            loop:false,
            delay: 0
        }
        */
        //this.music.play(musicConfig);
        var spawn = true;
        this.physics.add.overlap(this.p1Police,this.truckGroup,this.crash,null,this);
        //let front;
    }
    addTruck() {
        let laneChoose =  Phaser.Math.Between(0, 4);
        let laneChoose2 = Phaser.Math.Between(0, 4);
        while(laneChoose2 == laneChoose) {
            laneChoose2 = Phaser.Math.Between(0, 4);
        } 
        let truck1 = new Truck(this, w, truckMargin + 120*laneChoose,'truck').setOrigin(0,0);
        let truck2 = new Truck(this, w, truckMargin + 120*laneChoose2,'truck').setOrigin(0,0);
        truck1.play('truck_anim');
        truck2.play('truck_anim');
        truck1.spawn = true;
        //truck1.posY = laneChoose*120 + truckMargin;
        //truck2.posY = laneChoose2*120 + truckMargin;
        //truck1.active = true;
        //truck2.active = true;
        this.truckGroup.add(truck1);
        this.truckGroup.add(truck2);
        //console.log(truck1.posY, truck2.posY);
        
    }
    update() {
        if(!this.gameOver) {
            this.highway.tilePositionX += game.settings.startSpeed;
            this.p1Police.update();
            if(Phaser.Input.Keyboard.JustDown(keyF)) {
                this.sound.play("horn");   // play sfx
                game.settings.fired = true;
            }
            /*
            here i was trying to get truckgroup elements and access its x and y
            properties so I can implement some if statements for thief(p2) to
            avoid truck as they approach. But for some reason i couldnt get
            the child properties and time runs out.

            let front = this.truckGroup.getChildren();
            console.log(front[0]);
            front = this.truckGroup.getFirst({y : 382});
            console.log(front);
            //console.log(front[0]);
            if (front != null) {
                console.log("yo")
                console.log(front, this.p2Police.y, front.y);
            }
            */
            /*
            if (this.truckGroup.getMatching(posY = this.p2Police.y)) {
                front = this.truckGroup.getMatching(posY = this.p2Police.y);
                console.log(front);
            }
            */
            count++;
            if (count % 10 == 0 && game.settings.startSpeed < 30 && game.settings.carSpeed < 100) {
                game.settings.startSpeed += 0.05;
                game.settings.carSpeed += 0.02;
            }
        }
        if(this.gameOver) {
            
            music.stop();
            this.scene.start("endingScene");
        }
    }
    crash() {
        this.gameOver = true;
        this.truckGroup.runChildUpdate = false;
    }
    
}