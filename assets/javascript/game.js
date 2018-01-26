
var total=0;
var number;
var genNum;

function targetNumber () { 
	genNum = Math.floor(Math.random()*102 +19);

}//targetNumber end

 targetNumber();

function crystalNumber(){
	 return Math.floor(Math.random()*12 +1);
	
}//crystalNumber end

var gem1=crystalNumber();
var gem2=crystalNumber();
var gem3=crystalNumber();
var gem4=crystalNumber();

$(document).ready(function(){

$("#computer").text(genNum);

$("#one").on("click",function(){
	total=gem1 +total;
	$("#total1").text(total);
	console.log(total);
});

$("#two").on("click",function(){
	total=gem2 +total;
	$("#total1").text(total);
});

$("#three").on("click",function(){
	total=gem3 +total;
	$("#total1").text(total);
});

$("#four").on("click",function(){
	total=gem4 +total;
	$("#total1").text(total);
});

var points=0;

function up(){
	if(total === targetNumber){
		points = points +1;
		$("#win").text(points)

	}
	else if(total>targetNumber){
		lose
	}
}








});//document.text end
