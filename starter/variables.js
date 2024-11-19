// Three options

// function scoped
// can be changed in scope
// available before declaration 
// -> e.g. available at line 1 tho declared at line 10
var one = 1;


// block scoped
// can be changed in scope
// only available after declaration
let two = 2;


// block scoped
// cannot be changed
// only available after declaration
const three = 3;

/*
use const by default
use let in loops
not really a reason to use var anymore
*/