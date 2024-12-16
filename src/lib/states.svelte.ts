import { squadDimension, type Player, type Teams } from "./constants"




export function createPlayersState() {
    let playersState: Player[] = $state([]);

    try {
        const storedPlayers = localStorage.getItem(`players`);
        if (storedPlayers) {
            playersState = JSON.parse(storedPlayers);
        } else {
            for (let i = 0; i < 12; i++) {
                playersState.push({
                    id: i,
                    name: "",
                    attValue: "-",
                    defValue: "-",
                    tecValue: "-",
                    keeper: false

                });
            }
        }
    } catch (error) {
        for (let i = 0; i < 12; i++) {
            playersState.push({
                id: i,
                name: "",
                attValue: "-",
                defValue: "-",
                tecValue: "-",
                keeper: false

            });
        }
    }


    function updatePlayer(player: Player) {
        const index = playersState.findIndex(p => p.id === player.id);
        if (index !== -1) {
            playersState[index] = player;
        } else {
            playersState.push(player);
        }
        localStorage.setItem(`players`, JSON.stringify(playersState));
    }

    function reset() {
        playersState = [];
        //localStorage.setItem(`players`, JSON.stringify(playersState));
        localStorage.removeItem(`players`);
        location.reload();
    }

    return {
        get value() {
            return playersState;
        },
        updatePlayer,
        reset
    };
}
export function createPlayersStateV2() {
    let playersState: PlayerV2[] = $state([]);

    try {
        const storedPlayers = localStorage.getItem(`playersV2`);
        if (storedPlayers) {
            playersState = JSON.parse(storedPlayers);
        } else {
            for (let i = 0; i < squadDimension; i++) {
                playersState.push({
                    id: i,
                    name: "",
                    stats: {
                        att: [5],
                        def: [5],
                        tec: [5]
                    },
                    isKeeper: false

                });
            }
            localStorage.setItem(`playersV2`, JSON.stringify(playersState));
        }
    } catch (error) {
        for (let i = 0; i < squadDimension; i++) {
            playersState.push({
                id: i,
                name: "",
                stats: {
                    att: [5],
                    def: [5],
                    tec: [5]
                },
                isKeeper: false

            });
        }
        //localStorage.setItem(`playersV2`, JSON.stringify(playersState));
    }


    function updatePlayer(player: PlayerV2) {
        const index = playersState.findIndex(p => p.id === player.id);
        if (index !== -1) {
            playersState[index] = player;
        } else {
            playersState.push(player);
        }
        localStorage.setItem(`playersV2`, JSON.stringify(playersState));
    }

    function reset() {
        playersState = [];
        //localStorage.setItem(`players`, JSON.stringify(playersState));
        localStorage.removeItem(`playersV2`);
        location.reload();
    }

    return {
        get value() {
            return playersState;
        },
        updatePlayer,
        reset
    };
}
export function createTeams() {
    let teams: teams = $state({ team_a: [], team_b: [] });

    try {
        //const storedPlayers = localStorage.getItem(`team_a`);
        const team_a = localStorage.getItem(`team_a`);
        const team_b = localStorage.getItem(`team_b`);

        if (team_a && team_b) {
            teams = { team_a: JSON.parse(team_a), team_b: JSON.parse(team_b) };
        } else {
            for (let i = 0; i < squadDimension; i++) {
                teams.team_a.push({
                    id: i,
                    name: "",
                    stats: {
                        att: [5],
                        def: [5],
                        tec: [5]
                    },
                    isKeeper: false

                });
                teams.team_b.push({
                    id: i,
                    name: "",
                    stats: {
                        att: [5],
                        def: [5],
                        tec: [5]
                    },
                    isKeeper: false

                });
            }
            localStorage.setItem(`team_a`, JSON.stringify(teams.team_a));
            localStorage.setItem(`team_b`, JSON.stringify(teams.team_b));
        }
    } catch (error) {
        for (let i = 0; i < squadDimension; i++) {
            teams.team_a.push({
                id: i,
                name: "",
                stats: {
                    att: [5],
                    def: [5],
                    tec: [5]
                },
                isKeeper: false

            });
            teams.team_b.push({
                id: i,
                name: "",
                stats: {
                    att: [5],
                    def: [5],
                    tec: [5]
                },
                isKeeper: false

            });
        }
        //localStorage.setItem(`team_a`, JSON.stringify(teams.team_a));
        //localStorage.setItem(`team_b`, JSON.stringify(teams.team_b));
    }


    function updatePlayer(player: PlayerV2, team: 'team_a' | 'team_b') {
        const index = teams[team].findIndex(p => p.id === player.id);
        if (index !== -1) {
            teams[team][index] = player;
        } else {
            teams[team].push(player);
        }
        localStorage.setItem(team, JSON.stringify(teams[team]));
    }

    function swapPlayersById(index1: number, index2: number, team: 'team_a' | 'team_b') {
        // Controlla che gli indici siano validi
        if (
            index1 < 0 || index1 >= teams[team].length ||
            index2 < 0 || index2 >= teams[team].length
        ) {
            throw new Error('Gli indici forniti sono fuori dai limiti dell\'teams[team]');
        }

        // Effettua lo scambio
        const temp = teams[team][index1];
        teams[team][index1] = teams[team][index2];
        teams[team][index2] = temp;

        //return teams[team];
    }



    function shuffleTeams() {
        teams.team_a = teams.team_a.sort(() => Math.random() - 0.5);
        teams.team_b = teams.team_b.sort(() => Math.random() - 0.5);
        localStorage.setItem(`team_a`, JSON.stringify(teams.team_a));
        localStorage.setItem(`team_b`, JSON.stringify(teams.team_b));
    }

    function reset() {
        teams = { team_a: [], team_b: [] };
        //localStorage.setItem(`players`, JSON.stringify(teams));
        localStorage.removeItem(`team_a`);
        localStorage.removeItem(`team_b`);
        location.reload();
    }

    return {
        get value() {
            return teams;
        },
        updatePlayer,
        swapPlayersById,
        shuffleTeams,
        reset
    };
}


/* export const players = createPlayersState(); */
/* export const playersV2 = createPlayersStateV2(); */
/* export const teams = createTeams(); */


function createTeamsState() {
    let teamsState: Teams = $state({ team_a: undefined, team_b: undefined });

    const storedTeams = localStorage.getItem(`teams`);
    if (storedTeams) teamsState = JSON.parse(storedTeams);

    function addPlayer(player: Player) {

        teamsState[player.team]?.players.push(player);

    }



    function updateTeams(teams: Teams) {
        teamsState = teams;
        localStorage.setItem(`teams`, JSON.stringify(teams));
    }

    return {
        get value() {
            return teamsState;
        },
        addPlayer,
        updateTeams
    };
}

export const teamsState = createTeamsState();
