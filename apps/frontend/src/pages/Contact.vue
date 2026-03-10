<template>
    <div class="section contact">
        <div class="contact__inner">
            <h2 class="section__title font-en">- Contact -</h2>
            <p class="contact__disc">
                Web制作に関するご相談、ご依頼などお気軽にお問い合わせください。
            </p>
            <form action="" class="contact__form">
                <div class="contact__fields">
                    <div class="contact__field form-field">
                        <div class="form-field__head">
                            <label for="your-name" class="form-field__label"
                                >NAME
                                <span class="form-field__tag">＊</span>
                            </label>
                        </div>
                        <div class="form-field__item">
                            <input type="text" name="your-name" id="your-name" class="form-text" />
                        </div>
                    </div>
                    <div class="contact__field form-field">
                        <div class="form-field__head">
                            <label for="your-email" class="form-field__label"
                                >メールアドレス
                                <span class="form-field__tag">＊</span>
                            </label>
                        </div>
                        <div class="form-field__item">
                            <input
                                type="email"
                                name="your-email"
                                id="your-email"
                                class="form-text"
                            />
                        </div>
                    </div>
                    <div class="contact__field form-field">
                        <div class="form-field__head">
                            <span class="form-field__label"
                                >法人/個人の選択
                                <span class="form-field__tag">＊</span>
                            </span>
                        </div>
                        <div class="form-field__item">
                            <div class="form-field__radios">
                                <label class="form-field__radio">
                                    <input
                                        type="radio"
                                        name="type"
                                        class="form-field__radio-input"
                                        checked
                                    />
                                    <span class="form-field__radio-text">法人</span>
                                </label>
                                <label class="form-field__radio">
                                    <input
                                        type="radio"
                                        name="type"
                                        class="form-field__radio-input"
                                    />
                                    <span class="form-field__radio-text">個人</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="contact__field form-field">
                        <div class="form-field__head">
                            <label for="your-message" class="form-field__label"
                                >お問い合わせ内容
                                <span class="form-field__tag">＊</span>
                            </label>
                        </div>
                        <div class="form-field__item">
                            <input
                                name="your-message"
                                id="your-message"
                                cols="30"
                                rows="10"
                                class="form-textarea"
                            />
                        </div>
                    </div>
                    <p class="contact__note"><span>＊</span>は入力必須項目です</p>
                </div>
                <div class="contact__footer">
                    <div class="contact__privacy">
                        <label class="form-checkbox">
                            <input
                                type="checkbox"
                                name="your-privacy"
                                class="form-checkbox__input"
                            />
                            <span class="form-checkbox__text">
                                <a href="" target="_blank">プライバシーポリシー</a
                                >に同意します。</span
                            >
                        </label>
                    </div>
                    <div class="contact-submit">
                        <button type="submit" class="button more__btn">
                            <span class="more__btn__text font-en">送信する</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
.contact {
    display: flex;
    justify-content: center;
}

.contact__inner {
    width: 80vw;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact__disc {
    margin-top: 60px;
}

.contact__form {
    width: 80%;
    margin-block: 60px;
    padding: 60px;
    background: rgb(240, 240, 240);
}

.contact__note {
    font-weight: 600;
    text-align: center;
}

.contact__note span {
    color: #fc0000;
}

.contact__fields {
    text-align-last: left;
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.form-field__label {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 16px;
    height: 32px;
    font-size: 20px;
    font-weight: 600;
}

.form-field__tag {
    color: #fc0000;
    font-size: 10px;
    font-weight: 600;
}

.form-field__item {
    flex-grow: 1;
    font-size: 12px;
}

.form-text {
    width: 100%;
    height: 40px;
    box-sizing: border-box;

    font-size: 16px;
    border: 0;
    background: #fff;

    box-shadow: 5px 6px 16px 0 rgba(96, 96, 96, 0.16);
    transition: border-color 0.3s;
}

.form-text:focus {
    outline: #333 auto 1px;
    box-shadow: 5px 6px 16px 0 rgba(87, 87, 87, 0.5);
}

.form-field__radios {
    display: flex;
    align-items: center;
}

.form-field__radio {
    position: relative;
}

.form-field__radio-input {
    width: 1px;
    height: 1px;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
}

.form-field__radio-input:checked + .form-field__radio-text {
    background: #333;
    color: #fff;
}

.form-field__radio-input:focus + .form-field__radio-text {
    outline: #333 auto 1px;
    box-shadow: 5px 6px 16px 0 rgba(87, 87, 87, 0.5);
}

.form-field__radio-text {
    width: 80px;
    height: 40px;
    display: grid;
    place-items: center;

    font-size: 16px;
    letter-spacing: 0.026px;

    color: #333;
    border: 0;
    background: #fff;

    box-shadow: 5px 6px 16px 0 rgba(96, 96, 96, 0.16);
}

.form-textarea {
    width: 100%;
    height: 122px;
    box-sizing: border-box;

    font-size: 16px;
    background: #fff;
    border: 0;

    box-shadow: 5px 6px 16px 0 rgba(96, 96, 96, 0.16);
    resize: vertical;
    transition: border-color 0.3s;
}

.form-textarea:focus {
    outline: #333 auto 1px;
    box-shadow: 5px 6px 16px 0 rgba(87, 87, 87, 0.5);
}

.contact__footer {
    margin-top: 28px;
}

.contact__privacy {
    text-align: center;
}

.form-checkbox__input {
    width: 1px;
    height: 1px;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
}

.form-checkbox__input:checked + .form-checkbox__text::after {
    opacity: 1;
}

.form-checkbox__input:focus + .form-checkbox__text::before {
    outline: #333 auto 1px;
    box-shadow: 5px 6px 16px 0 rgba(87, 87, 87, 0.5);
}

.form-checkbox__text {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
}

.form-checkbox__text::before,
.form-checkbox__text::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

.form-checkbox__text::before {
    width: 22px;
    height: 22px;
    border: 1px solid #333;
    background: #fff;
}

.form-checkbox__text::after {
    width: 19.414px;
    height: 14.621px;
    left: 1px;
    margin-top: -0.5px;

    background: url(../img/check-icon.png) no-repeat center center / contain;
    opacity: 0;
}

.form-checkbox__text a {
    color: #808080;
    text-decoration: underline;
}

.form-checkbox__text a:hover {
    opacity: 0.6;
}

.contact-submit {
    margin-top: 23px;
    text-align: center;
}
</style>
