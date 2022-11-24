function example() {
var i = 0
var age = 20
for (let i = 0; i <=100; i++) {
    console.log(i)
if (i === age) {
    console.log("yes")
    }
else{
    console.log("age doesn't match")
    }
}
};

example();

function evennumbers() {
for (let i = 0; i <=700; i++) {
if (i % 2 === 0) {
        console.log(i, "is even");
    };
    }
    }
    evennumbers();
    
function oddnumbers() {
for (let i = 0; i <=700; i++) {
if (i % 2 != 0) {
    console.log(i, "is odd");
};
}
}
oddnumbers();

//Write a loop with some “if else” statements.
//The loop should start at 1900 and go to 1949 and log when things were invented.
//For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”

function inventionsloop () {
var x = 1900
for (let i = 1900; i <=1949; i++){
if (i === 1900){
    console.log("it is", i, "- The Zeppelin was invented")
    }
    else if (i === 1902){
        console.log("it is", i, "- The Teddy Bear was invented")
    }
    else if (i === 1910){
        console.log("it is", i, "- The Talking Motion Picture was invented")
    }
    else if (i === 1913){
        console.log("it is", i, "-The Bra was invented")
    }
    else if (i === 1949){
        console.log("it is", i, "-The NATO Agreement was invented")
    }
}
}
inventionsloop ();