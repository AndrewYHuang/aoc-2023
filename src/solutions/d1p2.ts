function readInput() {
  return Deno.readTextFileSync("./input/d1").split('\n')
}

function onlyDigits(text: string) {
  return text.split('').map(x => parseInt(x) || undefined);
}

function addVector(a: Array<number|undefined>, b: Array<number|undefined>) {
 return a.map((e,i) => (!e && !b[i]) ? undefined : (e || 0) + (b[i] || 0))
}

function parseTextDigits(text: string) {
  const digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const indicies = digits.map((digit, value) => text.split('')
         .map((_value, index, array) => ( array.slice(index, index + digit.length).join('') === digit ) ? value + 1 : undefined))
  const numbers = indicies.reduce((prev, curr) => addVector(curr,prev));
  return numbers
}

function calibrationValue(digits: string[]) {
  return parseInt(digits[0] + digits[digits.length - 1]) || 0
}

function sum(p: number, c: number) {
  return p + c;
}

function addNNumbers(n: number) {
  return function (numbers: number[]) {
    let agg = 0
    for(let i = 0; i < n; i++) {
      agg += numbers[i]
    }
    return agg
  }
}

function matchWord(word: string) {
  return function (a: string) {
    return a === word
  }
}

function main() {
  const words = ["a"]
  words.filter(matchWord("Apple"))
}

export default function d1p2() {
  const answer = readInput().map(input => {
    const merged = addVector(parseTextDigits(input), onlyDigits(input));
    const filtered = merged.filter((x) => x !== undefined).map(x => x!.toString())
    const calibrated = calibrationValue(filtered)
    return calibrated
  }).reduce(sum)
  return answer.toString()
}
