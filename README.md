hello! it's a coordinate library.
api:
```ts
let a = new Coordinate([2, 4, 0])
a = a.add(1, 0);
console.log(a.coordinate);//[3, 4, 0]
let b = a.clone();//[3, 4, 0]
a.coordinate = [0, 0, 0];
console.log(b.coordinate);//[3, 4, 0]
console.log(Coordinate.distance([a, b]));//5
```
have index.d.ts!!