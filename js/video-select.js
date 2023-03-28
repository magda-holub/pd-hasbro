
$('#celek .video-select .btn').on("click", function(){
    let videoID = $('#celek .video-select__videoID').val()
    $('#celek .pp-video iframe').attr('src', 'https://www.youtube.com/embed/' + videoID)
    videoID.val('')
    console.log('Video změněno.')
});

console.log('video-select.js.js is running')