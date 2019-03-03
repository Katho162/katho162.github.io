document.addEventListener('DOMContentLoaded', function () {
    var thumbnails = document.getElementsByClassName('thumbnail');
    for (var i = 0; i < thumbnails.length; i++) {
        var thumbnail = thumbnails[i];
        thumbnail.style.backgroundImage = "url(" + thumbnail.children[0].src + ")";
    }
}, false);