<template>
    <section class="section about">
        <div class="about__inner">
            <div class="profile">
                <h2 class="section__title font-en">- About -</h2>
                <div class="profile__content">
                    <div class="profile__head">
                        <h3 class="profile__name">HAYATE ASAHI</h3>
                        <h4 class="profile__furigana">朝日 颯</h4>
                    </div>
                    <p class="profile__intro">
                        1995年、埼玉県生まれ。妻と猫2匹と暮らしています。<br />
                        コンサルタント事業会社の社内開発部門にてWebアプリケーション開発に従事し、2024年12月に初めて開発案件へ参画後、アプリケーション設計から実装、環境構築まで一貫して担当してきました。<br />
                        これまでに製鉄業向けWebシステム開発や法人向け学習管理システムの開発に携わり、3名チームにおいてリードエンジニアとしてプロジェクト推進を経験しています。要件整理から設計、実装まで主体的に進めることを得意としており、自走力と設計思考を強みとしています。<br />
                        開発においては「本質を理解すること」と「ユーザー視点で考えること」を大切にしています。不明点を曖昧なままにせず正直に向き合い、必要な知識を迅速に吸収して課題解決につなげる姿勢を心がけています。<br />
                        <br />
                        現在は新たな挑戦として、案件応募や営業活動にも力を入れ、0→1で価値を生み出す経験を積んでいます。今後はAI技術を活用した開発やSaaSプロダクトの構築に取り組みながら、フリーランスとしても活動の幅を広げていきたいと考えています。<br />
                        単に依頼された内容を実装するだけでなく、本質的な課題を理解するためのヒアリングを重視し、クライアントと伴走しながら価値の高いプロダクトを共に作り上げるパートナーでありたいと考えています。開発のご相談だけでなく、設計段階からのご支援についてもお気軽にご相談ください。
                    </p>
                </div>
            </div>
            <div class="section skill">
                <h2 class="section__title font-en">- Skill -</h2>
                <div class="skill__lists">
                    <div class="skill__list">
                        <h3 class="skill__head">HTML</h3>
                        <img src="../assets/html-icon.svg" alt="" class="skill__icon" />
                    </div>
                    <div class="skill__list">
                        <h3 class="skill__head">HTML</h3>
                        <img src="../assets/html-icon.svg" alt="" class="skill__icon" />
                    </div>
                    <div class="skill__list">
                        <h3 class="skill__head">HTML</h3>
                        <img src="../assets/html-icon.svg" alt="" class="skill__icon" />
                    </div>
                    <div class="skill__list">
                        <h3 class="skill__head">HTML</h3>
                        <img src="../assets/html-icon.svg" alt="" class="skill__icon" />
                    </div>
                    <div class="skill__list">
                        <h3 class="skill__head">HTML</h3>
                        <img src="../assets/html-icon.svg" alt="" class="skill__icon" />
                    </div>
                    <div class="skill__list">
                        <h3 class="skill__head">HTML</h3>
                        <img src="../assets/html-icon.svg" alt="" class="skill__icon" />
                    </div>
                    <div class="skill__list">
                        <h3 class="skill__head">HTML</h3>
                        <img src="../assets/html-icon.svg" alt="" class="skill__icon" />
                    </div>
                    <div class="skill__list">
                        <h3 class="skill__head">HTML</h3>
                        <img src="../assets/html-icon.svg" alt="" class="skill__icon" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script></script>

<style>
.about {
    display: flex;
    justify-content: center;
}

.about__inner {
    width: 68vw;
    max-width: 1440px;
}

.profile {
    margin-block: 60px;
}

.profile__content {
    margin-block: 80px;
}

.profile__head {
    margin-bottom: 48px;
}

.profile__name {
    font-size: 4vw;
    font-weight: 700;
    line-height: 1.4;
}

.profile__furigana {
    font-size: 2vw;
}

.profile__intro {
    font-size: 1vw;
    line-height: 1.8;
}

.skill {
}

.skill__lists {
    width: 100%;
    margin-block: 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 120px));
    justify-content: center;
    gap: 32px 30px;
    margin-inline: auto;
}

.skill__list {
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
}

.skill__icon {
    width: 100%;
    height: auto;
}

@media (min-width: 980px) {
    .skill__lists {
        max-width: calc(120px * 5 + 30px * 4);
    }
}
</style>
