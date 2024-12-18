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

export const footballersPics = [
    'https://b.fssta.com/uploads/application/soccer/headshots/711.png',
    'https://b.fssta.com/uploads/application/soccer/headshots/713.png',
    'https://b.fssta.com/uploads/application/soccer/headshots/721.png'
]

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

export type pSlot = {
    position: number,
    team: 'team_a' | 'team_b',
    location: {
        x: number,
        y: number
    }
}

export type Player = {
    name: string;
    team: "team_a" | "team_b";
    position: number;
    stats: {
        att: number[];
        def: number[];
        tec: number[];
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
    diamond: [
        /* placeholder */
        { x: 0, y: 0 },
        /* team_a */
        { x: 1, y: 4 },
        { x: 3, y: 4 },
        { x: 5, y: 2 },
        { x: 5, y: 6 },
        { x: 7, y: 4 },
        /* team_b */
        { x: 9, y: 4 },
        { x: 11, y: 2 },
        { x: 11, y: 6 },
        { x: 13, y: 4 },
        { x: 15, y: 4 }
    ]
};

export const coords_6_a_side = {
    diamond: [
        /* placeholder */
        { x: 0, y: 0 },
        /* team_a */
        { x: 1, y: 4 },
        { x: 3, y: 3 },
        { x: 3, y: 5 },
        { x: 5, y: 6 },
        { x: 5, y: 2 },
        { x: 7, y: 4 },
        /* team_b */
        { x: 9, y: 4 },
        { x: 11, y: 2 },
        { x: 11, y: 6 },
        { x: 13, y: 5 },
        { x: 13, y: 3 },
        { x: 15, y: 4 }
    ]
};

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