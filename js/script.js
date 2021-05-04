$(document).ready(function(){
	$("#p1").click(function(){
        let x = document.getElementById("p1").getAttribute("src");
         $("#p1").attr("src",judge(x));
    });

    $("#p2").click(function(){
        let x = document.getElementById("p2").getAttribute("src");
        $("#p2").attr("src",judge(x));
    });

    $("#p3").click(function(){
        let x = document.getElementById("p3").getAttribute("src");
        $("#p3").attr("src",judge(x));
    });

    $("#p4").click(function(){
        let x = document.getElementById("p4").getAttribute("src");
        $("#p4").attr("src",judge(x));
    });

    $("#p5").click(function(){
        let x = document.getElementById("p5").getAttribute("src");
        $("#p5").attr("src",judge(x));
    });

    $("#p6").click(function(){
        let x = document.getElementById("p6").getAttribute("src");
        $("#p6").attr("src",judge(x));
    });
})

 
function filterStr(str) {
    linkElm = str.split("_");
    return linkElm[0]+"_2.png";
  }

function filterStr2(str) {
    linkElm = str.split("_");
    return linkElm[0]+"_1.png";
  }

function judge(label){
    if (label==filterStr2(label)){
        return filterStr(label);
    }else{
        return filterStr2(label);
    }
}

