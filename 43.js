var magicians = ["alice", "david", "chirs"];
function make_great(magicians) {
    var greatmagicians = [];
    magicians.forEach(function (megician) {
        greatmegicians.push("".concat(megician, " the great"));
    });
    return greatmegicians;
}
var greatmegicians = make_great(magicians.slice());
console.log("orignal megicians");
// show_megicians(megicians);
console.log("great_megicians");
