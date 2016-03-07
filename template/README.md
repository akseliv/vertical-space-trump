# pandatool-2.0.4-empty-game-template

In my first steps in pandatool I found the following error:
https://github.com/ekelokorpi/panda.js-toolkit/issues/11

```
$ panda create test-project
$ cd test-project
$ panda build
Building project...
/usr/local/lib/node_modules/pandatool/build.js:56
    delete game.config.debug;
```
I finally got to work and decided to share a quick template that solves the problem (while we wait definitive bugfix for the next release).
Just run the following lines in your command line.

```
npm install pandatool@2.0.4 --save-dev
git clone https://github.com/Viterbo/pandatool-2.0.4-empty-game-template.git
mv pandatool-2.0.4-empty-game-template template
cd template
panda build
```

Happy codding!!
