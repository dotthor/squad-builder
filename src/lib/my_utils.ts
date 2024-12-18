import { bestFootballers, type Player } from "./constants";

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

// Funzione per convertire i valori stringa in numeri
function parsePlayerValues(player: Player): { att: number; def: number; tec: number } {
    return {
        att: player.stats.att[0],
        def: player.stats.def[0],
        tec: player.stats.tec[0],
    };
}

// Funzione per calcolare il punteggio totale di una squadra
function calculateScore(team: Player[]): { attack: number; defense: number; technique: number } {
    return team.reduce(
        (acc, player) => {
            const { att, def, tec } = parsePlayerValues(player);
            return {
                attack: acc.attack + att,
                defense: acc.defense + def,
                technique: acc.technique + tec,
            };
        },
        { attack: 0, defense: 0, technique: 0 }
    );
}

// Genera tutte le combinazioni di giocatori
function combine<T>(array: T[], length: number): T[][] {
    if (length === 0) return [[]];
    if (array.length === 0) return [];
    const [head, ...tail] = array;
    const withHead = combine(tail, length - 1).map((c) => [head, ...c]);
    const withoutHead = combine(tail, length);
    return withHead.concat(withoutHead);
}


export function generateTeams(players: Player[]): Player[] | null {
    /* const keepers = players.filter((player) => player.keeper);
    const fieldPlayers = players.filter((player) => !player.keeper);

    if (keepers.length !== 2) {
        //throw new Error("Ci devono essere esattamente 2 portieri.");
        return null;
    } */

    const combinations = combine(/* fieldPlayers */players, 5); // 5 giocatori di campo per squadra
    let bestDifference = Infinity;
    let bestTeams: { team1: Player[]; team2: Player[] } | null = null;

    for (const team1Field of combinations) {
        const team1 = [/* keepers[0], */ ...team1Field];
        const team2 = [/* keepers[1], */ .../* fieldPlayers */players.filter((player) => !team1Field.includes(player))];

        const score1 = calculateScore(team1);
        const score2 = calculateScore(team2);

        const difference =
            Math.abs(score1.attack - score2.attack) +
            Math.abs(score1.defense - score2.defense) +
            Math.abs(score1.technique - score2.technique);

        if (difference < bestDifference) {
            bestDifference = difference;
            bestTeams = { team1, team2 };
        }
    }

    let newActivePlayers = bestTeams?.team1.map((player, index) => {
        return { ...player, team: 'team_a', position: index + 1 };
    });
    newActivePlayers = newActivePlayers?.concat(bestTeams?.team2?.map((player, index) => {
        return { ...player, team: 'team_b', position: index + 6 };
    }) ?? []);

    console.log(newActivePlayers);
    return newActivePlayers;
}


