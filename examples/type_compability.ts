


interface Vector { x: number; y: number, length: number }
type Point = { x: number; y: number }

let v: Vector = { x: 123, y: 234, length: 123 }
let p: Point = { x: 345, y: 234 }

// Structural Typing (not Nominal) - Duck Typing
p = v

// Covariance
// v = p // Error: Property 'length' is missing 

// p.length // Property 'length' does not exist on type 'Point'

if ('length' in p)  // Narrowing
    (p as Vector).length // Casting


// Contravariance

let calculate: (v: Point, id: string) => void

// calculate = (v: Vector) => { } // Error
// calculate = (v: Point, id:string, x:string) => { } // Error
calculate = () => { }
calculate = (v: Point) => { }
calculate = (v: Point, id: string) => { }
calculate = (v: { x: number }) => { }