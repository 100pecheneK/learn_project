import Departament from './Departament/Departament'
import Employee from './Employee/Employee'
import IdCard from './IdCard/IdCard'
import PastPosition from './PastPosition/PastPosition'
import Room from './Room/Room'
import Menu from './Menu/Menu'

const employee = new Employee('Misha', 'M', 'worker')

const card = new IdCard(100)
employee.setIdCard(card)

const room1 = new Room(1)
const room2 = new Room(2)
const room3 = new Room(3)

employee.setRoom(room1)
employee.setRoom(room1)
employee.setRoom(room2)
employee.setRoom(room3)

employee.getRoom().forEach(employee.deleteRoom.bind(employee))

const departament = new Departament('Dep 1')
const departament2 = new Departament('Dep 2')

employee.setDepartament(departament)

employee.setPastPosition(
  new PastPosition(employee.getPosition(), employee.getDepartament())
)

departament.removeEmployee(employee)
employee.setPosition('Student')
employee.setDepartament(departament2)

const menu = new Menu()

menu.showEmployees(departament2.getEmployee())
