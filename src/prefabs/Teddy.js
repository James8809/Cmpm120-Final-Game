class Teddy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.moveSpeed = 10;
    }

    update() {
        if(keyUP.isDown && this.y >= 0 + this.moveSpeed) {
            this.y -= this.moveSpeed;
        }
        if(keyDOWN.isDown && this.y + 65 <= 1312 - this.moveSpeed) {
            this.y += this.moveSpeed;
        }
        if(keyLEFT.isDown && this.x >= 0 + this.moveSpeed) {
            this.x -= this.moveSpeed;
        }
        if(keyRIGHT.isDown && this.x + 39 <= 1575 - this.moveSpeed) {
            this.x += this.moveSpeed;
        }
    }
}