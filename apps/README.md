本ポートフォリオでは、ページ数が少なく認証・権限制御を持たないため、
Vue Routerの遅延importを採用し、routerはURLとPageの対応に専念させています。

frontend/
  public/
    favicon.ico
    ogp.png

  src/
    assets/
      images/
      icons/
      styles/
        base.css
        variables.css

    components/
      layout/
        Example.vue

      ui/
        atoms/
          Button.vue
        molecules/
          FormMessage.vue
        organisms/
          ContactForm.vue
          NewsList.vue
        templates/
          DefaultLayout.vue

      news/
        Example.vue

    pages/               # ルーティングで表示される“画面”
      ExamplePage.vue

    router/
      index.ts

    content/             # “更新しやすいデータ置き場”
      news.json

    types/
      news.ts
      contact.ts

    utils/
      validators.ts
      formatters.ts
      constants.ts

    services/            # 外部連携用
      newsService.ts
      contactService.ts

    App.vue
    main.ts



# github チートシート

https://training.github.com/downloads/ja/github-git-cheat-sheet.pdf

① リポジトリをローカルにクローン
└──git clone URL
最初に 1 回だけ行う。github からコピー

② クローンしたディレクトリに移動
└──cd ディレクトリ名
開発作業はこの中

③ 最新状態を取得
└──git pull origin main
main ブランチが最新版か確認・取得しておく

④ ブランチを新規作成して切り替え
└──git checkout -b PF-△△
△△ = 内容
例
Correction: 修正
Update: 更新
Deletion: 削除
add: 追加
improve: 改善
adjust: 調整
debug: デバッグ
docs: ドキュメント整備

⑤ 開発・編集
└──※VS Code 等で編集

⑥ 変更をステージング
└──git add . または git add ファイル名
すべて or 個別に追加

⑦ コミットを作成
└──git commit -m "機能追加の説明"
コミットメッセージは簡潔・英語 or 日本語

⑧ push してリモートに反映
└──git push origin mybranch-name
GitHub 上にプッシュされる

⑨ GitHub で Pull Request 作成
└──GitHub 上でブランチを選び、main に対して PR 作成
レビュワーを指定し、概要と変更点を記載する

⑩（必要があれば）レビュー対応
└──git commit --amend や git push --force
修正後は PR 上に自動反映（force push に注意）

⑪ PR が承認されたらマージ
└──GitHub 上の「Merge」ボタン
必要に応じて Rebase and merge も選択可能

⑫ main を再取得（手元に反映）
└──git checkout main → git pull origin main
main を最新化

⑬ 作業ブランチを削除（任意）
└──git branch -d PF-△△