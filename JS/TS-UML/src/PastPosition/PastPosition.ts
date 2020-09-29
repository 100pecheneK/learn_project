import { IDepartament } from '../Departament/Departament'

export interface IPastPosition {
  setName: (newName: string) => void
  getName: () => string
  setDepartament: (newDepartament: IDepartament) => void
  getDepartament: () => IDepartament
}

export default class PastPosition implements IPastPosition {
  constructor(private position: string, private departament: IDepartament) {}
  setName(newName: string) {
    this.position = newName
  }
  getName() {
    return this.position
  }
  setDepartament(newDepartament: IDepartament) {
    this.departament = newDepartament
  }
  getDepartament() {
    return this.departament
  }
}
