class Truck extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.spawn = false;
        //this.posX = 0;
        //this.posY = 0;
    }

    update() {
        this.x -= game.settings.carSpeed;
        
        if (this.spawn && this.x < w/2) {
            this.spawn = false;
            this.scene.addTruck(this.parent);
        }
        

        if(this.x < - this.width) {
            this.destroy();
        }
    }

    reset() {
        this.x = game.config.width + wDivide;
    }

    getPosY() {
        return this.posY;
    }
}