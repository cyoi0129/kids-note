# キッズノート

子どもの TODO リストのフロントエンド

# 主要アーキテクチャ

- Next.js
- swr
- msw

## ローカル起動方法

### env ファイルの作成

/sample.env をコピーして.env ファイルを作成

### ローカルインストール

```bash
npm install
```

### ローカル起動

```bash
npm run dev
```

## ビルド

```bash
npm run build
```

## ディレクトリ構成

- src -> ソース
  - app -> ページ・レイアウトファイル
  - components -> 各コンポーネントのファイル
  - services -> データ操作用の各ファイル
  - utils -> 共通のスタイル・型定義など
  - hooks -> 共通 API 原型（useSWR）
  - lib -> 各種ライブラリー
  - types -> グローバルの型定義
  - styles -> グローバルのスタイル定義
