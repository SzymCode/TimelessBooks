import { Component, computed, ComputedRef } from 'vue'

import { BooksTable, Description } from '@/components'

const contentComponent: ComputedRef<Component> = computed(() =>
    window.location.pathname.substring(3) ? BooksTable : Description
)

export default contentComponent
