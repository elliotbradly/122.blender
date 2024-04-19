
export default interface StarBit {
        idx?: string
        id?: number
        dex?:number
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
        map?:number
        xpos?:number
        ypos?:number
}

export interface Trait {
        code: number
        dataId: number
        value: number
}


