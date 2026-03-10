<template>
    <div class="home-page">
        <div class="home-page__bg" aria-hidden="true"></div>
        <div class="wrapper">
            <section class="first-view">
                <div class="first-view__content">
                    <img
                        class="first-view__content-img"
                        :class="{ 'is-visible': isVisible }"
                        src="../assets/name-logo.png"
                        alt=""
                    />
                </div>
                <div class="first-view__appear">
                    <p class="appear__text font-en">scroll</p>
                </div>
            </section>
            <NewsSection />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import NewsSection from '../components/organisms/NewsSection.vue';

const isVisible = ref(false);
onMounted(async () => {
    await nextTick();
    isVisible.value = true;
});
</script>
<style scoped>
.wrapper {
    position: relative;
    z-index: 1;
}

.home-page__bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    background-image: url('/firstview-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.first-view {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.first-view__content-img {
    max-width: 50vw;
    height: auto;
    opacity: 0;
    transition: opacity 1000ms ease;
}

.first-view__appear {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
}

.appear__text {
}

.first-view__content-img.is-visible {
    opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
    .first-view__content-img {
        transition: none;
        opacity: 1;
    }
}
</style>
