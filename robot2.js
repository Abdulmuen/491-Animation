class Robot2 {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./robot2.png"), 2232, 0, -93, 150, 24, 0.05);

        this.speed = 93;
        this.x = 1500;
        this.y = 0;

    };

    update() {
        this.x -= this.speed * this.game.clockTick;
        if(this.x < 0) this.x = 1500;

    };

    draw(ctx) {
        this.animator.drawframe(this.game.clockTick, ctx, this.x,this.y)
    };
}
