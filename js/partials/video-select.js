var btn = document.querySelector('#celek .video-select .btn');

btn.addEventListener('click', function () {
	var videoID = document.querySelector('#celek .video-select__videoID').value,
		iframe = document.querySelector('#celek .pp-video iframe');

	iframe.src = 'https://www.youtube.com/embed/' + videoID;
	document.querySelector('#celek .video-select__videoID').value = '';
	console.log('Video změněno.');
});