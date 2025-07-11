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
    FriedrichNietzsche,
    GrantCardone,
    ItzhakBentov,
    JidduKrishnamurti,
    JimRohn,
    NapoleonHill,
    NicolloMachiavelli,
    RalphWaldoEmerson,
    RobertGreene,
    RobertKiyosaki,
    SiddharthaGautama,
    SigmundFreud,
    SriRamanaMaharishi,
    SriNisargadattaMaharaj,
    UnknownAuthor,
} from './'

const polish: Ref<BookInterface[]> = ref([
    ...AlanWatts,
    ...Aristotle,
    ...ArthurSchopenhauer,
    ...BoYinRa,
    ...CarlGustavJung,
    ...EckhartTolle,
    ...EmilCioran,
    ...FriedrichNietzsche,
    ...GrantCardone,
    ...ItzhakBentov,
    ...JidduKrishnamurti,
    ...JimRohn,
    ...NapoleonHill,
    ...NicolloMachiavelli,
    ...RalphWaldoEmerson,
    ...RobertGreene,
    ...RobertKiyosaki,
    ...SiddharthaGautama,
    ...SigmundFreud,
    ...SriRamanaMaharishi,
    ...SriNisargadattaMaharaj,
    ...UnknownAuthor,
])

export default polish
