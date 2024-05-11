<template>
    <Header />
    <Navbar />
    <component :is="contentComponent" />
</template>

<script setup lang="ts">
import { contentComponent } from '@/constants'
import { Header, Navbar } from '@/components'
</script>
