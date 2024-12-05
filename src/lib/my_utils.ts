import { bestFootballers } from "./constants";

export function getRandomFootballer() {
    const randomIndex = Math.floor(Math.random() * bestFootballers.length);
    return bestFootballers[randomIndex];
}

export function mapToRange(a: number, b: number, c: number) {
    if (a < 1 || a > 10 || b < 1 || b > 10 || c < 1 || c > 10) {
        //throw new Error("Input values must be between 1 and 10");
        return -1;
    }
    // Sommiamo i valori di input
    const sum = a + b + c;

    // Calcoliamo il minimo e massimo della somma possibile
    const minSum = 3; // 1 + 1 + 1
    const maxSum = 30; // 10 + 10 + 10

    // Mappiamo la somma nel range 47-99
    const minOutput = 47;
    const maxOutput = 99;

    // Applichiamo la formula di scaling lineare
    return Math.round(((sum - minSum) / (maxSum - minSum)) * (maxOutput - minOutput) + minOutput);
}