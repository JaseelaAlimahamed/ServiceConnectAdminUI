import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

function MyCalendar() {
  return (
    
<div className="w-full h-[400px]"> {/* Custom height of 500px */}
  <Calendar
    tileClassName={({ date, view }) => {
      // Apply Tailwind classes based on certain conditions
      if (view === 'month' && date.getDay() === 0) {
        return 'text-red-500'; // Weekend days (Sunday)
      }
      return 'hover:bg-blue-200'; // Hover effect on all tiles
    }}
    className="w-full h-full"  // Ensure it takes up the full height and width of the container
  />
</div>



























    
  );
}

export default MyCalendar;
