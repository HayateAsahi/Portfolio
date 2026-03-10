<template>
    <router-link :to="to" class="news__list news-link">
        <div class="news-link__meta">
            <time class="news-link__date" :datetime="dateTimeAttr">{{ displayDate }}</time>
        </div>
        <h3 class="news-link__title">{{ item.title }}</h3>
    </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { News } from '../../types/news';

const props = defineProps<{ item: News }>();

const to = computed(() => `/news/${props.item.id}`);

const dateTimeAttr = computed(() => props.item.publishedAt);

// 表示は「YYYY年M月D日」に寄せる（必要ならフォーマット関数化）
const displayDate = computed(() => {
    const d = new Date(props.item.publishedAt);
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    const day = d.getDate();
    return `${y}年${m}月${day}日`;
});
</script>

<style>
.news__list {
    height: 100px;
}

.news__list:nth-child(n + 2) {
    position: relative;
}
.news__list:nth-child(n + 2)::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0;
    left: 0;
    background: #e3e3e3;
}

.news-link {
    display: flex;
    flex-direction: raw;
    gap: 20px;
    padding: 10px 0;
    transition: background-color 0.3s;
}

.news-link__meta {
    display: flex;
    align-items: center;
    width: 200px;
    gap: 12px;
    flex-shrink: 0;
}
.news-link__date {
    color: #333;
    white-space: nowrap;
}

.news-link__title {
    display: flex;
    align-items: center;
}

</style>