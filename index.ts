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
    project(n:number){
        let coor = this.clone();
        coor.coordinate = coor.coordinate.slice(0, -n);
        return coor;  
    }
    projection(){
        let length = this.coordinate.length - 1;
        let notUse = this.coordinate[length];
        let after = this.clone();
        if(notUse === 0) throw new Error("Cannot project when the last coordinate is 0");
        after.coordinate = after.coordinate.map(x =>x / notUse);
        after.coordinate.pop();
        return after;
    }
}
const a = new Coordinate([0, 0, 0]);
const b = new Coordinate([3, 4, 0]);

console.log(Coordinate.distance([a, b])); // 5

