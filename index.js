const moment = require('moment')
const { findFreeTimes } = require('./challenge')

const events = [
    {
        "start": "2017-02-21T12:00:00-05:00",
        "end": "2017-02-21T12:30:00-05:00",
    },
    {
        "start": "2017-02-21T14:00:00-05:00",
        "end": "2017-02-21T16:00:00-05:00"
    },
    {
        "start": "2017-02-21T17:00:00-05:00",
        "end": "2017-02-21T17:15:00-05:00"
    },
];

const start = moment().format('2017-02-21T08:00:00-05:00');
const end = moment().format('2017-02-21T18:00:00-05:00');

const freeSlots = findFreeTimes(start, end, 30, events);


console.log(freeSlots);