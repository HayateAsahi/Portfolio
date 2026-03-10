<template>
    <section class="section works">
        <div class="works__inner">
            <h2 class="section__title font-en">- Works -</h2>
            <div class="works__lists">
                <a href="" class="works__list works-link">
                    <div class="works__image">
                        <img src="../assets/site-image.png" alt="" />
                    </div>
                    <div class="works__body">
                        <p class="works__body-title">ポートフォリオサイト</p>
                        <p class="works__body-desc">こちらのポートフォリオサイトを作成しました</p>
                    </div>
                </a>
                <a href="" class="works__list works-link">
                    <div class="works__image">
                        <img src="../assets/site-image.png" alt="" />
                    </div>
                    <div class="works__body">
                        <p class="works__body-title">ポートフォリオサイト</p>
                        <p class="works__body-desc">こちらのポートフォリオサイトを作成しました</p>
                    </div>
                </a>
                <a href="" class="works__list works-link">
                    <div class="works__image">
                        <img src="../assets/site-image.png" alt="" />
                    </div>
                    <div class="works__body">
                        <p class="works__body-title">ポートフォリオサイト</p>
                        <p class="works__body-desc">こちらのポートフォリオサイトを作成しました</p>
                    </div>
                </a>
                <a href="" class="works__list works-link">
                    <div class="works__image">
                        <img src="../assets/site-image.png" alt="" />
                    </div>
                    <div class="works__body">
                        <p class="works__body-title">ポートフォリオサイト</p>
                        <p class="works__body-desc">こちらのポートフォリオサイトを作成しました</p>
                    </div>
                </a>
                <a href="" class="works__list works-link">
                    <div class="works__image">
                        <img src="../assets/site-image.png" alt="" />
                    </div>
                    <div class="works__body">
                        <p class="works__body-title">ポートフォリオサイト</p>
                        <p class="works__body-desc">こちらのポートフォリオサイトを作成しました</p>
                    </div>
                </a>
                <a href="" class="works__list works-link">
                    <div class="works__image">
                        <img src="../assets/site-image.png" alt="" />
                    </div>
                    <div class="works__body">
                        <p class="works__body-title">ポートフォリオサイト</p>
                        <p class="works__body-desc">こちらのポートフォリオサイトを作成しました</p>
                    </div>
                </a>
            </div>
            <button class="button more__btn">
                <span class="more__btn__text font-en">View more</span>
            </button>
        </div>
    </section>
</template>

<style>
.section {
}

.works {
    margin-top: 130px;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
    padding-top: 60px;
    padding-bottom: 150px;
    background-color: #fcfcfc;
}

.works__inner {
    width: 80vw;
}

.works__lists {
    width: 100%;
    margin-block: 60px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 16px;
    row-gap: 60px;
}

.works__list {
}

.works-link {
}

.works__image {
    display: flex;
    justify-content: center;
    background: rgb(240, 240, 240);
    padding: 20px;
    aspect-ratio: 1 / 1;
    box-shadow: 5px 6px 16px 0 rgba(96, 96, 96, 0.16);
    transition: border-color 0.3s;
}

.works__image:hover {
    
}

.works__image img {
    object-fit: contain;
}

.works__body {
    margin-top: 10px;
}

.works__body-title {
}

.works__body-desc {
}
</style>
