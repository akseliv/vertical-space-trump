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
    	bg.speed.y = 280;
    	bg.addTo(this.mainContainer);
    	//this.addObject(bg);

    	this.player = new game.Player();

       
        this.startWave();
    },

    spawnEnemy: function(c) {

    	var enemy = new game.Enemy();
        enemy.cycle = game.scene.cycle;
        console.log("foo",c);
        enemy.postReady();
    },
    
    startWave: function() {
        console.log('started wave'); 
        game.scene.cycle = _.shuffle(_.range(4));
        this.addTimer(5000,this.stopWave.bind(this));
        this.spawnEnemy();
        this.enemyTimer = this.addTimer(1000, this.spawnEnemy.bind(this), true)
    },
    
    stopWave: function() {
        console.log('stopped wave');
        if(this.enemyTimer) this.removeTimer(this.enemyTimer);
        this.addTimer(5000,this.startWave.bind(this));        
    },

    keydown: function(key) {
    	if (key === 'X') this.player.shoot();
        game.sandbox.emit("shoot");
    }
    
});

});
