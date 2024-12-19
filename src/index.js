/*hole mir das div mit der id date aus HTML und zeige dort das Datum an, aber erst nach 5 Sekunden*/

function displayDate() {
  let date = document.querySelector("#date");
  date.innerHTML = new Date();
}
setTimeout(displayDate, 5000);

/* */
function changeMilliseconds() {
  let milliseconds =
    document.querySelector(
      "#milliseconds"
    ); /* speichert, was in dem DIV ist, in einer Variable*/
  let date = new Date();
  let formattedDate = date.getMilliseconds();

  milliseconds.innerHTML = formattedDate;
}

setInterval(changeMilliseconds, 1);
