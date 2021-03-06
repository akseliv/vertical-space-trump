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
       game.scene.self = this;
       game.sandbox = new Events();
    	this.world = new game.World(0, 0);
        
        // Create scaled container for pixel art
    	this.mainContainer = new game.Container().addTo(this.stage);
    	this.mainContainer.scale.set(4, 4);

    	var bg = new game.TilingSprite('desert-backgorund-looped-2.png');
    	bg.speed.y = 100;
    	bg.addTo(this.mainContainer);
    	this.addObject(bg);
        
        var bg = new game.TilingSprite('desert-backgorund-looped.png');
        bg.blendMode = 1;
    	bg.speed.y = 200;
    	bg.addTo(this.mainContainer);
    	this.addObject(bg);

    	this.player = new game.Player();
        game.scene.player = this.player;
        this.message = new game.PIXI.Text(" ⚠ Wave Start ⚠", { font: '60px Impact',fill: "#ff3366" , align: 'center'});
        this.message.x = game.system.width/2-this.message.width/2;
        this.message.y = game.system.height/2;
        this.message.alpha = 0;
        this.stage.addChild(this.message);
       
        this.addTimer(5000,this.preStartWave.bind(this));

    },

    spawnEnemy: function(x) {

    	var enemy = new game.Enemy(x,null,game.scene.enemyScale);
        enemy.cycle = game.scene.cycle;
        enemy.sprite.tint = game.scene.tint;
        enemy.speed = 1/game.scene.enemyScale;
        enemy.postReady();
    },
    
    preStartWave: function(){
        game.scene.enemyScale = _.random(1.0,2.0);
        game.scene.tint = _.random(0.5,1.0) * 0xFFFFFF;
        console.log("prep wave start");
        game.scene.cycle = _.shuffle(_.range(game.movementComponents.length));
        game.Enemy.speed = game.Enemy.speed;
        this.spawnEnemy();
        this.addTimer(4000,this.startWave.bind(this));
        var foo = function(){ game.scene.message.alpha ^= 1};
        this.repeatTimes(foo,100,20);
    },
    
    startWave: function() {
        this.message.alpha = 0;
        console.log('started wave'); 

        this.addTimer(8000,this.stopWave.bind(this));
        
        var xCoords = [];
        _.times(8,
            function(){
                var x = Math.random(16, game.system.width / 4 - 32);
                xCoords.push(x);
            }        
        );
        console.log(xCoords);
        var foo = function(){ 
            console.log("derp",xCoords[_.random(xCoords.length)]);
            game.scene.spawnEnemy(xCoords[_.random(xCoords.length)]); 
        };
        this.repeatTimes(foo,250,20);
        //this.enemyTimer = this.addTimer(250, this.spawnEnemy.bind(this), true)
    },
    
    stopWave: function() {
        console.log('stopped wave');
        if(this.enemyTimer) this.removeTimer(this.enemyTimer);
        this.addTimer(8000,this.preStartWave.bind(this));        
    },

    keydown: function(key) {
    	if (key === 'X') this.player.shoot();game.sandbox.emit("shoot");
        
    },
    
    hideText: function(text){
        this.message.alpha = 0;
    },
    
    repeatTimes: function(func,delay,times){    
        var foo = function(n){ 
            _.delay(func, delay*n);
        }
        _.times(times, foo);
    }
    
});

});
