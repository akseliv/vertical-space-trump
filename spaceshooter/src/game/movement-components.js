game.module(
    'game.movement-components'
)
.body(function() {
    game.BasicMovement = {
        init: function init() {
            this.body.velocity.y = this.speed;
        },       
        move: function move() {
            
        },

        bark: function bark() {
            
        }
    }
    
    game.BasicMovement2 = {
        init: function init() {
            this.body.velocity.y = this.speed*1.5;
            this.body.velocity.x = _.random(-500, 500);
        },       
        move: function move() {
            
        },

        bark: function bark() {
            
        }
    }

});