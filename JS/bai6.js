var Sopt = parseInt(document.getElementsByName("spt")[0].value);
var GtMin = parseInt(document.getElementsByName("min")[0].value);
var GtMax = parseInt(document.getElementsByName("max")[0].value);
var a = new Array(Sopt);

function Create() {
    Sopt = parseInt(document.getElementsByName("spt")[0].value);
    GtMin = parseInt(document.getElementsByName("min")[0].value);
    GtMax = parseInt(document.getElementsByName("max")[0].value);
    for (var i=0; i< Sopt; i++)
    {
        a[i] = Math.floor(Math.random()*(GtMax - GtMin + 1)) + 10;
    }

    var InputArr = document.getElementById("create");
    
        InputArr.value = a.join(", ");
}

function Sort() {
    var isEmpty = true;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== undefined) {
        isEmpty = false;
        break;
      }
    }

    if (isEmpty) {
      alert("Mảng rỗng");
    }

    var chan = [];
    var le = [];

    for (var i=0; i<Sopt; i++)
    {
        if (a[i] % 2 === 0)
        chan.push(a[i]);
    }

    for (var i=0; i<Sopt; i++)
    {
        if (a[i] % 2 !== 0)
        le.push(a[i]);
    }

    SortTang(chan);
    SortGiam(le);

    var kq = chan.concat(le);
    var InputSort = document.getElementById("sort");
    InputSort.value = kq.join(", ");
}

function SortTang(arr) {
    for (var i=0; i<arr.length; i++)
    {
        for (var j=i+1; j < arr.length; j++)
        {
            if (arr[i] > arr[j])
            {
                var temp = arr[i];
                arr[i]=arr[j];
                arr[j] = temp;
            }
        }
    }
}

function SortGiam(arr) {
    for (var i=0; i<arr.length; i++)
    {
        for (var j=i+1; j < arr.length; j++)
        {
            if (arr[i] < arr[j])
            {
                var temp = arr[i];
                arr[i]=arr[j];
                arr[j] = temp;
            }
        }
    }
}