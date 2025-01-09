import { ref, computed } from 'vue'

import { language } from '@/constants'
import { isCurrentUrl } from '@/utils'

const navbarItems = ref<Record<string, [string, string][]>>({
    en: [
        ['Existential', '/en/existential'],
        ['Philosophy', '/en/philosophy'],
        ['Psychology', '/en/psychology'],
        ['Business', '/en/business'],
    ],
    pl: [
        ['Egzystencjalne', '/pl/egzystencjalne'],
        ['Filozofia', '/pl/filozofia'],
        ['Psychologia', '/pl/psychologia'],
        ['Biznes', '/pl/biznes'],
    ],
})

export default computed(() =>
    navbarItems.value[language].map(([label, url]) => ({
        label,
        url,
        class: isCurrentUrl(url) ? 'active' : '',
    }))
)
