class Teddy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.moveSpeed = 400;
        this.jumping = false;
        
    }
    update() {
        this.setVelocityX(0);
        if(keyLEFT.isDown) {
            this.setVelocityX(-this.moveSpeed);
            this.anims.play("left", true);
        } else if(keyRIGHT.isDown) {
            this.setVelocityX(this.moveSpeed);
            this.anims.play("right", true);
        } else {
            this.anims.play("front", true);
            this.anims.stop();
        }
        
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && this.jumping){
            this.setVelocityY(-600);
            bounce.play();
            this.jumping = false;
        }
        if(keySPACE.isDown && this.body.touching.down){
            this.setVelocityY(-600);
            bounce.play();
            this.jumping = true;
        }
        /*
        if(keyUP.isDown){
            this.setVelocityY(-600);
        }
        */
    }
}