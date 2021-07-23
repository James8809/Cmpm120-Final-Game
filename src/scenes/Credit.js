class Credit extends Phaser.Scene{
    constructor() {
        super("creditScene");
    }
    
    create() {
        let creditConfig = {
            fontFamily: 'Georgia',
            fontSize: '35px',
            backgroundColor: '#338CCA',
            color:'#D0B390',
            padding: {
                top: 5,
                bottom: 5,
            },
        }
        this.add.text(800/2, 600/2 - borderUISize,
            "credit", creditConfig).setOrigin(0.5,0);
        this.add.text(800/2 , 600/2 - borderPadding,
            "music from Haga Keta Fate/Grand order original soundtrack", creditConfig).setOrigin(0.5,0);
        this.add.text(800/2, 600/2 + borderPadding,
            "code from https://gamedevacademy.org/create-a-dialog-modal-plugin-in-phaser-3-part-1/", creditConfig).setOrigin(0.5,0);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    update() {

        if (keyENTER.isDown) {
          this.scene.start('menuScene');
        }
      }


}