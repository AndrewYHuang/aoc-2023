import d1p1 from "./solutions/d1p1.ts"
import d1p2 from "./solutions/d1p2.ts"
import d2p1 from "./solutions/d2p1.ts"

const solutions = {
  d1p1, 
  d1p2,
  d2p1,
} as { [key: string]: () => string };

const [day, part] = Deno.args.map(x => parseInt(x))
console.log(`Day ${day}, Part ${part}`)

const solution = solutions[`d${day}p${part}`]()
console.log(solution)
