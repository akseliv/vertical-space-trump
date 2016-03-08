game.module(
    'game.objects'
)
.body(function() {
    
    game.createClass('Entity', {
        collideAgainst: [],

        init: function(x, y) {
            this.initSprite(x, y);
            this.initBody();
            this.ready();
            game.scene.addObject(this);
        },

        ready: function() {},

        remove: function() {
            this.sprite.remove();
            this.body.remove();
        },

        initSprite: function() {},

        initBody: function() {
            this.body = new game.Body({
                position: {
                    x: this.sprite.position.x * 4,
                    y: this.sprite.position.y * 4
                },
                collisionGroup: this.collisionGroup,
                collideAgainst: this.collideAgainst
            });
            this.body.addShape(new game.Rectangle(this.sprite.width * 4, this.sprite.height * 4));
            this.body.addTo(game.scene.world);
            this.body.parent = this;
        },

        update: function() {
            this.onUpdate();
            this.sprite.position.x = this.body.position.x / 4;
            this.sprite.position.y = this.body.position.y / 4;
        },

        onUpdate: function() {}
    });

    // Extend Player from Entity class
    game.createClass('Player', 'Entity', {
        speed: 500,
        collisionGroup: 0,
        // Player collides with Enemy
        collideAgainst: 1,

        initSprite: function() {
            var x = game.system.width / 4 / 2;
            var y = game.system.height / 4 - 24;

            this.sprite = new game.Sprite('ship.png');
            this.sprite.anchor.set(0.5, 0.5);
            this.sprite.position.set(x, y);
            this.sprite.addTo(game.scene.Main);

        },

        ready: function() {
            this.body.collide = this.kill.bind(this);
        },

        shoot: function() {
            // Prevent shooting when killed
            if (!this.sprite.parent) return;

            var bullet = new game.Bullet(this.sprite.position.x, this.sprite.position.y);
        },

        kill: function() {
            var explosion = new game.Explosion(this.sprite.position.x, this.sprite.position.y);
            this.remove();

            // Restart game
            game.scene.addTimer(3000, function() {
                game.system.setScene('Main');
            });
        },

        onUpdate: function() {
            // Prevent from going out of screen
            if (this.body.position.x > game.system.width) this.body.position.x = game.system.width;
            if (this.body.position.x < 0) this.body.position.x = 0;

            // Handle input
            if (game.keyboard.down('LEFT')) this.body.velocity.x = -this.speed;
            else if (game.keyboard.down('RIGHT')) this.body.velocity.x = this.speed;
            else this.body.velocity.x = 0;
        }
    });

});
