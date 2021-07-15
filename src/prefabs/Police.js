class Police extends Phaser.Physics.Arcade.Sprite {
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

        if(keyDOWN.isDown && this.y + 100 <= h) {
            this.y += this.moveSpeed;
        }
    }
}