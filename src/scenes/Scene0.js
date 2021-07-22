class Scene0 extends Phaser.Scene{
    config = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        scene: {
          preload: preload,
          create: create
        }
      };
      preload () {
        this.load.plugin('DialogModalPlugin', './dialog_plugin.js');
      }
      create () {
        this.sys.install('DialogModalPlugin');
        this.sys.dialogModal.init();

      }


}