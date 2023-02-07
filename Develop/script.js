var agendaBtn = document.getElementById('save-button-1');
var agendaItem = document.getElementById('description-1');
agendaItem.value = localStorage.getItem('agenda1');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-1').value;

  localStorage.setItem('agenda1', agendaItem);
});

var agendaBtn = document.getElementById('save-button-2');
var agendaItem = document.getElementById('description-2');
agendaItem.value = localStorage.getItem('agenda2');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-2').value;

  localStorage.setItem('agenda2', agendaItem);
});

var agendaBtn = document.getElementById('save-button-3');
var agendaItem = document.getElementById('description-3');
agendaItem.value = localStorage.getItem('agenda3');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-3').value;

  localStorage.setItem('agenda3', agendaItem);
});

var agendaBtn = document.getElementById('save-button-4');
var agendaItem = document.getElementById('description-4');
agendaItem.value = localStorage.getItem('agenda4');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-4').value;

  localStorage.setItem('agenda4', agendaItem);
});

var agendaBtn = document.getElementById('save-button-5');
var agendaItem = document.getElementById('description-5');
agendaItem.value = localStorage.getItem('agenda5');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-5').value;

  localStorage.setItem('agenda5', agendaItem);
});

var agendaBtn = document.getElementById('save-button-6');
var agendaItem = document.getElementById('description-6');
agendaItem.value = localStorage.getItem('agenda6');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-6').value;

  localStorage.setItem('agenda6', agendaItem);
});

var agendaBtn = document.getElementById('save-button-7');
var agendaItem = document.getElementById('description-7');
agendaItem.value = localStorage.getItem('agenda7');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-7').value;

  localStorage.setItem('agenda7', agendaItem);
});

var agendaBtn = document.getElementById('save-button-8');
var agendaItem = document.getElementById('description-8');
agendaItem.value = localStorage.getItem('agenda8');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-8').value;

  localStorage.setItem('agenda8', agendaItem);
});

var agendaBtn = document.getElementById('save-button-9');
var agendaItem = document.getElementById('description-9');
agendaItem.value = localStorage.getItem('agenda9');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-9').value;

  localStorage.setItem('agenda9', agendaItem);
});



$(function () {

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

});