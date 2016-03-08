game.module(
	'game.scenes'
)
.body(function() {
	
game.createScene('Main', {

    backgroundColor: 0xeeeeee,
    init: function() {
        //add text. (We are using the PIXI Text object, documentation is below).
        var text = new game.PIXI.Text("Hello World!", { font: '60px Arial' });
        this.stage.addChild(text);
        var panda = new game.Player(300,200);
    }

});

});
