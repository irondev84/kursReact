


interface Vector { x: number; y: number }
type Point = { x: number; y: number }

let v: Vector = { x: 123, y: 234 }
let p: Point = { x: 345, y: 234 }

// Structural Typing (not Nominal) - Duck Typing
v = p
p = v 
