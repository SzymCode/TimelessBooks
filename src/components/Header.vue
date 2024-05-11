<template>
    <div class="header">
        <h1 class="page-header">
            <a :href="language == 'en' ? '/en' : '/pl'">Timeless Books</a>
        </h1>
        <div class="languages">
            <a href="/pl" class="language">
                <Image
                    src="/polish.png"
                    :alt="language == 'en' ? 'Polish' : 'Polski'"
                    height="17"
                />
            </a>
            <a href="/en" class="language">
                <Image
                    src="/english.png"
                    :alt="language == 'en' ? 'English' : 'Angielski'"
                    height="17"
                />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { language } from '@/constants'
</script>
