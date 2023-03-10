const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();


ASSET_MANAGER.queueDownload("./robot.png");
ASSET_MANAGER.queueDownload("./robot2.png");
ASSET_MANAGER.queueDownload("./ground.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	

	gameEngine.addEntity(new Robot(gameEngine));
	gameEngine.addEntity(new Robot2(gameEngine));
	gameEngine.addEntity(new Ground(gameEngine));

	gameEngine.init(ctx);



	gameEngine.start();
});
