function countinglaps() {
var i = 0
var laps = 0;
for (let i = 0; i <= 15; i++) {
    console.log(i);
    };
for (let i = 15; i >= 0; i--) {
    console.log(i);
};
for (let i = 15; i >= 0; i--) {
if (i >= 15) {
    laps += 1;
    console.log(laps, "that's another lap!");
    };
    }
}

countinglaps();