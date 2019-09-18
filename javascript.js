var switchImage = function()
{
    var node = document.querySelector("#firstimage");
    node.setAttribute("src","ispy2.jpg")
    
}
var switchImage2 = function()
{
    var node = document.querySelector("#firstimage");
    node.setAttribute("src","ispy3.jpg")
}
var showHint = function()
{
    var header = document.createElement("h3")
    header.innerHTML = "Look in the bottom right of the picture"
    document.querySelector("body").appendChild(header)
    h3button.setAttribute("onclick",null); //disables button after clicked
}
var funFact = function()
{
    var fact = document.createElement("h3")
    fact.innerHTML = "iSpy was invented in 1946."
    document.querySelector("body").appendChild(fact)
    funfact.setAttribute("onclick",null); //disables button after clicked
}
console.log("JAVASCRIPT WORKING")
//switchImage();
