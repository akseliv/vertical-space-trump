game.module(
    'game.movement-components'
)
.body(function() {
    game.BasicMovement = {
        init: function() {
            this.body.velocity.y = this.speed;
        },       
        move: function() {
            
        },

        bark: function() {
            
        }
    }
    
    game.BasicMovement2 = {
        init: function() {
            this.body.velocity.y = this.speed*1.5;
            this.body.velocity.x = _.random(-500, 500);
        },       
        move: function() {
            
        },

        bark: function() {
            
        }
    }

});