var index=1;
changeImg = function (){
    var imgs= ["images/images/lightning-02.jpg","images/images/lightning-01.jpg","images/images/lightning-03.jpg"];
    document.getElementById('images').src=imgs[index];
    index++;
    if(index===3){
        index=0;
    }
}
setInterval(changeImg,1000);
var head=0;
var eyes=0;
var nose=0;
var mounth=0;
$("#head").click(function () {
    $("#head img").css("marginLeft",+head+"px")
    head-=367;
    if (head===-3670){head=0;}
})
$("#eyes").click(function () {
    $("#eyes img").css("marginLeft",+eyes+"px")
    eyes-=367;
    if (eyes===-3670){eyes=0;}
})
$("#nose").click(function () {
    $("#nose img").css("marginLeft",+nose+"px")
    nose-=367;
    if (nose===-3670){nose=0;}
})
$("#mouth").click(function () {
    $("#mouth img").css("marginLeft",+mounth+"px")
    mounth-=367;
    if (mounth===-3670){mounth=0;}
})