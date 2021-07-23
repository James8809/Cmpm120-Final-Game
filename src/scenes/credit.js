class credit extends Phaser.Scene{
    constructor() {
        super("credit");
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
        this.add.text(w/2 - borderUISize, h/2 - borderUISize,
            "credit", creditConfig).setOrigin(0,0);
        this.add.text(w/2 - borderUISize*2 + borderPadding/2, h/2 - borderPadding,
            "music from Haga Keta Fate/Grand order ogrginal soundtrack", creditConfig).setOrigin(0,0);
        this.add.text(w/2 - borderUISize*2 + borderPadding/2, h/2 + borderPadding,
            "code from https://gamedevacademy.org/create-a-dialog-modal-plugin-in-phaser-3-part-1/", creditConfig).setOrigin(0,0);
    }
    update() {

        if (keyENTER.isDown) {
          this.scene.start('menuScene');
        }
      }


}