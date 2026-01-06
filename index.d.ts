export declare class Coordinate {
    coordinate: number[];
    constructor(coordinate: number[]);
    zoom(multiple: number): Coordinate;
    static distance(coorArr: [Coordinate, Coordinate]): number;
    add(value: number, dimension?: number): Coordinate;
    clone(): Coordinate;
}
