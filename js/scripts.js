

var instance = new TypeIt('.type-it', {
     strings: ['Creating', 'Reading', 'Exploring', 'Traveling', 'Learning', 'Coding',],
     breakLines: false,
     autoStart: false

});
setTimeout(() => {
    instance.freeze();

    setTimeout(() => {
        instance.unfreeze();
    }, 2000);

}, 11000);
