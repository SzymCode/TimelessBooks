import { Ref, ref } from 'vue'

import { BookInterface } from '@/types'
import { english } from './en'
import { polish } from './pl'
import { language } from '@/constants'
import { formatCategories } from '@/utils/'

const books: Ref<BookInterface[]> = ref(language === 'en' ? english : polish)

formatCategories(books)

export default books
