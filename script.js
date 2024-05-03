document.getElementById("button").addEventListener("click", function() {
    document.getElementById("title").innerHTML = "Hello Word!";
    document.getElementById("title").style.fontFamily = "verdana";
    document.getElementById("button").style.backgroundColor = "purple";
    const collection = document.getElementsByClassName("container");
    for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "pink";
}
});



const n1 = prompt("");
const n2 = prompt("");

const soma = parseInt(n1) + parseInt(n2);
document.write(`${soma}`)
    

let num = document.getElementsByName("animal").length;
document.getElementById("demo").innerHTML = num;
