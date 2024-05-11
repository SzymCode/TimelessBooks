import { ref, computed, ComputedRef } from 'vue'

import { NavbarItemInterface, NavbarItemWithClassInterface } from '@/types'
import { language } from '@/constants'
import { isCurrentUrl } from '@/utils'

const navbarItems = ref<Record<string, NavbarItemInterface[]>>({
    en: [
        { label: 'Existential', url: '/en/existential' },
        { label: 'Philosophy', url: '/en/philosophy' },
        { label: 'Psychology', url: '/en/psychology' },
        { label: 'Business', url: '/en/business' },
    ],
    pl: [
        { label: 'Egzystencjalne', url: '/pl/egzystencjalne' },
        { label: 'Filozofia', url: '/pl/filozofia' },
        { label: 'Psychologia', url: '/pl/psychologia' },
        { label: 'Biznes', url: '/pl/biznes' },
    ],
})

const itemsWithActiveClass: ComputedRef<NavbarItemWithClassInterface[]> =
    computed(() => {
        const currentLanguageItems = navbarItems.value[language]
        return currentLanguageItems.map((item: NavbarItemInterface) => ({
            ...item,
            class: isCurrentUrl(item.url) ? 'active' : '',
        }))
    })

export default itemsWithActiveClass
