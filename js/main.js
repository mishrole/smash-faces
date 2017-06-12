$(document).ready(function(){
	$('select').material_select();
});

let peruSize = peru.length;
let random = Math.floor(peruSize*Math.random());
let randomImage = peru[random].image
let nameRandomImage = peru[random].image
console.log(peru[random]);
console.log(randomImage);
console.log(nameRandomImage);

const container = $('<div class="show-image"></div>');
const imageCoder = $('<img class="image" src="img/'+randomImage+'">');
