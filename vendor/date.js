var monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
var dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

function checkTime() {
  var date = new Date();
  var sufix = '';
  var hours = ('0' + date.getHours()).slice(-2);
  var minutes = ('0' + date.getMinutes()).slice(-2);
  var day = date.getDate();
  var month = monthNames[date.getMonth()];
  var year = date.getFullYear();
  var weekday = dayNames[date.getDay()];
  if (day > 3 && day < 21) sufix = 'th';
  switch (day % 10) {
    case 1:
      sufix = "";
    case 2:
      sufix = "";
    case 3:
      sufix = "";
    default:
      sufix = "";
  }
  document.getElementById('time').innerHTML = "</span><br/><span class='date'>" + weekday  + ', ' + day + sufix+ ' ' + month + sufix+ ' ' + year;
}

setInterval(checkTime(), 1000);