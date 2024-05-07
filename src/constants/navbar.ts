import { ref, computed, ComputedRef, Ref } from 'vue'

import { NavbarItemInterface, NavbarItemWithClassInterface } from '@/types'
import { isCurrentUrl } from '@/utils'

const navbarItems: Ref<NavbarItemInterface[]> = ref([
    {
        label: 'Existential',
        url: '/existential',
    },
    {
        label: 'Philosophy',
        url: '/philosophy',
    },
    {
        label: 'Psychology',
        url: '/psychology',
    },
    {
        label: 'Business',
        url: '/business',
    },
])

const itemsWithActiveClass: ComputedRef<NavbarItemInterface[]> = computed(
    (): NavbarItemInterface[] => {
        return navbarItems.value.map(
            (item: NavbarItemInterface): NavbarItemWithClassInterface => {
                return {
                    ...item,
                    class: isCurrentUrl(item.url) ? 'active' : '',
                }
            }
        )
    }
)

export default itemsWithActiveClass
