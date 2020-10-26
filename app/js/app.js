var instance = new vidbg('.video', {
	mp4: 'video/world.mp4',
	webm: 'video/world.webm', 
	poster: 'video/poster.jpg',
	overlay: false,
});

var rellax = new Rellax('.features__falcon-heavy');

if(document.body.clientWidth < 768) {
	rellax.destroy();
}

AOS.init();