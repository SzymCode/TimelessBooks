<template>
    <div class="description-container">
        <h2 class="description">
            {{
                language === 'en'
                    ? 'On this website you will only find recommendations of books that I have personally read and were impressed by'
                    : 'Na tej stronie znajdziesz wyłącznie rekomendacje książek, które osobiście przeczytałem i które zrobiły na mnie wrażenie'
            }}
        </h2>

        <div class="support-us-container">
            <h3 class="support-us">
                {{
                    language === 'en'
                        ? 'Do you want to support me?'
                        : 'Chcesz mnie wesprzeć?'
                }}
            </h3>
            <a href="https://buymeacoffee.com/timeless.books">
                <Image
                    src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?logo=buy-me-a-coffee&logoColor=black"
                    width="120"
                />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { language } from '@/constants'
</script>
