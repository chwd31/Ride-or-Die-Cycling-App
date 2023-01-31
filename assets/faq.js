var modalButton1 = document.getElementById('modal-button-1');
var modalButton2 = document.getElementById('modal-button-2');
var modalButton3 = document.getElementById('modal-button-3');
var modalButton4 = document.getElementById('modal-button-4');
var modalButton5 = document.getElementById('modal-button-5');
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var modal4 = document.getElementById('modal4');
var modal5 = document.getElementById('modal5');

modalButton1.addEventListener('click', function () {
    modal1.classList.add('is-active')
});

modalButton2.addEventListener('click', function () {
    modal2.classList.add('is-active');
});

modalButton3.addEventListener('click', function () {
    modal3.classList.add('is-active');
});

modalButton4.addEventListener('click', function () {
    modal4.classList.add('is-active');
});

modalButton5.addEventListener('click', function () {
    modal5.classList.add('is-active');
});

var closeButton1 = document.getElementById("modal1");
var closeButton2 = document.getElementById("modal2");
var closeButton3 = document.getElementById("modal3");
var closeButton4 = document.getElementById("modal4");
var closeButton5 = document.getElementById("modal5");


closeButton1.addEventListener('click', function () {
    modal1.classList.remove('is-active');
});

closeButton2.addEventListener('click', function () {
    modal2.classList.remove('is-active');
});
closeButton3.addEventListener('click', function () {
    modal3.classList.remove('is-active');
});
closeButton4.addEventListener('click', function () {
    modal4.classList.remove('is-active');
});
closeButton5.addEventListener('click', function () {
    modal5.classList.remove('is-active');
});

.