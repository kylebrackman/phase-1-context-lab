/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const createEmployeeRecord = function(employeeInfo) {
    const employee = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

const createEmployeeRecords = function(employeeInfo) {
    return employeeInfo.map(createEmployeeRecord)
}

const createTimeInEvent = function(dateStamp) {
    let timeCard = dateStamp.split(" ")
    const tIn = {
     type: "TimeIn",
     hour: parseInt(timeCard[1]),
     date: timeCard[0]
    }
    this.timeInEvents.push(tIn)
    return this
 };

const createTimeOutEvent = function (dateStamp) {
    let timeCard = dateStamp.split(" ")
    const tOut = {
     type: "TimeOut",
     hour: parseInt(timeCard[1]),
     date: timeCard[0]
    }
    this.timeOutEvents.push(tOut)
    return this
}

const hoursWorkedOnDate = function (dateWeAreLookingFor) {
    const tOutEvent = this.timeOutEvents.find(obj => obj.date === dateWeAreLookingFor)
    const tInEvent = this.timeInEvents.find(obj => obj.date === dateWeAreLookingFor)
    return (tOutEvent.hour - tInEvent.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const findEmployeeByFirstName = function (employeeRecords, firstName) {
    return employeeRecords.firstName.find(obj => obj.firstName === firstName)
}

 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}