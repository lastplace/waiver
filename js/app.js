var createCarousel = function() {

	$("#carousel").owlCarousel({
		navigation: true, // Show next and prev buttons

		slideSpeed: 300,
		paginationSpeed: 400,
		navigationText: ["previous","next"],
		mouseDrag: false,
		touchDrag: false,
		rewindNav: false,
		items: 1,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: false,
		itemsMobile : false

	});
};

var createSignatureWidget = function() {

	var wrapper = document.getElementById("signature-pad"),
		clearButton = wrapper.querySelector("[data-action=clear]"),
		saveButton = wrapper.querySelector("[data-action=save]"),
		canvas = wrapper.querySelector("canvas"),
		signaturePad;

	// Adjust canvas coordinate space taking into account pixel ratio,
	// to make it look crisp on mobile devices.
	// This also causes canvas to be cleared.
	function resizeCanvas() {
		var ratio =  window.devicePixelRatio || 1;
		canvas.width = canvas.offsetWidth * ratio;
		canvas.height = canvas.offsetHeight * ratio;
		canvas.getContext("2d").scale(ratio, ratio);
	}

	window.onresize = resizeCanvas;
	resizeCanvas();

	signaturePad = new SignaturePad(canvas);

	clearButton.addEventListener("click", function (event) {
		signaturePad.clear();
	});

	// saveButton.addEventListener("click", function (event) {
	// 	if (signaturePad.isEmpty()) {
	// 		alert("Please provide signature first.");
	// 	} else {
	// 		window.open(signaturePad.toDataURL());
	// 	}
	// });
};

$(function() {
	createCarousel();
	createSignatureWidget();
});