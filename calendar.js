document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Blitz Tournament',
        start: '2024-07-01T19:00:00',
        description: 'At Sip & Play. $10 entry. All entries turn into prizes.'
      },
      {
        title: 'Family Fridays',
        start: '2024-07-05T16:00:00',
        end: '2024-07-05T23:59:59',
        description: 'Kids get half off game time!',
        allDay: false,
        daysOfWeek: [5], // Repeat every Friday
        startTime: '16:00',
        endTime: '23:59'
      },
      {
        title: 'Park Slope Chess Club',
        start: '2024-07-07T18:00:00',
        description: 'Every Monday 6PM. All skill levels welcome.',
        allDay: false,
        daysOfWeek: [1], // Repeat every Monday
        startTime: '18:00'
      }
    ],
    eventClick: function(info) {
      alert('Event: ' + info.event.title + '\nDescription: ' + info.event.extendedProps.description);
    }
  });

  calendar.render();
});
