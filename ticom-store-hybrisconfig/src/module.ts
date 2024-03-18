export function add(numbers: string) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a + b)
}
