
let div = document.getElementsByClassName('name-tag');
console.log(div);

for(let i = 0; i < div.length; i++) {
    let element = document.createElement('p');
    element.innerHTML = "HEllO WORLD";
    div[i].append(element);
}








