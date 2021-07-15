class Teddy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.moveSpeed = 400;
    }

    update() {
        this.setVelocityX(0);
        if(keyLEFT.isDown) {
            this.setVelocityX(-this.moveSpeed);
        }
        if(keyRIGHT.isDown) {
            this.setVelocityX(this.moveSpeed);
        }
        if(keySPACE.isDown && this.body.touching.down){
            this.setVelocityY(-200);
        }
    }
}