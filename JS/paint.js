var paintwidth = 1; //Độ dày nét vẽ
var color = "#000000"; //màu nét vẽ
var paint; //Biến luânj lý chuột trái phải
var prevX, prevY; // biến lưu vị trí điểm trước đó

$(document).ready(function() {
    context = canvas.getContext("2d"); //Lấy thiết bi ngữ cảnh canvas

    $("canvas").mousedown(function(e) {
        prevX = e.pageX - this.offsetLeft;
        prevY = e.pageY - this.offsetTop;
        paint= true; //cho phép vẽ
    });

    $("canvas").mousemove(function(e) {
        if (paint) {
            context.strokeStyle = color;
            context.lineWidth = paintwidth;
            context.lineJoin = "round"; // đầu bút vẽ tròn
            context.beginPath(); //Chuẩn bị vẽ
            context.moveTo(prevX, prevY); // Di chuyển đến điểm prevX prevY
            //Vẽ đoạn thẳng di chuyển chuột
            context.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            context.closePath();
            // Thực hiện vẽ 
            context.stroke();
            //Cập nhật prevX, prevY
            prevX = e.pageX - this.offsetLeft;
            prevY = e.pageY - this.offsetTop;
        }
    });

    $("canvas").mouseup(function() {
        paint = false; // Kết thúc chế độ vẽ
    });

    //Thay đổi màu chọn
    $("#color").change(function() {
        color = $(this).val();
    });

    //Cài đặt hàm đổi sự kiện chọn radio
    $(".pen").change(function(){
        var pen = $(this).val();
        if (pen == "thin")
        paintwidth = 1;
        else if (pen == "medium")
        paintwidth = 5;
        else
        paintwidth = 15;
    });

    //Xử lý sự kiện xóa
    $("#btDel").click(function() {
        var width = $("canvas").width();
        var height = $("canvas").height();
        //Tô màu trắng
        context.fillStyle = "#ffffff";
        context.rect(0,0,width,height);
        context.fill();
    })
});