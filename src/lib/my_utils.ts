import { bestFootballers } from "./constants";

export function getRandomFootballer() {
    const randomIndex = Math.floor(Math.random() * bestFootballers.length);
    return bestFootballers[randomIndex];
}