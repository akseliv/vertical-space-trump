game.module(
    'game.main'
)
.require(
    'game.assets',
    'game.objects',
    'game.movement-components'
)
.body(function() {

game.createScene('Main', {
	animationSpeed: 0.1,
    fooObject: { 
        prop: 'bark' ,
            say: function(){
                console.log(this.prop);
            }
        },
        
    init: function() {
       game.sandbox = new Events();
    	this.world = new game.World(0, 0);
        
        // Create scaled container for pixel art
    	this.mainContainer = new game.Container().addTo(this.stage);
    	this.mainContainer.scale.set(4, 4);

    	var bg = new game.TilingSprite('desert-backgorund-looped.png');
    	bg.speed.y = 80;
    	bg.addTo(this.mainContainer);
    	this.addObject(bg);

    	this.player = new game.Player();
        game.scene.player = this.player;
        this.message = new game.PIXI.Text("Wave Start!", { font: '60px Arial',fill: "#ff3366" , align: 'center'});
        this.message.x = game.system.width/2;
        this.message.y = game.system.height/2;
        this.message.alpha = 0;
        this.stage.addChild(this.message);
       
        this.addTimer(5000,this.preStartWave.bind(this));
    },

    spawnEnemy: function(c) {

    	var enemy = new game.Enemy();
        enemy.cycle = game.scene.cycle;
        console.log("foo",c);
        enemy.postReady();
    },
    
    preStartWave: function(){
        console.log("prep wave start");
        game.scene.cycle = _.shuffle(_.range(game.movementComponents.length));
        game.Enemy.speed = game.Enemy.speed*1.2;
        this.spawnEnemy();
        this.message.alpha = 1;
        this.addTimer(4000,this.startWave.bind(this));
    },
    
    startWave: function() {
        this.message.alpha = 0;
        console.log('started wave'); 

        this.addTimer(5000,this.stopWave.bind(this));

        this.enemyTimer = this.addTimer(250, this.spawnEnemy.bind(this), true)
    },
    
    stopWave: function() {
        console.log('stopped wave');
        if(this.enemyTimer) this.removeTimer(this.enemyTimer);
        this.addTimer(5000,this.preStartWave.bind(this));        
    },

    keydown: function(key) {
    	if (key === 'X') this.player.shoot();game.sandbox.emit("shoot");
        
    },
    
    hideText: function(text){
        this.message.alpha = 0;
    }
    
});

});
