var link = document.querySelector(".write-us");
var slider = document.querySelector(".slider");
var sliderItemFirst = slider.querySelector(".slider-item-first");
var sliderItemSecond = slider.querySelector(".slider-item-second");
var sliderItemThird = slider.querySelector(".slider-item-third");
var sliderControls = document.querySelector(".slider-controls");
var sliderControlsFirst = sliderControls.querySelector(".slider-controls-first");
var sliderControlsSecond = sliderControls.querySelector(".slider-controls-second");
var sliderControlsThird = sliderControls.querySelector(".slider-controls-third");
var popup = document.querySelector(".modal-contacts");
var popupClose = popup.querySelector(".modal-close");

sliderControlsFirst.addEventListener('click', function(evt) {
	sliderControlsFirst.classList.add('current');
	sliderControlsSecond.classList.remove('current');
	sliderControlsThird.classList.remove('current');
	sliderItemFirst.classList.remove('visually-hidden');
	sliderItemSecond.classList.add('visually-hidden');
	sliderItemThird.classList.add('visually-hidden');
})

sliderControlsSecond.addEventListener('click', function(evt) {
	sliderControlsFirst.classList.remove('current');
	sliderControlsSecond.classList.add('current');
	sliderControlsThird.classList.remove('current');
	sliderItemFirst.classList.add('visually-hidden');
	sliderItemSecond.classList.remove('visually-hidden');
	sliderItemThird.classList.add('visually-hidden');
})

sliderControlsThird.addEventListener('click', function(evt) {
	sliderControlsFirst.classList.remove('current');
	sliderControlsSecond.classList.remove('current');
	sliderControlsThird.classList.add('current');
	sliderItemFirst.classList.add('visually-hidden');
	sliderItemSecond.classList.add('visually-hidden');
	sliderItemThird.classList.remove('visually-hidden');
})

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});