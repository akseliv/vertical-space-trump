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
        enemy.cycle = c;
    },
    
    startWave: function() {
        console.log('started wave'); 
        var cycle = _.shuffle(_.range(3));
        this.addTimer(5000,this.stopWave.bind(this));
        this.spawnEnemy(cycle);
        this.enemyTimer = this.addTimer(1000, this.spawnEnemy.bind(this), true)
    },
    
    stopWave: function() {
        console.log('stopped wave');
        if(this.enemyTimer) this.removeTimer(this.enemyTimer);
        this.addTimer(5000,this.startWave.bind(this));        
    },

    keydown: function(key) {
    	if (key === 'X') this.player.shoot();
    }
    
});

});
