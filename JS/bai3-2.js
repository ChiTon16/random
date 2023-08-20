
const buttonNumber = document.getElementById("btn1");

buttonNumber.onclick = () => {
    var block = document.querySelectorAll(".block-random");
    var tong=0;
    
    block.forEach(item => {
        var num = Math.floor(Math.random() * 6) + 1;
        tong +=num;
        item.innerHTML = `${num}`;
    })

    const Inputrandom = document.getElementById("rs-random");
    Inputrandom.innerHTML = `${tong}`;
}