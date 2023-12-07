import d1p1 from "./solutions/d1p1.ts"
import d1p2 from "./solutions/d1p2.ts"
import d2p1 from "./solutions/d2p1.ts"

const solutions = {
  d1p1, 
  d1p2,
  d2p1,
} as { [key: string]: () => string | number };

let [day, part] = Deno.args.map(x => parseInt(x))

if (!(day && part)) {
  day = parseInt(prompt("Please enter day:") ?? (() => {throw new Error("No day set")})())
  part = parseInt(prompt("Please enter part:") ?? (() => {throw new Error("No day set")})())
}

console.log(`Day ${day}, Part ${part}`)

const solution = solutions[`d${day}p${part}`]()
console.log(solution)
