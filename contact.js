var
	stampBlob = document.getElementsByClassName("contact-blob"),
	pfx = ["webkit", "moz", "MS", "o", ""],
 inProg = false;

// assigns functions for keyframes events 
// for transition between stamp and button
PrefixedEvent(stampBlob, "AnimationEnd", stampBlobEnd);
PrefixedEvent(stampBlob, "AnimationStart", stampBlobStart);

// apply prefixed event handlers
// allows for element param to either 
// be an object, array or HTMLCollection
function PrefixedEvent(element, type, callback) {
	for (var p = 0; p < pfx.length; p++) {
		if (!pfx[p]) type = type.toLowerCase();
    if (Object.prototype.toString.call( element ) === '[object Array]' || Object.prototype.toString.call( element ) === '[object HTMLCollection]') {
      for (var pp = 0; pp < element.length; pp++) {
        element[pp].addEventListener(pfx[p]+type, callback, false);
      }
    } else {
      element.addEventListener(pfx[p]+type, callback, false);
    }
	}
}

// keyframe's event functions
function stampBlobEnd(e) {
 $('.button-show').addClass('buttons-shown');
 inProg = false;
}
function stampBlobStart(e){
 inProg = true;
}


// toggles class on parent element to 
// animate between views
$('#contact-me').on('click', function(e){
  if (inProg !== true || typeof inProg == 'undefined') {
   if ($('#contact-me .button-show').length > 0) {
    $('#contact-me .button-show').removeClass('buttons-shown');
  }
  $('.contact-blobs', this).toggleClass('button-show');
  }
});

$('#contact-me a').on('click', function(e){
  e.stopPropagation();
});

// to prevent clicking on the links
// during production
$('#contact-me a').removeAttr('href');