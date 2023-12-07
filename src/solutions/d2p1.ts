import Compose from "../tools/compose.ts";

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
  const { id, gameString } = match?.groups ?? (() => {
    throw new Error(`no match on line: ${ line }`)
  })();
  const turns = gameString.split(';').map(parseTurn)
  return { id, turns }
}

function parseTurn(turn: string): Turn {
  const colors = ['red', 'green', 'blue'];
  const [red, green, blue] = colors.map(color => parseInt( new RegExp(`([0-9]+) ${color}`).exec(turn)?.[0] ?? '0'))
  return { red, green, blue }
}

function isValidGame(game: Game) {
  return !game.turns.find(isInvalidTurn)
}

function isInvalidTurn(turn: Turn) {
  return turn.red > 12 || turn.green > 13 || turn.blue > 14 
}

function sum(a: number, b: number) { return a + b }

function solution() {
  const games = readInputLines().map(parseGame)
  const possibleGames = games.filter(isValidGame)
  return possibleGames.map(game => parseInt(game.id)).reduce(sum)
}

export default solution
