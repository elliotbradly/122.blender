
export default interface StarBit {
        idx?: string
        id?: number
        battlerName?: string
        characterIndex?: number
        characterName?: string
        classId?: number
        equips?: number[]
        faceIndex?: number
        faceName?: string
        traits?: Trait[]
        initialLevel?: number
        maxLevel?: number
        name?: string
        nickname?: string
        note?: string
        profile?: string
        map?:Map
}

export interface Trait {
        code: number
        dataId: number
        value: number
}

export interface Map {
        idx: number
        x: number
        y: number
}
