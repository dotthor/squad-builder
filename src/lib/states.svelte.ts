type Player = {
    id: string,
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
        }
    } catch (error) { }


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
        localStorage.setItem(`players`, JSON.stringify(playersState));
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