# NeonとDrizzleで作るToDoアプリ完全ガイド！

## YouTube

[!["NeonとDrizzleで作るToDoアプリ完全ガイド！"](https://i.ytimg.com/vi/japtkE5KxFQ/maxresdefault.jpg)](https://youtu.be/japtkE5KxFQ)

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
