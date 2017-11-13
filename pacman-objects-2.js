// pacman-objects-2.js
var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);
console.log(ghosts.inky); // => 'Cyan'
console.log(ghosts.blinky); // => 'Red'

// same as above
console.log(ghosts['inky']); // => 'Cyan'
console.log(ghosts['blinky']); // => 'Red'

var ghostName = 'clyde';
ghosts[ghostName]; // => 'Orange'
