import { Note } from "./note";

export class Interval {
  public readonly degree: number;
  constructor(a: Note, b: Note) {
    this.degree = a.position - b.position;
  }
}
