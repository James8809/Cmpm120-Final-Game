class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }
    
    init() {

    }
    preload() {
        this.load.image('menu','./assets/memory_dive.png');
    }
    create() {
        
        this.add.image(0, 0, 'menu').setOrigin(0, 0);
        
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.scene.start('scene0');
        }
    }
}