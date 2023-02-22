// export interface cell {
//     coordinates: coordinates,
//     condition: condition,
//     apple: boolean
// }

export interface playingField {
    sizes: {
        x: number,
        y: number
    },
}

export interface partSnake {
    coordinates: coordinates,
    head: boolean,
    position: number
}

export type coordinates = { x: number, y: number }

export type condition = "free" | "occupied";