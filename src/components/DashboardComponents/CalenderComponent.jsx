// src/Calendar.js
import React, { useState } from 'react';

// Helper function to get days of the month
const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
};

// Helper function to get the first day of the month
const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
};

const Calendar = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null); 

    const months = [
        "January", "February", "March", "April", "May", 
        "June", "July", "August", "September", "October", 
        "November", "December"
    ];

    const years = [];
    // Display the last 10 years from the current year downwards
    for (let i = currentYear; i >= currentYear - 10; i--) {
        years.push(i);
    }

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    const handleMonthYearChange = (month, year) => {
        setCurrentMonth(month);
        setCurrentYear(year);
        setDropdownOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="relative">
            <div className="max-w-md mx-auto p-4 border rounded shadow-md" style={{borderRadius:"10px"}}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold" style={{ color: '#303972' }}>Calendar</h2> 
                    <div className="flex items-center">
                        <h2 style={{color:"#303972"}}>{months[currentMonth]} {currentYear}</h2>
                        <button 
                            onClick={() => setDropdownOpen(!dropdownOpen)} 
                            
                            style={{ Color: "#A098AE "}} // Down Arrow Color
                        >
                            ▼
                        </button>
                    </div>
                </div>

                {dropdownOpen && (
                    <div className="absolute bg-white shadow-lg border rounded z-10">
                        <div className="p-2">
                            <h3 className="font-semibold">Select Month and Year</h3>
                            <div className="flex flex-col">
                                <select 
                                    onChange={(e) => handleMonthYearChange(Number(e.target.value), currentYear)} 
                                    className="border rounded p-1 mb-2"
                                >
                                    {months.map((month, index) => (
                                        <option key={index} value={index}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                                <select 
                                    onChange={(e) => handleMonthYearChange(currentMonth, Number(e.target.value))} 
                                    className="border rounded p-1"
                                >
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-7 text-center mb-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                        <div key={day} className="font-semibold" style={{ color: '#A098AE' }}>
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 text-center">
                    {/* Create empty spaces for days before the first day of the month */}
                    {Array.from({ length: firstDay }).map((_, index) => (
                        <div key={index} className="h-10"></div>
                    ))}
                    {daysArray.map(day => {
                        const dayDate = new Date(currentYear, currentMonth, day);
                        const isSunday = dayDate.getDay() === 0; 

                        return (
                            <div 
                                key={day} 
                                className={`border h-10 flex items-center justify-center cursor-pointer`} 
                                onClick={() => setSelectedDay(day)} // Set the selected day on click
                            >
                                <span className={isSunday ? 'text-[#DC3546]' : ''}> {/* Light Red Color for Sunday */}
                                    {day}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default Calendar;
