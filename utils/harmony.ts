export enum Chord {
    I,
    II,
    IV,
    V,
    VI,
}

export class Harmony {
    constructor(
        public chord: Chord,
        public bas: number,
        public ten: number,
        public alt: number,
        public sop: number,
    ){}
}