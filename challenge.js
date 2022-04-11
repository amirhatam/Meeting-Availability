const moment = require("moment");


function findFreeTimes(start, end, duration, events) {

    //  Duration In Millisecs
    const durationMS = moment.duration(duration, "minutes").as('milliseconds');
    const eventsFixed = []
    const freeTimes = []

    // Get meeting has been fixed

    events.map((e) => {
        let eventStart = e.start
        let eventEnd = e.end

        if (moment(eventStart).isAfter(start) && moment(eventStart).isBefore(end)) {
            let eventFixed = { start: eventStart, end: eventEnd }
            eventsFixed.push(eventFixed)
        }
    })

    return eventsFixed;
}

module.exports = { findFreeTimes }


