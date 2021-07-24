class Credit extends Phaser.Scene{
    constructor() {
        super("creditScene");
    }
    
    create() {
        let creditConfig = {
            fontFamily: 'Georgia',
            fontSize: '30px',
            //backgroundColor: '#338CCA',
            color:'#EE9F15',
            padding: {
                top: 5,
                bottom: 5,
            },
        }
        music.stop();
        music = this.sound.removeByKey('bgm2');
        music = this.sound.add('credit_bgm', {volume: 0.1});
        music.setLoop(true);
        music.play();
        let space = 100;
        this.text1 = this.add.text(800/2, 600,
            "Credit!"
            , creditConfig).setOrigin(0.5,0);
        this.text2 = this.add.text(800/2, 600 + space,
            "James Liu/ Programmer"
            , creditConfig).setOrigin(0.5,0);
        this.text3 = this.add.text(800/2, 600 + space*2,
            "Darren Yang/ Artist"
            , creditConfig).setOrigin(0.5,0);
        
        this.text4 = this.add.text(800/2, 600 + space*3,
            "Shimao Zhou/ In-game Background"
            , creditConfig).setOrigin(0.5,0);
        creditConfig.fontSize = '25px';
        this.text5 = this.add.text(800/2 , 600 + space*4,
            "Music from Haga Keta Fate/Grand order original soundtrack"
            , creditConfig).setOrigin(0.5,0);
        this.text6 = this.add.text(800/2 , 600 + space*5,
            "Sound Effects from freesound.org"
            , creditConfig).setOrigin(0.5,0);
        this.text7 = this.add.text(800/2, 600 + space*6,
            "Dialogue box code from https://gamedevacademy.org"
            , creditConfig).setOrigin(0.5,0);
        this.text8 = this.add.text(800/2, 600 + space*6 + 30,
            "/create-a-dialog-modal-plugin-in-phaser-3-part-1/"
            , creditConfig).setOrigin(0.5,0);
        this.text9 = this.add.text(800/2, 600 + space*7,
            "Credit scene music is Life by Rude-a"
            , creditConfig).setOrigin(0.5,0);
        creditConfig.fontSize = '40px';
        this.text10 = this.add.text(800/2, 600 + space*8,
            "And thank you for playing!"
            , creditConfig).setOrigin(0.5,0);

        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    update() {
        this.scroll(this.text1);
        this.scroll(this.text2);

        this.scroll(this.text3);
        this.scroll(this.text4);
        this.scroll(this.text5);
        this.scroll(this.text6);
        this.scroll(this.text7);
        this.scroll(this.text8);
        this.scroll(this.text9);
        this.scroll2(this.text10);
        if (keyENTER.isDown) {
            music.stop();
            music = this.sound.removeByKey("credit_bgm");
            this.scene.start('menuScene');
        }
    }

    scroll(text){
        if (text.y > -200) {
            text.y--;
        }
    }
    scroll2(text){
        if (text.y > 600/2 - 50) {
            text.y--;
        }
    }


}