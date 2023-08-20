const formElem = document.getElementById("form");

const requireValue = (idInput, idMessage, message) => {
    const inputElem = document.getElementById(idInput).value;
    const messageElem = document.getElementById(idMessage);
    if(inputElem === "") {
        messageElem.innerHTML = message;
        return false;
    } else {
        messageElem.innerHTML = `<br />`;
    }
    return true;
}

formElem.onsubmit = (e) => {
    e.preventDefault();
    const inputAmount = document.getElementById("amount").value;
    const radio1 = document.getElementById("ck").checked;
    const radio2 = document.getElementById("tt").checked;
    const kqamount = document.getElementById("ResultMount");
    const kqbank = document.getElementById("ResultBank");
    let result = requireValue("name", "ResultName", "Họ không được để trống");
    result = requireValue("days", "ResultDay", "Ngày không được để trống");
    if(inputAmount === "" || isNaN(inputAmount) || inputAmount <= 0) {
        kqamount.innerHTML = "Số lượng không được để trống và phải lớn hơn 0";
        result = false;
    } else {
        kqamount.innerHTML = "";
    }
    console.log(radio1, radio2)
    if (!radio1 && !radio2) {
        kqbank.innerHTML = "Bạn phải chọn một kiểu thanh toán";
        result = false;
    } else if (radio1 || radio2){
        kqbank.innerHTML = "<br>";
    }
    if(result) {
        formElem.submit();
    }
}