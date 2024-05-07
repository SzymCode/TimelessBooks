<template>
    <Header />
    <Navbar />
    <Existential v-if="isCurrentUrl('/existential')" />
    <Philosophy v-if="isCurrentUrl('/philosophy')" />
    <Psychology v-if="isCurrentUrl('/psychology')" />
    <Business v-if="isCurrentUrl('/business')" />
</template>

<script setup lang="ts">
import {
    Header,
    Navbar,
    Existential,
    Philosophy,
    Psychology,
    Business,
} from '@/components'
import { isCurrentUrl } from '@/utils'
</script>
