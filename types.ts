export interface SanityImage {
    _type: string
    asset: SanityAsset
}

export type SanityAsset = {
    _ref: string
    _type: string
}
