document.addEventListener('DOMContentLoaded', function() {
  const calendar = document.getElementById('calendar');

  function createCalendar() {
    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let calendarHTML = '<table>';
    calendarHTML += '<thead><tr>';

    daysOfWeek.forEach(day => {
      calendarHTML += `<th>${day}</th>`;
    });

    calendarHTML += '</tr></thead><tbody>';
    calendarHTML += '<tr>';

    // Fill in the days of the month (example for July 2024)
    let daysInMonth = 31;
    let firstDay = new Date(2024, 6, 1).getDay(); // July 1, 2024 is a Monday (6th month index is July)
    let currentDay = 1;

    // Fill initial empty cells
    for (let i = 0; i < firstDay; i++) {
      calendarHTML += '<td></td>';
    }

    // Fill the days of the month
    for (let i = firstDay; i < 7; i++) {
      calendarHTML += `<td>${currentDay}</td>`;
      currentDay++;
    }

    calendarHTML += '</tr>';

    while (currentDay <= daysInMonth) {
      calendarHTML += '<tr>';
      for (let i = 0; i < 7; i++) {
        if (currentDay <= daysInMonth) {
          calendarHTML += `<td>${currentDay}</td>`;
          currentDay++;
        } else {
          calendarHTML += '<td></td>';
        }
      }
      calendarHTML += '</tr>';
    }

    calendarHTML += '</tbody></table>';
    calendar.innerHTML = calendarHTML;
  }

  createCalendar();
});

  