class Robot {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./robot.png"), 0, 0, 93, 150, 24, 0.05);

        this.speed = 90;
        this.x = 0;
        this.y = 0;

    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1500) this.x = 0;

    };

    draw(ctx) {
        this.animator.drawframe(this.game.clockTick, ctx, this.x,this.y)
    };
}
