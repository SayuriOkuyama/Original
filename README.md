# VegEvery
[ベジタリアン"食"情報サイト VegEvery](https://vegevery.my-raga-bhakti.com/)

## 1.概要

自身のベジタリアンの種類に対応したレシピやレストランを見つけたいあらゆる種類のベジタリアン向けの**VegEvery** (べジェヴリー)という"**食**"の情報サイトです。

ベジタリアンレシピやフード、レストランの情報を投稿・閲覧することができます。

ヴィーガンレシピサイト V-cook とは異なり、ヴィーガン以外のベジタリアンの方も**自分に合った**食の情報を得ることができます。

★キャプチャ

## 2.使用技術
### 言語

- PHP 8.3.4
- JavaScript
- SQL

### フレームワーク

- Laravel Framework 10.46.0 (PHP)
- Next.js 14.1.4 (React 18.2.0)

### ライブラリ

データフェッチ関連

- Axios 1.6.8
- SWR ^2.2.5

UI 全般

- Tailwind CSS 3.3
- CSS Modules
- Shadcn/ui
- React-icons 5.0.1

フォーム関連

- React Hook From 7.51
- Zod ^3.22.4

認証関連

- Laravel/Sanctum ^3.3
- Laravel/Socialite ^5.12
- js-cookie 3.0.5

### データベース

- Postgre SQL 15.6
- 拡張機能: PGroonga (日本語全文検索)
- GUI: Table Plus

### インフラ

Docker 26.0.0
docker-compose 1.29.2
Debian 12
Apache 2.4.57
Vercel (フロントエンド)
AWS (バックエンド)

#### AWS の主な利用サービス

- EC2 (Elastic Compute Cloud)
- Route 53
- S3 (Simple Storage Service)
- CloudFront

### バージョン管理

- Git/GitHub

### CI/CD

- PHP Code Sniffer
- PHP MD
- PHP Stan
- ES Lint ^8
- Prettier ^3.2.5
- GitHub Actions

### 監視ツール

- Sentry

### その他
- Google Map API
- vis.gl/react-google-maps 0.8
他..

## 3.ER 図

## 4.インフラ構成図

## 5.機能一覧
### レシピ・市販フードアイテム情報共通機能
- 記事閲覧
- 記事投稿、編集、削除(ログイン時)
- 各レシピの対応ベジタリアンタイプ表示
- フリーワード検索
- ベジタリアンタイプによるソート機能
- 「いいね」機能(ログイン時)
- 人気投稿順ソート機能
- タグ検索機能
- 記事に対するコメント機能(ログイン時)

### レストランマップ機能
- 現在地表示
- ワード検索によるマップ移動
- マップ範囲の飲食店の表示
- 飲食店のベジクチコミの有無の表示
- 飲食店へのベジクチコミの投稿(ログイン時)
- ベジクチコミのある飲食店の、ベジタリアンタイプの表示
- クチコミにおける、メニューのベジタリアンタイプの表示

### アカウント機能
- アカウント登録・削除
- ログイン・ログアウト機能
- プロフィール編集
- ユーザーの投稿一覧表示
- レシピ・フードアイテム記事のお気に入り保存
- お気に入り記事を整理する本棚機能
