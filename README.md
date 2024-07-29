# 【Cloudflare Pages】Neon+Drizzle ORM を使って、TODO アプリを作る（バックエンド編）

## YouTube

[!["【Cloudflare Pages】Neon+Drizzle ORMを使って、TODOアプリを作る（バックエンド編）"](https://i.ytimg.com/vi/tFfUHpv2FUI/maxresdefault.jpg)](https://youtu.be/tFfUHpv2FUI)

## 技術選定

- Bun
- TypeScript
- Next.js
- Tailwind CSS
- Neon
- drizzle ORM
- Cloudflare Pages

## 初期設定

### NodeModule をインストール

```bash
bun install
```

### 環境変数

`.env.example`に、NEONのDATABASE_URLをコピーして、`.env`に変更

```sh:.env.example
DATABASE_URL=<NEON DATABASE URL>
```
