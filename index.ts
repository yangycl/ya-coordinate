export class Coordinate {
    constructor(public coordinate: number[]) { }
    zoom(multiple:number){
        return new Coordinate(this.coordinate.map(num => num * multiple));
    }
    static distance(coorArr:[Coordinate, Coordinate]):number{//畢氏定理
        let result:number = 0;
        if(coorArr[0].coordinate.length !== coorArr[1].coordinate.length) throw new Error(`Dimension mismatch: ${coorArr[0].coordinate.length} vs ${coorArr[1].coordinate.length}`)
        for(let i = 0;i<coorArr[0].coordinate.length;i++){
            let unit = ((coorArr[0].coordinate[i] - coorArr[1].coordinate[i]) ** 2);//距離相減就算是負數，平方後絕對是正數
            result += unit;
        }
        return result ** 0.5;
    }
    add(value: number, dimension?: number): Coordinate {
        if(dimension !== undefined) {
            const newCoord = [...this.coordinate];
            newCoord[dimension] = newCoord[dimension] + value;
            return new Coordinate(newCoord);
        } else {
            return new Coordinate(this.coordinate.map(x => x + value));
        }
    }
    clone(){
        return new Coordinate(this.coordinate.slice());
    }
}
const a = new Coordinate([0, 0, 0]);
const b = new Coordinate([3, 4, 0]);

console.log(Coordinate.distance([a, b])); // 5

