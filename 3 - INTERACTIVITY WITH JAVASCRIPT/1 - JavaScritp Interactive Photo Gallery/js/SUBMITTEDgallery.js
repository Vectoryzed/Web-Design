/* gallery.js */

function upDate(previewPic) {
    "use strict";
    document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
    document.getElementById('image').innerHTML = (previewPic.alt);
}

function unDo() {
    "use strict";
    document.getElementById('image').style.backgroundImage = "none";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}