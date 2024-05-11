import { BookInterface } from '@/types'
import { Ref } from 'vue'

export default function formatCategories(books: Ref<BookInterface[]>): void {
    books.value.forEach((book: BookInterface): void => {
        book.formattedCategory = book.category
            .join(', ')
            .replace(/"/g, '')
            .trim()
    })
}
