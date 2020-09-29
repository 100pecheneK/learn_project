export interface IIdCard {
  setNumber: (number: number) => void,
  getNumber: () => number
}

export default class IdCard implements IIdCard {

  constructor(private number: number) {}

  getNumber(): number {
    return this.number
  }

  setNumber(number: number): void {
    this.number = number
  }
}