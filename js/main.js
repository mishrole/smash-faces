const randomizer = (sede) =>{
	const sedeSize = sede.length;
	const random = Math.floor(sedeSize*Math.random());
	const randomImage = sede[random].image;

	return randomImage

}

const start = () =>{

	const imageCoder = $('<img class="image" src="img/'+randomizer(peru)+'">');
	const showImage = $('#show-image');
	showImage.append(imageCoder);
}

$(document).ready(function(){
	$('select').material_select();

	const sedes = $('#sedes');

	$(sedes).change(function(){
		if($(this).val() == 'Lima'){
			start();
		}
	})

});

/*
const peruSize = peru.length;
const random = Math.floor(peruSize*Math.random());
const randomImage = peru[random].image
const nameRandomImage = peru[random].name
console.log(peru[random]);
console.log(randomImage);
console.log(nameRandomImage);
*/
