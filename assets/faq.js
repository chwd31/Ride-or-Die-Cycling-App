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

modalButton1.addEventListener('click', function() {
    modal1.classList.add('is-active');
});