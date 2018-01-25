
var targetNumber = 



var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(numberOptions)
var

for (var i = 0; i < numberOptions.length; i++){

	var crystalImage = $("<img>");

	crystalImage.addClass("image-crystal");

	crystalImage.attr("src","http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")

	crystalImage.attr("data-crystalvalue", numberOptions[i]);

	$("#crystals").append(crystaImage);

}

	$(".image-crystal").on("click", function(){

	var crystalValue = ($(this).attr("data-crystalvalue"));


	counter


	});