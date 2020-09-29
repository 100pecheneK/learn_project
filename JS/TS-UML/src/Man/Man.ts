export interface IMan {
  setName: (newName: string) => void,
  setSurname: (newSurname: string) => void,
  getName: () => string,
  getSurname: () => string
}

export default class Man implements IMan {
  constructor(private name: string, private surname: string) {}

  getName(): string {
    return this.name
  }

  getSurname(): string {
    return this.surname
  }

  setName(newName: string): void {
    this.name = newName
  }

  setSurname(newSurname: string): void {
    this.surname = newSurname
  }

}