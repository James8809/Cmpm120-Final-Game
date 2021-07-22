class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }
    
    init() {

    }
    preload() {
        this.load.image('scene1_bg', './assets/memory_dive_remake.png');
    }
    create() {

        this.add.image(0, 0, 'scene1_bg').setOrigin(0, 0);
        
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        
    }
    update() {
        if (keyENTER.isDown) {
            this.scene.start('scene0');
        }
    }
}