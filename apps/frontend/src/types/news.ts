export type News = {
    id: number;
    title: string;
    publishedAt: string; // ISO文字列
    content: string; // HTML文字列（※後述：XSS注意）
    isPublished: boolean;
};
