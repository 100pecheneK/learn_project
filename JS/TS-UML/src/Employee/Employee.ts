import { IIdCard } from '../IdCard/IdCard'
import { IRoom } from '../Room/Room'
import Man, { IMan } from '../Man/Man'
import { IDepartament } from '../Departament/Departament'
import { IPastPosition } from '../PastPosition/PastPosition'

export interface IEmployee extends IMan {
  setIdCard: (newIdCard: IIdCard) => void
  getIdCard: () => IIdCard | never
  setRoom: (newRoom: IRoom) => void
  getRoom: () => IRoom[]
  deleteRoom: (room: IRoom) => void
  setDepartament: (newDepartament: IDepartament) => void
  getDepartament: () => IDepartament
  setPosition: (newPosition: string) => void
  getPosition: () => string
  setPastPosition: (newPastPosition: IPastPosition) => void
  getPastPosition: () => IPastPosition[]
  deletePastPosition: (pastPosition: IPastPosition) => void
}

export default class Employee extends Man implements IEmployee {
  private rooms: IRoom[] = []
  private card: IIdCard | undefined
  private departament: IDepartament | undefined
  private pastPosition: IPastPosition[] = []

  constructor(name: string, surname: string, private position: string) {
    super(name, surname)
  }
  setPastPosition(newPastPosition: IPastPosition) {
    this.pastPosition.push(newPastPosition)
  }
  getPastPosition() {
    return this.pastPosition
  }
  deletePastPosition(pastPosition: IPastPosition) {
    this.pastPosition = this.pastPosition.filter(
      p =>
        p.getName !== pastPosition.getName &&
        p.getDepartament().getName() !== pastPosition.getDepartament().getName()
    )
  }
  setDepartament(newDepartament: IDepartament) {
    this.departament = newDepartament
    newDepartament.addEmployee(this)
  }
  getDepartament() {
    if (!this.departament) {
      throw new Error('Employee has`t departament!')
    }
    return this.departament
  }

  setPosition(newPosition: string) {
    this.position = newPosition
  }
  getPosition() {
    return this.position
  }
  getIdCard(): IIdCard | never {
    if (!this.card) {
      throw new Error('Employee has`t card!')
    }
    return this.card
  }

  setIdCard(newIdCard: IIdCard): void {
    this.card = newIdCard
  }

  getRoom(): IRoom[] {
    return this.rooms
  }

  setRoom(newRoom: IRoom): void {
    if (!this.rooms.includes(newRoom)) {
      this.rooms.push(newRoom)
    }
  }

  deleteRoom(room: IRoom): void {
    this.rooms = this.rooms.filter(r => r.getNumber() !== room.getNumber())
  }
}
