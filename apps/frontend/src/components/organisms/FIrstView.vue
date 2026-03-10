<template>
    <section class="first-view">
        <div class="first-view__content">
            <img
                class="first-view__content-img"
                :class="{ 'is-visible': isVisible }"
                src="../../assets/name-logo.png"
                alt=""
            />
        </div>
        <div class="first-view__appear">
            <p class="appear__text">scroll</p>
        </div>
    </section>
</template>

<script></script>

<style>
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
</style>
