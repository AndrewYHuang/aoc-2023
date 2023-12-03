function readInput() {
  return Deno.readTextFileSync("./input/d1").split('\n')
}

function onlyDigits(text: string) {
  return text.split('').filter(x => !!parseInt(x));
}

function calibrationValue(digits: string[]) {
  return parseInt(digits[0] + digits[digits.length - 1]) || 0
}

function sum(p: number, c: number) {
  return p + c;
}

export default function d1p1() {
  return readInput().map(line => calibrationValue(onlyDigits(line))).reduce(sum, 0).toString()
}
