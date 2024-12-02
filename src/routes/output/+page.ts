import { players } from '$lib/states.svelte';
import type { PageLoad } from './$types';

export const load = (async () => {

    // Esecuzione
    const teams = generateTeams(players.value);

    if (teams) {
        console.log("Squadra 1:", teams.team1);
        console.log("Squadra 2:", teams.team2);
        return { teams };
    } else {
        console.log("Non è stato possibile generare squadre equilibrate.");
        return { error: "Non è stato possibile generare squadre equilibrate." };
    }

    return {};
}) satisfies PageLoad;

type Player = {
    id: string;
    name: string;
    attValue: string; // Valore come stringa
    defValue: string;
    tecValue: string;
    keeper: boolean; // true se è portiere
};

/* const players: Player[] = [
    { id: "player_1", name: "Benny", attValue: "7", defValue: "4", tecValue: "8", keeper: false },
    { id: "player_2", name: "Alex", attValue: "6", defValue: "5", tecValue: "7", keeper: false },
    { id: "player_3", name: "Chris", attValue: "3", defValue: "9", tecValue: "5", keeper: true },
    { id: "player_4", name: "Jordan", attValue: "4", defValue: "8", tecValue: "6", keeper: true },
    // Aggiungi altri giocatori
]; */

// Funzione per convertire i valori stringa in numeri
function parsePlayerValues(player: Player): { att: number; def: number; tec: number } {
    return {
        att: parseInt(player.attValue, 10),
        def: parseInt(player.defValue, 10),
        tec: parseInt(player.tecValue, 10),
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

// Genera squadre rispettando il vincolo dei portieri
function generateTeams(players: Player[]): { team1: Player[]; team2: Player[] } | null {
    const keepers = players.filter((player) => player.keeper);
    const fieldPlayers = players.filter((player) => !player.keeper);

    if (keepers.length !== 2) {
        throw new Error("Ci devono essere esattamente 2 portieri.");
    }

    const combinations = combine(fieldPlayers, 5); // 5 giocatori di campo per squadra
    let bestDifference = Infinity;
    let bestTeams: { team1: Player[]; team2: Player[] } | null = null;

    for (const team1Field of combinations) {
        const team1 = [keepers[0], ...team1Field];
        const team2 = [keepers[1], ...fieldPlayers.filter((player) => !team1Field.includes(player))];

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

    return bestTeams;
}


