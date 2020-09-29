import { IEmployee } from '../Employee/Employee'

export interface IDepartament {
  setName: (newName: string) => void
  getName: () => string
  addEmployee: (newEmployee: IEmployee) => void
  getEmployee: () => IEmployee[]
  removeEmployee: (employee: IEmployee) => void
  getEmployeeCount: () => number
}

export default class Departament implements IDepartament {
  private employees: IEmployee[] = []
  constructor(private name: string) {}
  setName(newName: string) {
    this.name = newName
  }
  getName() {
    return this.name
  }
  getEmployeeCount() {
    return this.employees.length
  }
  addEmployee(newEmployee: IEmployee) {
    if (!this.employees.includes(newEmployee)) {
      this.employees.push(newEmployee)
    }
  }
  getEmployee() {
    return this.employees
  }
  removeEmployee(employee: IEmployee) {
    this.employees = this.employees.filter(
      e => e.getIdCard() !== employee.getIdCard()
    )
  }
}
