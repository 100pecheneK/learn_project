import { IEmployee } from '../Employee/Employee'

export interface IMenu {
  showEmployees: (employees: IEmployee[]) => void
}

export default class Menu implements IMenu {
  showEmployees(employees: IEmployee[]) {
    console.log('Menu open:')
    employees.forEach((e, i) => {
      console.log('Employee ' + i)
      console.log('cardId: ' + e.getIdCard())
      console.log('Name: ' + e.getName())
    })
  }
}
