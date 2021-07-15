class Ending extends Phaser.Scene{
    constructor() {
        super("endingScene");
    }
    
    init() {

    }
    preload() {
        this.load.image('crash', './assets/police_crash.png');
        this.load.audio('crash_sound', 'assets/car_crash.wav');
    }
    create() {
        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '35px',
            backgroundColor: '#FDFFD5',
            stroke: '8178B9',
            strokeThickness: 2,
            color:'#C18468',
            padding: {
                top: 5,
                bottom: 5,
            },
        }

        this.sound.play('crash_sound');
        // setting up a camera cause I want to change the background color
        var camera = this.cameras.main;        
        this.cameras.main.setBackgroundColor('#FA9A75');
        
        this.add.sprite(w/2,h/2- borderPadding*2,"crash");
        // menu text
        let text1 = this.add.text(w/2, borderPadding*3,
            "LA Police Daily Life....", menuConfig).setOrigin(0.5,0);
        let text2 = this.add.text(w/2, h/2 + borderPadding-20,
            "Unfortunately you have crashed....", menuConfig).setOrigin(0.5,0);
        let text3 = this.add.text(w/2, h/2 + borderPadding*3-20,
            "The good thing is the thief only stoled a bread!", menuConfig).setOrigin(0.5,0);
        if (!game.settings.fired) {
            
            let text4 = this.add.text(w/2, h/2 + borderPadding*5-20,
                ".......what? ", menuConfig).setOrigin(0.5,0);
        } else{
            let text4 = this.add.text(w/2, h/2 + borderPadding*5-20,
                "...what?...Oh btw, someone reported you being too noise during  ", menuConfig).setOrigin(0.5,0);
            let text5 = this.add.text(w/2, h/2 + borderPadding*7 -20,
                "the chase, so your pay is getting a cut... told you not to do it...", menuConfig).setOrigin(0.5,0);
        }
            
        let text5 = this.add.text(borderPadding, borderPadding/2,
            "Press Enter to start your horrible life again....", menuConfig).setOrigin(0,0);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.sound.play('select');
            this.scene.start('menuScene');
        }
    }
}