import { Ref, ref } from 'vue'

import { BookInterface } from '@/types'

import {
    Aristotle,
    ArthurSchopenhauer,
    BoYinRa,
    CarlGustavJung,
    EckhartTolle,
    GrantCardone,
    JidduKrishnamurti,
    JimRohn,
    RobertGreene,
    SigmundFreud,
    SriRamanaMaharishi,
    SriNisargadattaMaharaj,
    UnknownAuthor,
} from './'

const english: Ref<BookInterface[]> = ref([
    ...Aristotle,
    ...ArthurSchopenhauer,
    ...BoYinRa,
    ...CarlGustavJung,
    ...EckhartTolle,
    ...GrantCardone,
    ...JidduKrishnamurti,
    ...JimRohn,
    ...RobertGreene,
    ...SigmundFreud,
    ...SriRamanaMaharishi,
    ...SriNisargadattaMaharaj,
    ...UnknownAuthor,
])

export default english
