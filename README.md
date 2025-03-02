# 【Cloudflare Pages】Neon DB+Drizzle ORM を使って、TODO アプリを作る（フロントエンド編）

## YouTube

[!["【Cloudflare Pages】Neon DB+Drizzle ORMを使って、TODOアプリを作る（フロントエンド編）"](https://i.ytimg.com/vi/japtkE5KxFQ/maxresdefault.jpg)](https://youtu.be/japtkE5KxFQ)

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

`.env.example`に、NEONの`DATABASE_URL`をコピーして、`.env`に変更

```sh:.env.example
DATABASE_URL=<NEON DATABASE URL>
```
