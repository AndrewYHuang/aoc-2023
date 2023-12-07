interface Turn {
  red: number;
  green: number;
  blue: number;
}
interface Game {
  id: string;
  turns: Turn[];
}

function readInputLines() {
  return Deno.readTextFileSync("./input/d2").split('\n').filter(line => !!line)
}

function parseGame(line: string): Game {
  const match = /Game (?<id>[0-9]+):(?<gameString>.*)/g.exec(line)
  const { id, gameString } = match?.groups ?? (() => { throw new Error(`no match on line: ${ line }`) })();
  const turns = gameString.split(';').map(parseTurn)
  return { id, turns }
}

function parseTurn(turn: string): Turn {
  const colors = ['red', 'green', 'blue'];
  const [red, green, blue] = colors.map(color => parseInt( new RegExp(`([0-9]+) ${color}`).exec(turn)?.[0] ?? '0'))
  return { red, green, blue }
}

function max(a: number, b: number) {
  return a > b ? a : b
}

function turnVectorMax(a: Turn, b: Turn) {
  return {
    red: max(a.red, b.red),
    green: max(a.green, b.green),
    blue: max(a.blue, b.blue),
  }
}

function gameMaxCubes({turns}: Game) {
  return turns.reduce(turnVectorMax)
}

function powerSet(a: Turn) {
  return a.red * a.green * a.blue
}

function sum(a: number, b: number) { return a + b }

function solution() {
  const games = readInputLines().map(parseGame)
  const minCubes = games.map(gameMaxCubes)
  return minCubes.map(powerSet).reduce(sum)
}

export default solution
