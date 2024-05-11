export interface BookInterface {
    author: string
    title: string
    category: string[]
    formattedCategory?: string
    url: string
}

export interface NavbarItemInterface {
    label: string
    url: string
}
export interface NavbarItemWithClassInterface extends NavbarItemInterface {
    class: string
}
