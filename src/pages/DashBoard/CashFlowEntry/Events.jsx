import React from 'react'
import Textfield from '../../../components/Textfield'
import clsx from 'clsx'

const EventField = () => {
    return (
        <div className="add-event">
            <Textfield
                className="event-name"
                placeholder="Event Name"
            />
            <Textfield
                className="event-cost"
                placeholder="$ cost"
            />
        </div>
    )
}

function Events({ isEnable }) {

    return (
        <div className={clsx("add-event-wrap", isEnable && "show-events")}>
            <EventField />
            <EventField />
            <EventField />
            <EventField />
        </div>
    )
}

export default Events
