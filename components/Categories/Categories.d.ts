export interface ICategory {
    _id: string
    image: SanityImage
    description: string
    title: string
}

export interface SanityImage {
    _type: string
    asset: SanityAsset
}

export type SanityAsset = {
    _ref: string
    _type: string
}