export const squadDimension = 5;

export const bestFootballers = [
    "Kahn",
    "Nedved",
    "Rummenigge",
    "Matthews",
    "Rivelino",
    "Zola",
    "Lahm",
    "Kubala",
    "Breitner",
    "Figo",
    "Neeskens",
    "Barnes",
    "Hagi",
    "Shilton",
    "Totti",
    "Seedorf",
    "Blokhin",
    "Facchetti",
    "Klinsmann",
    "Suarez",
    "Law",
    "Edwards",
    "Figueroa",
    "Raul",
    "Weah",
    "Canavarro",
    "Altafini",
    "Zanetti",
    "Shevchenko",
    "Kempes",
    "Lineker",
    "Batistuta",
    "Meazza",
    "Passarella",
    "Milla",
    "Banks",
    "Socrates",
    "Schmeichel",
    "Cantona",
    "Desailly",
    "Ibrahimovic",
    "Finney",
    "Del Piero",
    "Meredith",
    "Lampard",
    "Kocsis",
    "Alberto",
    "Scholes",
    "Matthaus",
    "Gerrard",
    "Gullit",
    "Stoickov",
    "Shearer",
    "Yashin",
    "Rivaldo",
    "Zoff",
    "Romario",
    "Pirlo",
    "Kaka",
    "Casillas",
    "Dean",
    "Baggio",
    "Charlton",
    "Gascoigne",
    "Zico",
    "Cafu",
    "Rush",
    "Charles",
    "Beckham",
    "Laudrup",
    "Jairzinho",
    "Giggs",
    "Xavi",
    "Carlos",
    "Van Basten",
    "Dalglish",
    "Moore",
    "Buffon",
    "Iniesta",
    "Baresi",
    "Bergkamp",
    "Muller",
    "Henry",
    "Platini",
    "Euesbio",
    "Garrincha",
    "Puskas",
    "Di Stefano",
    "Maldini",
    "Ronaldinho",
    "Best",
    "Ronaldo",
    "Beckenbauer",
    "Ronaldo",
    "Zidane",
    "Cruyff",
    "Maradona",
    "Pelé",
    "Messi"
];

export const _slots = [
    {
        id: 1,
        location: [3, 13]
    },
    {
        id: 2,
        location: [3, 10]
    },
    {
        id: 3,
        location: [2, 6]
    },
    {
        id: 4,
        location: [4, 6]
    },
    {
        id: 5,
        location: [3, 3]
    }
];

export type Coordinate = {
    x: number,
    y: number
}

/* export type Position = {
    position_number: number
} */

export type Player = {
    name: string;
    team: "team_a" | "team_b";
    position: number;
    stats: {
        att: number;
        def: number;
        tec: number;
    };
};

/* export const coords_5_a_side = {
    diamond: {
        1: {
            x: 3,
            y: 14
        },
        2: {
            x: 3,
            y: 12
        },
        3: {
            x: 2,
            y: 10
        },
        4: {
            x: 4,
            y: 6
        },
        5: {
            x: 3,
            y: 3
        }
    }
} */

export const coords_5_a_side = {
    diamond: {
        team_a: {
            1: {
                x: 1,
                y: 3
            },
            2: {
                x: 3,
                y: 3
            },
            3: {
                x: 4,
                y: 2
            },
            4: {
                x: 4,
                y: 4
            },
            5: {
                x: 6,
                y: 3
            }
        },
        team_b: {
            1: {
                x: 14,
                y: 3
            },
            2: {
                x: 12,
                y: 3
            },
            3: {
                x: 11,
                y: 4
            },
            4: {
                x: 11,
                y: 2
            },
            5: {
                x: 9,
                y: 3
            }
        }
    }
}

export type Teams = {
    team_a: Team | undefined,
    team_b: Team | undefined
}

export type Team = {
    name: string;
    players: Player[];
    stats: {
        att: number;
        def: number;
        tec: number;
    };
}