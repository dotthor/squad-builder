type Player = {
    id: number,
    name: string,
    attValue: string,
    defValue: string,
    tecValue: string,
    keeper: boolean
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

export const players = createPlayersState();