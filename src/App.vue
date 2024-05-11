<template>
    <Header />
    <Navbar />
    <BooksTable v-if="shouldShowBooksTable" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { Header, Navbar, BooksTable } from '@/components'

const shouldShowBooksTable = computed(() => {
    const language = window.location.pathname.substring(3)
    return language !== ''
})
</script>
