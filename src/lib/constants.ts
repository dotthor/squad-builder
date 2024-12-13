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

export type Player = {
    name: string;
    position: number;
};

export const coords_5_a_side = {
    diamond: {
        1: {
            x: 3,
            y: 13
        },
        2: {
            x: 3,
            y: 10
        },
        3: {
            x: 2,
            y: 6
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
}