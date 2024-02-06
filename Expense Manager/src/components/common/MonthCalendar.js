import bootstrapPlugin from "@fullcalendar/bootstrap";
// import "@fullcalendar/bootstrap/main.css";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import React, { useState } from "react";

const Calendar = ({ data }) => {
    const events = data.map((event) => ({
        title: `${event.transcationType}: ${event.amount}`,
        start: event.date,
    }));
    const [showPopup, setShowPopup] = useState(false)

    const customDayCellContent = (arg) => {
        const date = arg.date;
        const eventsOnThisDay = events.filter(
            (e) => new Date(e.start).toDateString() === date.toDateString()
        );
        if (eventsOnThisDay.length === 0) {
            return (
                <>
                    <div>{arg.dayNumberText}</div>
                    <div>No events</div>
                </>
            );
        } else {
            const firstTwoEvents = eventsOnThisDay.slice(0, 2);
            const remainingCount = eventsOnThisDay.length - 2;
            const eventElements = firstTwoEvents.map((event) => (
                <div key={event.start}>
                    {event.title}
                </div>
            ));
            if (remainingCount > 0) {
                eventElements.push(
                    <div key="remaining-count" onClick={() => setShowPopup(true)}>
                        {`+${remainingCount} more`}
                    </div>
                );
            }
            return (
                <>
                    <div>{arg.dayNumberText}</div>
                    {eventElements}
                    {showPopup && (
                        <div className="popup">
                            <div className="popup-content">
                                <div className="popup-close" onClick={() => setShowPopup(false)}>
                                    &times;
                                </div>
                                <div className="popup-title">
                                    Events on {date.toDateString()}:
                                </div>
                                <ul>
                                    {eventsOnThisDay.map((event) => (
                                        <li key={event.start}>{event.title}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </>
            );
        }
    };




    return (
        <FullCalendar
            plugins={[dayGridPlugin, bootstrapPlugin]}
            initialView="dayGridMonth"
            // events={events}
            themeSystem="bootstrap"
            dayCellContent={customDayCellContent}
        />
    );
};

export default Calendar;
