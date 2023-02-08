// Today's date at top of page
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

// Adds event listener for each click button and saves to local storage
var agendaBtn = document.getElementById('save-button-9');
var agendaItem = document.getElementById('description-9');
agendaItem.value = localStorage.getItem('agenda-9');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-9').value;

  localStorage.setItem('agenda-9', agendaItem);
});

var agendaBtn = document.getElementById('save-button-10');
var agendaItem = document.getElementById('description-10');
agendaItem.value = localStorage.getItem('agenda-10');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-10').value;

  localStorage.setItem('agenda-10', agendaItem);
});

var agendaBtn = document.getElementById('save-button-11');
var agendaItem = document.getElementById('description-11');
agendaItem.value = localStorage.getItem('agenda-11');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-11').value;

  localStorage.setItem('agenda-11', agendaItem);
});

var agendaBtn = document.getElementById('save-button-12');
var agendaItem = document.getElementById('description-12');
agendaItem.value = localStorage.getItem('agenda-12');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-12').value;

  localStorage.setItem('agenda-12', agendaItem);
});

var agendaBtn = document.getElementById('save-button-1');
var agendaItem = document.getElementById('description-1');
agendaItem.value = localStorage.getItem('agenda-1');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-1').value;

  localStorage.setItem('agenda-1', agendaItem);
});

var agendaBtn = document.getElementById('save-button-2');
var agendaItem = document.getElementById('description-2');
agendaItem.value = localStorage.getItem('agenda-2');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-2').value;

  localStorage.setItem('agenda-2', agendaItem);
});

var agendaBtn = document.getElementById('save-button-3');
var agendaItem = document.getElementById('description-3');
agendaItem.value = localStorage.getItem('agenda-3');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-3').value;

  localStorage.setItem('agenda-3', agendaItem);
});

var agendaBtn = document.getElementById('save-button-4');
var agendaItem = document.getElementById('description-4');
agendaItem.value = localStorage.getItem('agenda-4');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-4').value;

  localStorage.setItem('agenda-4', agendaItem);
});

var agendaBtn = document.getElementById('save-button-5');
var agendaItem = document.getElementById('description-5');
agendaItem.value = localStorage.getItem('agenda-5');

agendaBtn.addEventListener('click', function () {
  var agendaItem = document.getElementById('description-5').value;

  localStorage.setItem('agenda-5', agendaItem);
});

// Conditional for adding a class to each text area depending on time of day 
var currentTime = dayjs().hour();

function timeBlockColor() {

  for (let index = 0; index < 9; index++) {
    var timeBlock = 0;

    // Makes timeBlock run in 12H format 
    if (index < 4) {
      timeBlock = index + 9;
    } else if (index >= 4) {
      timeBlock = index - 3;
    }

    var classNam = ['past', 'present', 'future'];
    var elem = document.getElementById(`hour-${timeBlock}`);

    // Restarts timeBlock back to 24H time format
    if (index >= 4) {
      timeBlock = (timeBlock + 12);
    }

    // Uses 24H format for checking and adding the correct time class to change each hour display
    if (currentTime < timeBlock) {
      elem.classList.add(classNam[2]);
    } else if (currentTime == timeBlock) {
      elem.classList.add(classNam[1]);
    } else if (currentTime > timeBlock) {
      elem.classList.add(classNam[0]);
    };
  }
};

timeBlockColor();



