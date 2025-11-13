# JP_Stripes Connect 2025

**JP_Stripes Connect 2025** - 日本のStripe開発者向けカンファレンスの公式ウェブサイト。最先端の決済技術とイノベーションについて議論します。

## 🎯 プロジェクト概要

JP_Stripes Connect 2025は、Next.js 15で構築されたシングルページのカンファレンスウェブサイトです。

主な特徴：

- **ダークテーマのインタラクティブデザイン** - カスタムカーソルエフェクト搭載
- **3つのコアテーマ**: 理論、実践、未来
- **日本語ファーストのローカライゼーション** - SEO最適化済み
- **レスポンシブレイアウト** - 全デバイスに最適化
- **イベントカウントダウンタイマー** - 動的コンテンツセクション
- **Cloudflare Workers デプロイメント** - エッジパフォーマンス

## 🚀 技術スタック

- **[Next.js 15](https://nextjs.org)** - App Routerを使用したReactフレームワーク
- **[React 19](https://react.dev)** - UIライブラリ
- **[TypeScript](https://www.typescriptlang.org)** - 型安全な開発
- **[Tailwind CSS 4](https://tailwindcss.com)** - ユーティリティファーストのスタイリング
- **[Cloudflare Workers](https://workers.cloudflare.com)** - エッジデプロイメント
- **[@opennextjs/cloudflare](https://opennext.js.org/cloudflare)** - Cloudflare用Next.jsアダプター
- **Inter Font** - next/fontで最適化

## 📦 はじめに

### 前提条件

- Node.js 20.x 以上
- npm、yarn、pnpm、または bun

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/jp-stripes/jpstripes-connect-2025.git
cd jpstripes-connect-2025

# 依存関係をインストール
npm install
```

### 開発

```bash
# 開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて、開発モードでサイトを表示します。

`src/` ディレクトリ内のファイルを編集すると、ページが自動的に更新されます。

### 利用可能なスクリプト

- `npm run dev` - 開発サーバーを http://localhost:3000 で起動
- `npm run build` - 本番用にアプリケーションをビルド
- `npm run start` - 本番サーバーをローカルで起動
- `npm run lint` - ESLintでコード品質をチェック
- `npm run preview` - ビルドしてWranglerでローカルプレビュー
- `npm run deploy` - ビルドしてCloudflare Workersにデプロイ
- `npm run cf-typegen` - Cloudflare環境用のTypeScript型を生成

## 📁 プロジェクト構造

```
jpstripes-connect-2025/
├── src/
│   └── app/
│       ├── components/          # Reactコンポーネント
│       │   ├── CustomCursor.tsx # インタラクティブカーソルコンポーネント
│       │   ├── Hero.tsx         # メインヒーローセクション
│       │   ├── Themes.tsx       # 3パネルテーマセクション
│       │   ├── Future.tsx       # 未来志向のコンテンツ
│       │   ├── Countdown.tsx    # イベントカウントダウンタイマー
│       │   └── Footer.tsx       # サイトフッター
│       ├── layout.tsx           # メタデータを含むルートレイアウト
│       ├── page.tsx             # ホームページ構成
│       └── globals.css          # Tailwindを使用したグローバルスタイル
├── public/                      # 静的アセット
├── CLAUDE.md                    # Claude Codeプロジェクト指示
├── package.json                 # 依存関係とスクリプト
├── tsconfig.json                # TypeScript設定
├── tailwind.config.ts           # Tailwind CSS設定
├── next.config.ts               # Next.js設定
├── wrangler.toml                # Cloudflare Workers設定
└── README.md                    # このファイル
```

## 🎨 主な機能

### インタラクティブコンポーネント

- **カスタムカーソル**: マウスの動きに追従するスムーズでインタラクティブなカーソル
- **ヒーローセクション**: カンファレンスブランディングを含む目を引くランディングセクション
- **3つのテーマパネル**: 以下を紹介するインタラクティブカード
  - 🧠 **理論**: Stripe APIの基礎知識
  - 💼 **実践**: 実世界での実装例
  - 🚀 **未来**: 次世代の決済の可能性
- **カウントダウンタイマー**: カンファレンス開催日までのリアルタイムカウントダウン
- **レスポンシブフッター**: 連絡先情報とソーシャルリンク

### 国際化

- 主要言語: 日本語
- 日本語SEOメタデータとOpen Graphタグ
- ロケール対応HTMLアトリビュート（`lang="ja"`）
- Interフォントによる日本語タイポグラフィの最適化

### パフォーマンス最適化

- Cloudflare Workersによるエッジデプロイメント
- 静的アセットの最適化
- next/fontによる自動フォント最適化
- Next.js 15 App Routerによるサーバーサイドレンダリング
- 最小限のバンドルサイズのためのTailwind CSS

## 🌐 デプロイメント

### Cloudflare Workers

このプロジェクトはCloudflare Workersへのデプロイ用に設定されています：

```bash
# 本番ビルドをローカルでプレビュー
npm run preview

# Cloudflare Workersにデプロイ
npm run deploy
```

事前に以下を確認してください：
1. Workersが有効なCloudflareアカウント
2. 認証設定済みのWrangler CLI
3. アカウント詳細が正しく設定された `wrangler.toml`

### その他のデプロイメントオプション

Cloudflare向けに最適化されていますが、以下にもデプロイ可能です：
- **Vercel**: ネイティブNext.jsデプロイメントプラットフォーム
- **Netlify**: アダプターを使用してNext.jsをサポート
- **セルフホスティング**: DockerまたはトラディショナルなNode.jsホスティングを使用

## 🛠️ 開発ガイドライン

### TypeScript

プロジェクトはストリクトモードが有効なTypeScriptを使用しています：

```typescript
// パスエイリアスのサポート
import Component from '@/app/components/Component'
```

### スタイリング

プロジェクト全体でTailwind CSS 4を使用：

- ユーティリティファーストアプローチに従う
- デフォルトはダークテーマ
- モバイル/タブレット/デスクトップ用レスポンシブデザインユーティリティ

### コンポーネント構造

コンポーネントはReactのベストプラクティスに従っています：
- TypeScriptを使用した関数コンポーネント
- `'use client'` ディレクティブでマークされたクライアントコンポーネント
- デフォルトはサーバーコンポーネント（App Router）

## 📄 ライセンス

プライベートリポジトリ。全著作権所有。

## 🤝 コントリビューション

これはカンファレンスウェブサイトプロジェクトです。コントリビューションやご質問については、プロジェクトメンテナーにお問い合わせください。

## 📞 サポート

JP_Stripes Connect 2025に関する問題や質問：
- カンファレンスウェブサイトをご覧ください（デプロイ後）
- 運営チームにお問い合わせください
- カンファレンスのソーシャルメディアチャンネルをご確認ください

---

日本のStripe開発者コミュニティのために ❤️ を込めて構築
