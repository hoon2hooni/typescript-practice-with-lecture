//javascript
const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WENDESDAY": 2});
const dayOfToday = DAYS_ENUM.MONDAY;


//
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    sunday,
}
//enum에 값을 정하지 않으면 알아서 정해줌
console.log(Days.Monday)
