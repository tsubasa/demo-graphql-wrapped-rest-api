REST APIをGraphQLでラップするデモ
-

REST APIをGraphQLでラップしてGraphQLクエリで必要なデータだけを取得するサンプルデモ

## 使い方

1.デモAPIサーバーの立ち上げ
  1. `$ cd demo-rest-api`
  2. `$ yarn install && yarn start`でサーバー立ち上げ(ポートは4001を使用)

2.GraphQLの立ち上げ
  1. `$ cd demo-graphql-wrapped-rest-api`
  2. `$ yarn install && yarn start`でサーバー立ち上げ(ポートは4000を使用)

3.ブラウザから`http://localhost:4000`へアクセス

## サンプルクエリ

アイテムリストを取得

```graphql
{
  items {
    id,
    name,
    price
  }
}
```

アイテムデータに紐付くカテゴリと規格を取得

```graphql
{
  items {
    id,
    name,
    category {
      name
    },
    specs {
      name,
      value {
        value
      }
    }
  }
}
```

IDを指定してアイテムデータを取得

```graphql
{
  item(id: 2) {
    id,
    name,
    category {
      name
    }
  }
}
```
