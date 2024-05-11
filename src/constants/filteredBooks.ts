import { computed, ComputedRef } from 'vue'

import { BookInterface } from '@/types'
import { books } from '@/constants'
import { isCurrentUrl } from '@/utils'

const filteredBooks: ComputedRef<BookInterface[]> = computed(() => {
    return books.value.filter((book: BookInterface) => {
        const categories: string[] = book
            .formattedCategory!.split(',')
            .map((category: string) => category.trim())

        return categories.some((category: string) => isCurrentUrl(category))
    })
})

export default filteredBooks
