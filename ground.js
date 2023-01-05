class Ground {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./ground.png"), 0, 0, 91500, 487, 1, 0.02);


    };

    update() {
        

    };

    draw(ctx) {
        this.animator.drawframe(this.game.clockTick, ctx, 0,0)
    };
}
