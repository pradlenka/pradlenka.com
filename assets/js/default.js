window.addEventListener('load', function() {
	const hero_images = window.hero_images;
	const hero_length = hero_images.length;
	let current_image = 0;
	const hero = document.querySelector(".hero");
	console.log((new Image()).src = hero_images[current_image]);
	setTimeout(next, 10000, hero_images, hero_length, current_image, hero);
})
function next(hero_images, hero_length, current_image, hero) {
	hero.style.backgroundImage = "url(" + hero_images[current_image] + ")";
	current_image = (current_image + 1) % hero_length;
	console.log((new Image()).src = hero_images[current_image]);
	setTimeout(next, 10000, hero_images, hero_length, current_image, hero);
}