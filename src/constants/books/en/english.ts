import { Ref, ref } from 'vue'

import { BookInterface } from '@/types'

import {
    AlanWatts,
    Aristotle,
    ArthurSchopenhauer,
    BoYinRa,
    CarlGustavJung,
    EckhartTolle,
    EmilCioran,
    GrantCardone,
    ItzhakBentov,
    JidduKrishnamurti,
    JimRohn,
    NapoleonHill,
    RalphWaldoEmerson,
    RobertGreene,
    RobertKiyosaki,
    SiddharthaGautama,
    SigmundFreud,
    SriRamanaMaharishi,
    SriNisargadattaMaharaj,
    UnknownAuthor,
} from './'

const english: Ref<BookInterface[]> = ref([
    ...AlanWatts,
    ...Aristotle,
    ...ArthurSchopenhauer,
    ...BoYinRa,
    ...CarlGustavJung,
    ...EckhartTolle,
    ...EmilCioran,
    ...GrantCardone,
    ...ItzhakBentov,
    ...JidduKrishnamurti,
    ...JimRohn,
    ...NapoleonHill,
    ...RalphWaldoEmerson,
    ...RobertGreene,
    ...RobertKiyosaki,
    ...SiddharthaGautama,
    ...SigmundFreud,
    ...SriRamanaMaharishi,
    ...SriNisargadattaMaharaj,
    ...UnknownAuthor,
])

export default english
