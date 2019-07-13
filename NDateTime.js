class NDateTime {
    constructor(value) {
        this._jdate = (value) ? new Date(value) : new Date();
        console.log(this._jdate);
    };

    get year() { return this._jdate.getFullYear(); }
    get month() { return this._jdate.getMonth() + 1; }
    get day() { return this._jdate.getDate(); }

    get hour() { return this._jdate.getHours(); }
    get minute() { return this._jdate.getMinutes(); }
    get second() { return this._jdate.getSeconds(); }
    get millisecond() { return this._jdate.getMilliseconds(); }

    addYears(value) {
        let curr = this._jdate.getFullYear();
        this._jdate.setFullYear(curr + value)
    };

    addMonths(value) {
        let curr = this._jdate.getMonth();
        this._jdate.setMonth(curr + value)
    };

    addDays(value) {
        let curr = this._jdate.getDate();
        this._jdate.setDate(curr + value)
    };

    addHours(value) {
        let curr = this._jdate.getHours();
        this._jdate.setHours(curr + value)
    };

    addMinutes(value) {
        let curr = this._jdate.getMinutes();
        this._jdate.setMinutes(curr + value)
    };
};

let date = new NDateTime('2019-04-01 0:0:0');
//date.addDays(1)
//date.addMonths(9)
date.addHours(24)
//date.addMinutes(18)
let { year, month, day, hour, minute, second, millisecond } = date;
console.log(`${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}`);
