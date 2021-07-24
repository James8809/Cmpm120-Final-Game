class EvilTeddy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setImmovable(true);
        this.body.allowGravity = false;
        this.len = 252 * 2.5/2;
        this.width = 96;
        this.left = x - this.len;
        this.right = x + this.len;
        this.moveSpeed = Phaser.Math.Between(300, 600);
        this.setVelocityX(this.moveSpeed);
        this.setOrigin(0,1);
    }
    update() {
        if(this.x < this.left) {
            this.setVelocityX(this.moveSpeed);
            this.anims.play("enemy_right", true);
        }
        if(this.x + this.width > this.right) {
            this.setVelocityX(-this.moveSpeed);
            this.anims.play("enemy_left", true);
        }
        
    }
}