interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!!');
  }
  workFullTime() {
    pay() {
      console.log('p')
    }
  }
}
function pay<T extends Employee>(employee: E): E{
  employee.pay();
  return employee;
}
[1.2.3].sort