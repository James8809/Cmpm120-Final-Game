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
        this.dialogSpeed = opts.dialogSpeed || 100;
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
    }
    preload() {
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
    setText (text, animate) {
      // Reset the dialog
      this.eventCounter = 0;
      this.dialog = text.split('');
      if (this.timedEvent) this.timedEvent.remove();
      var tempText = animate ? '' : text;
      this._setText(tempText);
      if (animate) {
        this.timedEvent = this.time.addEvent({
          delay: 150 - (this.dialogSpeed * 30),
          callback: this._animateText,
          callbackScope: this,
          loop: true
        });
      }
    }
    _animateText() {
      this.eventCounter++;
      this.text.setText(this.text.text + this.dialog[this.eventCounter - 1]);
      if (this.eventCounter === this.dialog.length) {
        this.timedEvent.remove();
      }
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
    }
    create() {
      if (game.settings.sceneControl == 1) {
        this.createWindow();
        //music.stop();
        music = this.sound.removeByKey('bgm3');
        music = this.sound.add('bgm1');
        music.setLoop(true);
        music.play();
        console.log("new3");
        this.setText("Once there was a teddy bear who have accompanied with his owner since he was born. They had such great times together and the boy never forget his teddy bear. However, one day a tragic happened. The boy got in to a car crash and his brain was serverly injured leading to his memory loss including the memories with the teddy. The teddy was then forgotten by everone and was left inside a toy box waiting for his owner to pick him up once again.", true);
      }
      if (game.settings.sceneControl == 2) {
        this.createWindow();
        this.setText("He waited and waited. So long that he lost count of the time and was about to give up. Suddenly, at the very moment, A light appear in front of the teddy bear. As the light faded, he open his eyes and couldn't believe what he saw. Teddy: \" What happened? Where am I now? Wait... Im able to move myself! Ha! Ha! But... what is this place. It's so deep and there's someone down there too! But... they don't look so friendly. Better not approach them then. Is that a bubble over there? I don't know why but something tells me I should go and collect them.\"", true);
      }
      if (game.settings.sceneControl == 3) { 
        this.add.sprite(0, 0, 'instruction').setOrigin(0,0);
      }
      if (game.settings.sceneControl == 4) {
        music.stop();
        music = this.sound.removeByKey('bgm2');
        music = this.sound.add('bgm3');
        music.setLoop(true);
        music.play();
        this.add.sprite(0, 0, 'scene1_bg11').setOrigin(0,0);
        this.createWindow();
        this.setText("Teddy: \"Wait... I remember this! This is when he used to study and he always have me beside him! Oh man, those were such good times! Does that mean those bubbles were actually pieces of memory? Maybe if I can collect more, I will be able to rebuild more memory with him and then maybe he will remember me! Yeh, lets do it then, I mean.... what else can I do now right?\"", true);
      }
      if (game.settings.sceneControl == 5) {
        this.add.sprite(0, 0, 'scene2_bg22').setOrigin(0,0);
        music.stop();
        music = this.sound.removeByKey('bgm2');
        music = this.sound.add('bgm3');
        music.setLoop(true);
        music.play();
        this.createWindow();
        this.setText("Teddy: \"Oh now...this....this goes way back... He was so little! Even I barely remember this anymore! Man, he used to hug me so tight when there's a thunder storm outside to a point I cant even breathe! Haha just kidding, but I do miss his hugs.... No time to lose then! I feel like I am very close to reaching the end and god knows what will happen afterwards.\"", true);
      }
      if (game.settings.sceneControl == 6) {
        this.add.sprite(0, 0, 'scene3_bg33').setOrigin(0,0);
        music.stop();
        music = this.sound.removeByKey('bgm2');
        music = this.sound.add('memory_one');
        music.setLoop(true);
        music.play();
        this.createWindow();
        this.setText("With his tramendous effort and willness, he was able to collect all of the memory fragments.Thus the memories were rebuilt and so were his owner's memories. In the end, the owner recovers from his memory loss and return to his room from the hospital as soon as possible. He reached out to a dusty box and inside there was something he so preciously loved and yet forgotten. He hug the teddy with all his strength and that night he never released the hug. The next morning they boy brought the teddy to their favorite place and just sit along each other.\"",true);
      }
      keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    update() {

      if (keyENTER.isDown) {
        game.settings.sceneControl++;
        if(game.settings.sceneControl == 2 || game.settings.sceneControl == 3){
          this.scene.start('scene0');
        }
        if(game.settings.sceneControl == 4){
          /*
          music.stop();
          music = this.sound.removeByKey('memory_one');
          music = this.sound.add('bgm1');
          music.setLoop(true);
          music.play();
          console.log("here");
          */
          this.scene.start('scene1');
        }
        if(game.settings.sceneControl == 5){
          music.stop();
          music = this.sound.removeByKey('bgm3');
          music = this.sound.add('bgm2');
          music.setLoop(true);
          music.play();
          this.scene.start('scene2');
        }
        if(game.settings.sceneControl == 6){
          music.stop();
          music = this.sound.removeByKey('bgm3');
          music = this.sound.add('bgm2');
          music.setLoop(true);
          music.play();
          this.scene.start('scene3');
        }if(game.settings.sceneControl == 7){
          this.scene.start('creditScene');
        }
      }
    }
}