<template>
    <Menubar class="navbar" :model="itemsWithActiveClass" breakpoint="0" />
</template>

<script setup lang="ts">
import { itemsWithActiveClass } from '@/constants'
</script>
