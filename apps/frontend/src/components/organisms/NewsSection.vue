<template>
    <section class="section news">
        <div class="news__inner">
            <h2 class="section__title font-en">- News -</h2>

            <div v-if="loading">Loading...</div>
            <div v-else-if="error">取得に失敗しました：{{ error }}</div>

            <div v-else class="news__lists">
                <NewsItem v-for="n in limited" :key="n.id" :item="n" />
            </div>

            <button class="button more__btn" type="button" disabled>
                <span class="more__btn__text font-en">View more</span>
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useNews } from '../../composables/useNews';
import NewsItem from '../molecules/NewsItem.vue';

const props = withDefaults(defineProps<{ limit?: number }>(), {
    limit: 3,
});

const { publishedSorted, loading, error, fetchNews } = useNews();

onMounted(() => {
    fetchNews();
});

const limited = computed(() => publishedSorted.value.slice(0, props.limit));
</script>

<style scoped>
.news {
    display: flex;
    justify-content: center;
    position: relative;
    height: 100vh;
    z-index: 1;
    padding-bottom: 150px;
    background-color: #fcfcfc;
}

.news__inner {
    max-width: 70vw;
    margin: 0 auto;
    padding: 0 20px;
}

.news__lists {
    width: 80%;
    margin: 60px auto;
}
</style>
