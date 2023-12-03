import solutions from "./solutions/index.ts"

const [day, part] = Deno.args.map(x => parseInt(x))
console.log(`Day ${day}, Part ${part}`)

const solution = solutions[`d${day}p${part}`]()
console.log(solution)
