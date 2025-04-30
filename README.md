# 【Udemy講座】お問い合わせフォームアプリ

## 概要
このアプリケーションはNext.jsを使用した問い合わせフォームの実装例です。ユーザーが簡単に問い合わせを送信でき、フォームバリデーション、を備えています。
※本アプリはUdemy講座で作成したアプリです。

## 技術スタック

### フレームワーク
- ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat&logo=next.js&logoColor=white) Next.js - Reactベースのフルスタックフレームワーク
- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black) React - UIコンポーネントライブラリ
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) TypeScript - 型安全な開発環境

### スタイリング
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) Tailwind CSS - ユーティリティファーストのCSSフレームワーク
- ![shadcn/ui](https://img.shields.io/badge/-shadcn%2Fui-000000?style=flat&logo=react&logoColor=white) shadcn/ui - 再利用可能なUIコンポーネントライブラリ

### フォーム管理
- React Hook Form - フォーム状態管理とバリデーション
- Zod - スキーマ検証ライブラリ

### バックエンドサービス
- ![Resend](https://img.shields.io/badge/-Resend-000000?style=flat&logo=mail&logoColor=white) Resend - メール送信APIサービス

## 環境構築手順

### 前提条件
- Node.js 18.0.0以上
- npm, yarn, pnpmまたはbunのいずれか

### セットアップ手順

1. リポジトリをクローン:
```bash
git clone https://github.com/hideaki1979/ud_nextjs_authform.git
cd inquiryform-tutorial
```

2. 依存関係のインストール:
```bash
npm install
# または
yarn
# または
pnpm install
# または
bun install
```

3. 環境変数の設定:
`.env.local`ファイルを作成し、必要な環境変数を設定:
```
RESEND_API_KEY="your RESEND API Key"
NEXT_PUBLIC_BASE="http://localhost:3001"
```

4. 開発サーバーの起動:
```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

5. ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションにアクセス

### 本番環境用ビルド (オプション)

開発以外の環境で実行する場合は、アプリケーションをビルドして最適化されたバージョンを作成します:

```bash
npm run build
# または
yarn build
# または
pnpm build
# または
bun build
```

ビルド後、以下のコマンドで本番環境用サーバーを起動:

```bash
npm run start
# または
yarn start
# または
pnpm start
# または
bun start
```

## ライセンス
MIT ©
