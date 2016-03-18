game.module(
    'game.movement-components'
)
.body(function() {
    game.BasicMovement = {
        init: function init() {
        },       
        move: function move() {
            this.body.velocity.y = this.speed;
            this.body.velocity.x = Math.sin((this.body.position.y/400)*2*Math.PI/2)*500;
            
        },

        bark: function bark() {
            
        }
    }
    
    game.BasicMovement2 = {
        init: function init() {
            this.body.velocity.x = 0;
            this.body.velocity.y = this.speed;
        },       
        move: function move() {
  
        },

        bark: function bark() {
            
        }
    }
    
    game.BasicMovement3 = {
        init: function init() {
            this.body.velocity.x = _.shuffle([-200,200])[0];
        },       
        move: function move() {
            
        },

        bark: function bark() {
            
        }
    }
    
    game.BasicMovement4 = {
        init: function init() {

            this.body.velocity.x = -400;
            game.scene.addTimer(250, 
                    this.bark.bind(this)
            );
            game.scene.addTimer(500, 
                    this.bark2.bind(this)
            );
        },       
        move: function move() {
            
        },

        bark: function bark() {

                this.body.velocity.x = 0; 
                this.body.velocity.y = -400; 
        },
        bark2: function bark2() {
                this.body.velocity.x = 0; 
                this.body.velocity.y = 400; 
        }
    }
    
    game.BasicMovement5 = {
        init: function init() {


        },       
        move: function move() {
            if(this.body.position.x < game.scene.player.body.position.x){
                this.body.velocity.x = 400;
            }else{
                this.body.velocity.x = -400;
            }
        }
    }
    
    game.BasicMovement6 = {
        init: function init() {

            this.body.velocity.y = -200;
            this.body.velocity.x = -200;
            game.scene.addTimer(500, 
                    this.bark.bind(this)
            );
            game.scene.addTimer(750, 
                    this.bark2.bind(this)
            );
        },       
        move: function move() {
            
        },

        bark: function bark() {

                this.body.velocity.x = 200; 
                this.body.velocity.y = 200; 
        },
        bark2: function bark2() {
                this.body.velocity.x = 0; 
                this.body.velocity.y = 400; 
                
                this.move = function(){
                    this.body.velocity.x = Math.sin((this.body.position.y/400)*2*Math.PI/2)*500;
                };
        }
    }
    
    game.movementComponents = [game.BasicMovement,game.BasicMovement2,game.BasicMovement3,game.BasicMovement4,game.BasicMovement5,game.BasicMovement6];

});