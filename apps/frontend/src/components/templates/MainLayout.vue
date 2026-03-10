<template>
    <div class="layout">
        <header class="header">
            <div class="header__inner">
                <RouterLink to="/" class="header__logo">
                    <img class="header__logo-img" src="../../assets/header-logo.png" alt="" />
                </RouterLink>

                <nav class="header__nav font-en">
                    <RouterLink to="/" class="nav__link">News</RouterLink>
                    <RouterLink to="/works" class="nav__link">Works</RouterLink>
                    <RouterLink to="/about" class="nav__link">About</RouterLink>
                    <RouterLink to="/contact" class="nav__link">Contact</RouterLink>
                </nav>
            </div>
        </header>

        <main class="main">
            <RouterView />
        </main>

        <footer class="footer">
            <div class="container footer__inner">
                <small class="footer__text font-en">© {{ new Date().getFullYear() }} Hayate</small>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style>
.layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow:hidden;
    position: relative;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 50px;
    z-index: 99;
}

.header__inner {
    height: var(--header-h);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* logo */
.header__logo {
    font-weight: 650;
    letter-spacing: -0.02em;
    text-decoration: none;
    color: var(--text);
    transition:
        opacity 0.5s ease,
        background 0.15s ease,
        color 0.15s ease;
}

.header__logo-img {
    width: 60px;
    max-width: 5vw;
}

/* nav */
.header__nav {
    display: flex;
    gap: 45px;
    align-items: center;
}

.nav__link {
    font-size: 1.4vw;
    font-weight: 700;
    color: var(--muted);
    margin: 8px 10px;
    border-radius: 10px;
    transition:
        opacity 0.5s ease,
        background 0.15s ease,
        color 0.15s ease;
}

.nav__link:hover {
    color: var(--text);
    background: var(--surface);
}

/* main */
.main {
    flex: 1;
}

.container {
    margin: 0 100px;
}

/* footer */
.footer {
    position: absolute;
    width: 101%;
    bottom: 0px;
    border-top: 1px solid var(--border);
    padding: 12px 0;
    background: #333;
    color: #fcfcfc;
    z-index: 99;
}

.footer__inner {
    height: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer__text {
    font-size: 1vw;
}
</style>
