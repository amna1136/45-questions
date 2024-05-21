function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with: $)\n    {items.join(', ')}.");
}
make_sandwich("ham cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avacaddo", "sprouts", "mustard", "mayo");
