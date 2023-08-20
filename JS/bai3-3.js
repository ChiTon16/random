const arr = [
    {id: 1, thumbnail: './IMG/xs1.png'},
    {id: 2, thumbnail: './IMG/xs2.png'},
    {id: 3, thumbnail: './IMG/xs3.png'},
    {id: 4, thumbnail: './IMG/xs4.png'},
    {id: 5, thumbnail: './IMG/xs5.png'},
    {id: 6, thumbnail: './IMG/xs6.png'},
];

const buttonNumber = document.getElementById("btn1");

buttonNumber.onclick = () => {
    var block = document.querySelectorAll(".img-item");
    var tong=0;
    
    block.forEach(item => {
        var num = Math.floor(Math.random() * 6) + 1;
        tong+=num;
        var str = arr[num - 1].thumbnail;
        item.src = str;
    })

    const Inputrandom = document.getElementById("rs-random");
    Inputrandom.innerHTML = `${tong}`;
}