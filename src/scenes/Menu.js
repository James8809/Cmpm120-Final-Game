class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }
    
    init() {

    }
    preload() {
        this.load.image('scene1_bg1', './assets/memory dive remake.png');
        this.load.image('scene1_bg22', './assets/injured.png');
        this.load.image('scene1_bg11', './assets/kid_studying.png');
        this.load.image('scene2_bg22', './assets/kid_sleep.png');
        this.load.image('scene3_bg33', './assets/kid_end.png');
        this.load.image('instruction', './assets/help.png');
        this.load.audio('bgm1', './assets/bgm1.mp3');
        this.load.audio('bgm2', './assets/bgm2.mp3');
        this.load.audio('bgm3', './assets/bgm3.mp3');
        this.load.audio('memory_one','./assets/memoryMusic1.ogg');
        this.load.audio('credit_bgm','./assets/LIFE_by_Rude_α.mp3');
    }
    create() {
        this.add.image(0, 0, 'scene1_bg1').setOrigin(0, 0);
        music = this.sound.add('bgm3');
        music.setLoop(true);
        music.play();
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        game.settings = {
            sceneControl: 0

        };
        
    }
    update() {
        if (keyENTER.isDown) {
            game.settings.sceneControl++;
            this.scene.start('scene0');
        }
    }
}