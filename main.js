let screen = document.querySelectorAll("[screen]");
console.log(screen); //(screen[0]);
console.log("hey");
reset.addEventListener("click", function () {
    myReset();

});
screen = un.dataset.num;

function myReset(){
    screen.value = ""; 
}
