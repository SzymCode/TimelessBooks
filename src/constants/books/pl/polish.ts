import { Ref, ref } from 'vue'

import { BookInterface } from '@/types'

import {
    Aristotle,
    ArthurSchopenhauer,
    BoYinRa,
    CarlGustavJung,
    EckhartTolle,
    EmilCioran,
    GrantCardone,
    JidduKrishnamurti,
    JimRohn,
    RalphWaldoEmerson,
    RobertGreene,
    RobertKiyosaki,
    SigmundFreud,
    SriRamanaMaharishi,
    SriNisargadattaMaharaj,
    UnknownAuthor,
} from './'

const polish: Ref<BookInterface[]> = ref([
    ...Aristotle,
    ...ArthurSchopenhauer,
    ...BoYinRa,
    ...CarlGustavJung,
    ...EckhartTolle,
    ...EmilCioran,
    ...GrantCardone,
    ...JidduKrishnamurti,
    ...JimRohn,
    ...RalphWaldoEmerson,
    ...RobertGreene,
    ...RobertKiyosaki,
    ...SigmundFreud,
    ...SriRamanaMaharishi,
    ...SriNisargadattaMaharaj,
    ...UnknownAuthor,
])

export default polish
