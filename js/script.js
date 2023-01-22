var counter = 0;
let plus = document.getElementById("add");
plus.addEventListener("click",() => 
{
    counter++ ;
    document.getElementById("num").innerHTML = counter;
    if (counter > 0) {
        document.getElementById("num").style.color = "green";
    } 
})
let min = document.getElementById("mins");
min.addEventListener("click",() => 
{
    counter-- ;
    document.getElementById("num").innerHTML = counter;
    if (counter < 0) {
        document.getElementById("num").style.color = "red";
    } 
})