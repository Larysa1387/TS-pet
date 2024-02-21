/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Mn = 'Monday',
  Tue = 'Tuesday',
  Wd = 'Wednesday',
  Th = 'Thursday',
  Fr = 'Friday',
}
enum Weekend {
  Sat = 'Saturday',
  Sn = 'Sunday',
}
console.log(typeof WeekDay.Mn);

// function isWeekend(day: WeekDay | Weekend): boolean {
//   if (day === Weekend.Sat || day === Weekend.Sn) return false;
//   else {
//     return true;
//   }
// }
// isWeekend(WeekDay.Fr);

function isWeekend(day: WeekDay | Weekend): boolean {
  return day === Weekend.Sat || day === Weekend.Sn;
}
console.log(isWeekend(WeekDay.Mn));
