pandaConfig = {
    name: 'MyPandaGame',
    version: '0.0.0',
    ignoreModules: [    
        // 'engine.analytics',
        // 'engine.audio',
        // 'engine.camera',
        // 'engine.debug',
        // 'engine.keyboard',
        // 'engine.loader',
        // 'engine.particle',
        // 'engine.physics',
        // 'engine.pixi',
        // 'engine.pool',
        // 'engine.renderer',
        // 'engine.scene',
        // 'engine.storage',
        // 'engine.system',
        // 'engine.timer',
        // 'engine.tween'        
    ],
    system: {
        width: 1024,
        height: 768,
        scaleToFit: true
    }
};
try {
    // this avoids the following bug at building time
    // /usr/lib/node_modules/pandatool/build.js:57
    //     delete game.config.debug;
    //                ^
    game.config = pandaConfig;    
} catch (e) {}