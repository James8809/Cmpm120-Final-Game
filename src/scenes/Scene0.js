class Scene0 extends Phaser.Scene{
    constructor() {
        super("scene0");
    }
    
    init(opts) {
        // Check to see if any optional parameters were passed
        if (!opts) opts = {};
        // set properties from opts object or use defaults
        this.borderThickness = opts.borderThickness || 3;
        this.borderColor = opts.borderColor || 0x907748;
        this.borderAlpha = opts.borderAlpha || 1;
        this.windowAlpha = opts.windowAlpha || 0.8;
        this.windowColor = opts.windowColor || 0x303030;
        this.windowHeight = opts.windowHeight || 150;
        this.padding = opts.padding || 32;
        this.closeBtnColor = opts.closeBtnColor || 'darkgoldenrod';
        this.dialogSpeed = opts.dialogSpeed || 3;
        // used for animating the text
        this.eventCounter = 0;
        // if the dialog window is shown
        this.visible = true;
        // the current text in the window
        this.text;
        // the text that will be displayed in the window
        this.dialog;
        this.graphics;
        this.closeBtn;
        // Create the dialog window
        this.createWindow();
    }
    preload() {
      this.load.audio('memory one','./assets/memoryMusic1.mp3');
      this.load.audio('memory two','./assets/memoryMusic2.mp3');
      this.load.audio('memory three','./assets/memoryMusic3.mp3');
      this.load.audio('memory three','./assets/memoryMusic4.mp3');
    }
    getGameWidth() {
      return 800;
    }
    // Gets the height of the game (based on the scene)
    getGameHeight() {
      return 600;
    }
    // Calculates where to place the dialog window based on the game size
    calculateWindowDimensions(width, height) {
      var x = this.padding;
      var y = height - this.windowHeight - this.padding;
      var rectWidth = width - (this.padding * 2);
      var rectHeight = this.windowHeight;
      return {
        x,
        y,
        rectWidth,
        rectHeight
      };
    }
    createInnerWindow(x, y, rectWidth, rectHeight) {
      this.graphics.fillStyle(this.windowColor, this.windowAlpha);
      this.graphics.fillRect(x + 1, y + 1, rectWidth - 1, rectHeight - 1);
    }
    // Creates the border rectangle of the dialog window
    createOuterWindow(x, y, rectWidth, rectHeight) {
      this.graphics.lineStyle(this.borderThickness, this.borderColor, this.borderAlpha);
      this.graphics.strokeRect(x, y, rectWidth, rectHeight);
    }
    _createCloseModalButton(){
      var self = this;
      this.closeBtn = this.make.text({
        x: this.getGameWidth() - this.padding - 14,
        y: this.getGameHeight() - this.windowHeight - this.padding + 3,
        text: 'X',
        style: {
          font: 'bold 12px Arial',
          fill: this.closeBtnColor
        }
      });
      this.closeBtn.setInteractive();
      this.closeBtn.on('pointerover', function () {
        this.setTint(0xff0000);
      });
      this.closeBtn.on('pointerout', function () {
        this.clearTint();
      });
      this.closeBtn.on('pointerdown', function () {
        self.toggleWindow();
      });
    }
    _createCloseModalButtonBorder() {
      var x = this.getGameWidth() - this.padding - 20;
      var y = this.getGameHeight() - this.windowHeight - this.padding;
      this.graphics.strokeRect(x, y, 20, 20);
    }
    toggleWindow() {
      this.visible = !this.visible;
      if (this.text) this.text.visible = this.visible;
      if (this.graphics) this.graphics.visible = this.visible;
      if (this.closeBtn) this.closeBtn.visible = this.visible;
    }
    setText(text) {
      this._setText(text);
    }
    // Calcuate the position of the text in the dialog window
    _setText(text) {
      // Reset the dialog
      if (this.text) this.text.destroy();
      var x = this.padding + 10;
      var y = this.getGameHeight() - this.windowHeight - this.padding + 10;
      this.text = this.make.text({
        x,
        y,
        text,
        style: {
          wordWrap: { width: this.getGameWidth() - (this.padding * 2) - 25 }
        }
      });
    }
    createWindow(){
      var gameHeight = this.getGameHeight();
      var gameWidth = this.getGameWidth();
      var dimensions = this.calculateWindowDimensions(gameWidth, gameHeight);
      this.graphics = this.add.graphics();
      this.createOuterWindow(dimensions.x, dimensions.y, dimensions.rectWidth, dimensions.rectHeight);
      this.createInnerWindow(dimensions.x, dimensions.y, dimensions.rectWidth, dimensions.rectHeight);
      this._createCloseModalButton();
      this._createCloseModalButtonBorder();
      if (game.settings.sceneControl == 1) {
        this.setText("An old toy is forgotten by his owner for many years. Someday, he got a spell to go into his owner’s head.  Now, you can try to restore your relationship with your childhood best friend (your owner).  To achieve this goal, you need to collect fragile memory bubbles which are now lost in the sea of memory in the owner 's minds and put them back in the secret garden. During this process, try to avoid other toy's memory. (Press enter to start the game!)");
      }
      if (game.settings.sceneControl == 2) {
        this.setText("It looks like you should first search for memories of studying togather with your owner. (Press ENTER to continue and F to gather bubbles) ");
      }
      if (game.settings.sceneControl == 3) {
        this.setText(" In this area, it looks like you should search for your owner’s memory of everday life.(Press ENTER to continue and F to collect bubbles) ");
      }
      if (game.settings.sceneControl == 4) {
        this.setText(" We are almost there. you will notice that fantastic pink color change in background. Inside that special water barrier which is the sign of the secret garden, you should collect precious memories bubbles (Press ENTER to continue and F to collect) ");
      }
      if (game.settings.sceneControl == 5) {
        this.setText(" Congratulations! You made it! (Press ENTER to continue) ");
      }
    }
    create() {
      keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    update() {

      if (keyENTER.isDown) {
        game.settings.sceneControl++;
        if(game.settings.sceneControl == 2){
          this.scene.start('scene0');
        }
        if(game.settings.sceneControl == 3){
          this.scene.start('scene1');
        }
        if(game.settings.sceneControl == 4){
          this.scene.start('scene2');
        }
        if(game.settings.sceneControl == 5){
          this.scene.start('scene3');
        }
        if(game.settings.sceneControl == 5){
          this.scene.start('menuScene');
        }
      }
    }
}