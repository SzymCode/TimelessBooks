import { computed, ComputedRef } from 'vue'

import { BookInterface } from '@/types'
import { books } from '@/constants'
import { isCurrentUrl } from '@/utils'

const filteredBooks: ComputedRef<BookInterface[]> = computed(() =>
    books.value.filter((book) =>
        book.formattedCategory
            ?.split(',')
            .some((category) => isCurrentUrl(category.trim()))
    )
)

export default filteredBooks
