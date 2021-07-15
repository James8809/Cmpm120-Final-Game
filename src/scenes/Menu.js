class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }
    
    init() {

    }
    preload() {
        this.load.audio('select', './assets/select.wav');
        this.load.image('car', './assets/policeNormal.png');
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

        // setting up a camera cause I want to change the background color
        var camera = this.cameras.main;        
        this.cameras.main.setBackgroundColor('#FA9A75');
        
        // menu text
        let text1 = this.add.text(w/2, h/2 - borderUISize - borderPadding,
            "LA Police Daily Life", menuConfig).setOrigin(0.5,0);
        let text2 = this.add.text(w/2, h/2 - borderPadding,
            "Press Enter to start your day as a police!", menuConfig).setOrigin(0.5,0);
        let text3 = this.add.text(w/2, h/2 + borderPadding,
            "Press button H for instructions(Noob!)", menuConfig).setOrigin(0.5,0);
        this.add.sprite(w/2 + 10, h/2 + borderPadding*5, 'car').setOrigin(0.5,0.5);
        console.log("change4");
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyH)) {
            this.sound.play('select');
            this.scene.start('helpScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.sound.play('select');
            this.scene.start('playScene');
            game.settings = {
                startSpeed: 10,
                carSpeed: 10,
                fired: false
            }
        }
    }
}