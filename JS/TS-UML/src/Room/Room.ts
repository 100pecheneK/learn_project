export interface IRoom {
  setNumber: (number: number) => void,
  getNumber: () => number
}

export default class Room implements IRoom {
  constructor(private number: number) {}

  getNumber(): number {
    return this.number
  }

  setNumber(number: number): void {
    this.number = number
  }

}
