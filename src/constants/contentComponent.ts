import { Component, computed, ComputedRef } from 'vue'

import { BooksTable, Description } from '@/components'

const contentComponent: ComputedRef<Component> = computed((): Component => {
    const url: string = window.location.pathname.substring(3)

    return url !== '' ? BooksTable : Description
})

export default contentComponent
