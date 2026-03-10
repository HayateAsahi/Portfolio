import { ref, computed } from 'vue';
import type { News } from '@/types/news';

export function useNews() {
    const items = ref<News[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const publishedSorted = computed(() => {
        // ① 公開中だけ
        // ② publishedAt 降順
        return items.value
            .filter((n) => n.isPublished)
            .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
    });

    async function fetchNews() {
        loading.value = true;
        error.value = null;
        try {
            const res = await fetch('/news.json', { cache: 'no-store' });
            if (!res.ok) throw new Error(`Failed to fetch news.json (${res.status})`);
            const data = (await res.json()) as News[];
            items.value = data;
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'Unknown error';
        } finally {
            loading.value = false;
        }
    }

    function getById(id: number) {
        return publishedSorted.value.find((n) => n.id === id) ?? null;
    }

    return { items, publishedSorted, loading, error, fetchNews, getById };
}
