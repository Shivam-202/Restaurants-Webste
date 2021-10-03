var itemCount = 0;
function ope() {
    var emtMsg, emtbtn;

    if (itemCount == 0) {
        emtMsg = document.getElementById("itmEmt");
        emtMsg.innerText = "Your cart is Empty!";

        emtbtn = document.getElementsByClassName("btnEmt")[0];
        emtbtn.innerText = "Shop Now";

        // document.getElementsByClassName("decrease")[0].style.display = "none";
        // document.getElementsByClassName("num")[0].style.display = "none";
        // document.getElementsByClassName("increase")[0].style.display = "none";
        document.getElementsByClassName("removes")[0].style.display = "none";

    }
    else {
        emtMsg = document.getElementById("itmEmt");
        emtMsg.innerText = "";

        emtbtn = document.getElementsByClassName("btnEmt")[0];
        emtbtn.innerText = "";

        // document.getElementsByClassName("decrease")[0].style.display = "unset";
        // document.getElementsByClassName("num")[0].style.display = "unset";
        // document.getElementsByClassName("increase")[0].style.display = "unset";
        document.getElementsByClassName("removes")[0].style.display = "unset";
    }

    document.getElementsByTagName("button")[0].style.display = "unset";
    var div2 = document.getElementsByTagName("div")[2];
    div2.style.height = "550px";
    div2.style.width = "1100px";
    div2.style.marginTop = "10px";
    div2.style.backgroundColor = "white";
    div2.style.visibility = "visible";
    div2.style.boxShadow = "0 60px 70px 30px rgba(0,0,0,0.9)";
    div2.style.overflow = "scroll";

    document.getElementById("all").style.filter = "blur(1px)";

}
function clo() {
    var div2 = document.getElementsByTagName("div")[2];
    div2.style.visibility = "hidden";

    document.getElementById("all").style.filter = "blur(0px)";
}

function counting() {
    document.getElementById("count").style.visibility = "visible";
    itemCount++;

    if (itemCount < 10) {
        document.getElementById("count").innerText = "0" + itemCount;
    } else {
        document.getElementById("count").innerText = itemCount;
    }

}

// var noItem = 1;
// var pric1;
// function increment() {
//     noItem = noItem + 1;
//     document.getElementById("numberItem").innerText = noItem;
   
// }
// function decrement() {
//     if (noItem > 1) {

//         noItem--;
//         document.getElementById("numberItem").innerText = noItem;
//     }
// }


function removing(el){

    var imgRe = document.getElementsByClassName("images")[0];
    var namRe = document.getElementsByClassName("names")[0];
    var titRe = document.getElementsByClassName("titles")[0];
    var pricRe = document.getElementsByClassName("prices")[0];
    var remoRe = document.getElementsByClassName("removes")[0];

    // var decRe = document.getElementsByClassName("decrease")[0];
    // var numRe = document.getElementsByClassName("num")[0];
    // var incRe = document.getElementsByClassName("increase")[0];
    // var priceCaRe = document.getElementsByClassName("priceCal")[0];


    imgRe.removeChild(imgRe.children[0]);
    namRe.removeChild(namRe.children[0]);
    titRe.removeChild(titRe.children[0]);
    pricRe.removeChild(pricRe.children[0]);
    remoRe.removeChild(remoRe.children[0]);

    // decRe.removeChild(decRe.children[0]);
    // numRe.removeChild(numRe.children[0]);
    // incRe.removeChild(incRe.children[0]);
    // priceCaRe.removeChild(priceCaRe.children[0]);

    itemCount--;
    if (itemCount > 0) {
        if (itemCount < 10) {
            document.getElementById("count").innerText = "0" + itemCount;
        }
        else {
            document.getElementById("count").innerText = itemCount;
        }
    }
    else {
        document.getElementById("count").style.visibility = "hidden";

        emtMsg = document.getElementById("itmEmt");
        emtMsg.innerText = "Your cart is Empty!";

        emtbtn = document.getElementsByClassName("btnEmt")[0];
        emtbtn.innerText = "Shop Now";

        // document.getElementsByClassName("decrease")[0].style.display = "none";
        // document.getElementsByClassName("num")[0].style.display = "none";
        // document.getElementsByClassName("increase")[0].style.display = "none";
        document.getElementsByClassName("removes")[0].style.display = "none";
    }
}


var i=0,s = 1;
function allItem(elem) {
   
    //    var confirmation= confirm("Do you want to Add this Item??");
    //    if(confirmation == true){
    counting();

    var index = elem.getAttribute("name");

    var img1 = document.getElementsByClassName("image1")[index].getAttribute("src");
    var nodes = new Image();
    nodes.src = img1;
    nodes.setAttribute("class", 'images');
    document.getElementsByClassName("images")[0].appendChild(nodes);

    var nam1 = document.getElementsByClassName("name1")[index].innerText;
    var nodes1 = document.createElement("div");
    nodes1.innerText = nam1;
    nodes1.setAttribute("class", "names");
    document.getElementsByClassName("names")[0].appendChild(nodes1);


    var tit1 = document.getElementsByClassName("title1")[index].innerText;
    var nodes2 = document.createElement("P");
    nodes2.innerText = tit1;
    nodes2.setAttribute("class", "titles");
    document.getElementsByClassName("titles")[0].appendChild(nodes2);

    pric1 = document.getElementsByClassName("price1")[index].innerText;
    var nodes3 = document.createElement("div");
    nodes3.innerText = pric1;
    nodes3.setAttribute("class", "prices");
    document.getElementsByClassName("prices")[0].appendChild(nodes3);

    var nodes4 = document.createElement("div");
    nodes4.innerText = "Remove";
    nodes4.setAttribute("name", i++);
    nodes4.classList.add("removes");
    document.getElementsByClassName("removes")[0].appendChild(nodes4);
   
    // var nodes5 = document.createElement("div");
    // nodes5.innerText = "-" + "\r\n \r\n Total:-";
    // nodes5.setAttribute("class", "decrease");
    // nodes5.classList.add("decrease");
    // document.getElementsByClassName("decrease")[0].appendChild(nodes5);

    // var nodes6 = document.createElement("div");
    // nodes6.innerText = noItem;
    // nodes6.setAttribute("class", "num");
    // document.getElementsByClassName("num")[0].appendChild(nodes6);

    // var nodes7 = document.createElement("div");
    // nodes7.innerText = "+";
    // nodes7.setAttribute("class", "increase");
    // nodes7.classList.add("increase");
    // document.getElementsByClassName("increase")[0].appendChild(nodes7);

    // var nodes8 = document.createElement("div");
    // nodes8.innerText = pric1;
    // nodes8.setAttribute("class", "priceCal");
    // document.getElementsByClassName("priceCal")[0].appendChild(nodes8);


    //    }
}


function timeshow() {
    var t = new Date();

    var hour = t.getHours();
    var min = t.getMinutes();
    var sec = t.getSeconds();
    var session = "AM";

    if (hour >= 12) {
        session = "PM";
        hour = hour - 12;
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    setTimeout(timeshow, 1000);

    // For Timeing
    var set = hour + " : " + min + " : " + sec + " " + session;

    // For Date
    var month_arr = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = t.getMonth();
    var date = t.getDate();
    var year = t.getFullYear();

    to_date = month_arr[month] + " " + date + " " + year;

    document.getElementsByTagName("span")[1].innerText = "Time:- " + set + " Date:- " + to_date;
}

function shopnow() {
    var div2 = document.getElementsByTagName("div")[2];
    div2.style.visibility = "hidden";
    document.getElementById("all").style.filter = "blur(0px)";
    window.scrollTo(0,580);
  
}