game.module(
    'game.movement-components'
)
.body(function() {
    game.BasicMovement = {
        init: function init() {
        },       
        move: function move() {
            this.body.velocity.y = this.speed;
            this.body.velocity.x = Math.sin((this.body.position.y/200)*2*Math.PI/2)*500;
            
        },

        bark: function bark() {
            
        }
    }
    
    game.BasicMovement2 = {
        init: function init() {
            this.body.velocity.x = 0;
            this.body.velocity.y = this.speed*2;
        },       
        move: function move() {
  
        },

        bark: function bark() {
            
        }
    }
    
    game.BasicMovement3 = {
        init: function init() {
            this.body.velocity.y = 0;
            this.body.velocity.x = _.shuffle([-200,200])[0];
        },       
        move: function move() {
            this.sprite.tint = game.PIXI.rgb2hex([_.random(0,255),_.random(0,255),_.random(0,255)]);
        },

        bark: function bark() {
            
        }
    }
    
    game.movementComponents = [game.BasicMovement,game.BasicMovement2,game.BasicMovement3];

});