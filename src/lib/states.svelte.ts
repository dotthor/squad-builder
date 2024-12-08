import { squadDimension } from "./constants"

type Player = {
    id: number,
    name: string,
    attValue: string,
    defValue: string,
    tecValue: string,
    keeper: boolean
}
type PlayerV2 = {
    id: number,
    name: string,
    stats: {
        att: number[],
        def: number[],
        tec: number[]
    },
    isKeeper: boolean
}

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

export const players = createPlayersState();
export const playersV2 = createPlayersStateV2();