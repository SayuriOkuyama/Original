# 業務フロー

[業務フロー(Figma)](https://www.figma.com/file/l51XtXJgiBdSs4HR8aK3JR/%E6%A5%AD%E5%8B%99%E3%83%95%E3%83%AD%E3%83%BC%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88?type=whiteboard&node-id=0%3A1&t=u9WURY1y6iRRRLjd-1)

# 画面遷移図

[画面遷移図(Figma)](https://www.figma.com/file/LmijGVXW3ACflPDjwuYvQ3/%E7%94%BB%E9%9D%A2%E9%81%B7%E7%A7%BB%E5%9B%B3?type=whiteboard&node-id=1%3A1857&t=lTVE9Nx0xtQ4mZaq-1)

# ワイヤーフレーム

[ワイヤーフレーム(Figma)](https://www.figma.com/file/Oyln7YuWtLjIql201aiDXp/%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%BC%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0?type=design&node-id=0%3A1&mode=design&t=rUvqnXZwaEZtptXD-1)

# デザインカンプ

[デザインカンプ(Figma)](https://www.figma.com/file/lQv4Tg7lPTZ5LyoTCeOWJO/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3?type=design&node-id=0%3A1&mode=design&t=mzaQHBohNJZfSliW-1)

[プロトタイプ(Figma)](https://www.figma.com/proto/lQv4Tg7lPTZ5LyoTCeOWJO/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3?page-id=0%3A1&type=design&node-id=1-3&viewport=105%2C290%2C0.3&t=g9HdVMKQ0bFyt4pu-1&scaling=scale-down&starting-point-node-id=1%3A3&show-proto-sidebar=1&mode=design)

# システム構成図

![vegevery drawio](https://github.com/SayuriOkuyama/VegEvery/assets/134520812/96fdb749-a6d0-49ef-bd57-69e782e3b076)

# ER 図

![image](https://github.com/SayuriOkuyama/VegEvery/assets/134520812/568b7e14-eb79-467b-8cec-597c77cdab1a)

# テーブル定義書

### users テーブル

| カラム名                  | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                        | BIGINT       | PK   | true     |              | true                 |
| name                      | VARCHAR(50)  |      | true     |              |                      |
| password                  | VARCHAR(100) |      | true     |              |                      |
| secret_question           | VARCHAR(100) |      | true     |              |                      |
| answer_to_secret_question | VARCHAR(100) |      | true     |              |                      |
| created_at                | date(100)    |      | true     |              |                      |
| updated_at                | date(100)    |      | true     |              |                      |

### user_common_settings テーブル

| カラム名        | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| --------------- | ----------- | ---- | -------- | ------------ | -------------------- |
| id              | BIGINT      | PK   | true     |              | true                 |
| user_id         | BIGINT(50)  | FK   | true     |              |                      |
| vegetarian_type | string(20)  |      | true     |              |                      |
| icon            | string(255) |      | false    |              |                      |
| created_at      | date(100)   |      | true     |              |                      |
| updated_at      | date(100)   |      | true     |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

### articles_of_recipe テーブル

| カラム名        | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| --------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id              | BIGINT       | PK   | true     |              | true                 |
| title           | VARCHAR(50)  |      | true     |              |                      |
| thumbnail       | VARCHAR(255) |      | false    |              |                      |
| cooking_time    | TIME         |      | false    |              |                      |
| number_of_likes | INTEGER      |      | true     | 0            |                      |
| user_id         | BIGINT       | FK   | true     |              |                      |
| material_id     | BIGINT       | FK   | true     |              |                      |
| vege_tag_id     | BIGINT       | FK   | true     |              |                      |
| created_at      | date(100)    |      | true     |              |                      |
| updated_at      | date(100)    |      | true     |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

FOREIGN KEY (material_id) REFERENCES materials(id)

FOREIGN KEY (vege_tag_id) REFERENCES vege_tags(id)

### recipe_steps テーブル

| カラム名             | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| -------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                   | BIGINT       | PK   | true     |              | true                 |
| article_of_recipe_id | BIGINT       | FK   | true     |              |                      |
| order                | INTEGER      |      | true     |              |                      |
| text                 | VARCHAR(255) |      | false    |              |                      |
| image                | VARCHAR(255) |      | false    |              |                      |
| created_at           | date(100)    |      | true     |              |                      |
| updated_at           | date(100)    |      | true     |              |                      |

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id)

### materials テーブル

| カラム名             | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| -------------------- | ----------- | ---- | -------- | ------------ | -------------------- |
| id                   | BIGINT      | PK   | true     |              | true                 |
| article_of_recipe_id | BIGINT      | FK   | true     |              |                      |
| name                 | VARCHAR(50) |      | true     |              |                      |
| quantity             | VARCHAR(20) |      | true     |              |                      |
| unit                 | VARCHAR(20) |      | false    |              |                      |
| created_at           | date(100)   |      | true     |              |                      |
| updated_at           | date(100)   |      | true     |              |                      |

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id)

### articles_of_item テーブル

| カラム名        | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| --------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id              | BIGINT       | PK   | true     |              | true                 |
| thumbnail       | VARCHAR(255) |      | true     |              |                      |
| number_of_likes | INTEGER      |      | true     |              |                      |
| user_id         | BIGINT       | FK   | false    |              |                      |
| vege_tag_id     | BIGINT       | FK   |          |              |                      |
| created_at      | date(100)    |      | true     |              |                      |
| updated_at      | date(100)    |      | true     |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

FOREIGN KEY (vege_tag_id) REFERENCES vege_tags(id)

### items テーブル

| カラム名            | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------- | ----------- | ---- | -------- | ------------ | -------------------- |
| id                  | BIGINT      | PK   | true     |              | true                 |
| articles_of_item_id | BIGINT      | FK   | true     |              |                      |
| name                | INTEGER     |      | true     |              |                      |
| where_to_buy        | VARCHAR(50) |      | false    |              |                      |
| price               | INTEGER     |      |          |              |                      |
| created_at          | date(100)   |      | true     |              |                      |
| updated_at          | date(100)   |      | true     |              |                      |

### reports テーブル

| カラム名            | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                  | BIGINT       | PK   | true     |              | true                 |
| articles_of_item_id | BIGINT       | FK   | true     |              |                      |
| order               | INTEGER      |      | true     |              |                      |
| image               | VARCHAR(225) |      | false    |              |                      |
| text                | VARCHAR(225) |      |          |              |                      |
| created_at          | date(100)    |      | true     |              |                      |
| updated_at          | date(100)    |      | true     |              |                      |

### comments_to_recipe テーブル

| カラム名              | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| --------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                    | BIGINT       | PK   | true     |              | true                 |
| articles_of_recipe_id | BIGINT       | FK   | true     |              |                      |
| number_of_likes       | INTEGER      |      | true     |              |                      |
| user_id               | BIGINT       | FK   | false    |              |                      |
| text                  | VARCHAR(255) |      |          |              |                      |
| created_at            | date(100)    |      | true     |              |                      |
| updated_at            | date(100)    |      | true     |              |                      |

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id)

FOREIGN KEY (user_id) REFERENCES users(id)

### comments_to_item テーブル

| カラム名            | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                  | BIGINT       | PK   | true     |              | true                 |
| articles_of_item_id | BIGINT       | FK   | true     |              |                      |
| number_of_likes     | INTEGER      |      | true     |              |                      |
| user_id             | BIGINT       | FK   | false    |              |                      |
| text                | VARCHAR(255) |      | true     |              |                      |
| created_at          | date(100)    |      | true     |              |                      |
| updated_at          | date(100)    |      | true     |              |                      |

FOREIGN KEY (articles_of_item_id) REFERENCES articles_of_item(id)

FOREIGN KEY (user_id) REFERENCES users(id)

### tags テーブル

| カラム名   | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ---------- | ----------- | ---- | -------- | ------------ | -------------------- |
| id         | BIGINT      | PK   | true     |              | true                 |
| name       | VARCHAR(20) |      | true     |              |                      |
| created_at | date(100)   |      | true     |              |                      |
| updated_at | date(100)   |      | true     |              |                      |

### article_of_recipe_tag テーブル

| カラム名              | データ型  | キー | NOT NULL | デフォルト値 | オートインクリメント |
| --------------------- | --------- | ---- | -------- | ------------ | -------------------- |
| articles_of_recipe_id | BIGINT    | FK   | true     |              |                      |
| tag_id                | BIGINT    | FK   | true     |              |                      |
| created_at            | date(100) |      | true     |              |                      |
| updated_at            | date(100) |      | true     |              |                      |

PRIMARY KEY (articles_of_recipe_id, tag_id),

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id),

FOREIGN KEY (tag_id) REFERENCES tags(id)

### article_of_item_tag テーブル

| カラム名           | データ型  | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------ | --------- | ---- | -------- | ------------ | -------------------- |
| article_of_item_id | BIGINT    | FK   | true     |              |                      |
| tag_id             | BIGINT    | FK   | true     |              |                      |
| created_at         | date(100) |      | true     |              |                      |
| updated_at         | date(100) |      | true     |              |                      |

PRIMARY KEY (article_of_item_id, tag_id),

FOREIGN KEY (articles_of_item_id) REFERENCES article_of_item(id),

FOREIGN KEY (tag_id) REFERENCES tags(id)

### vege_tags テーブル

| カラム名   | データ型  | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ---------- | --------- | ---- | -------- | ------------ | -------------------- |
| id         | BIGINT    | PK   | true     | false        |                      |
| vegan      | BOOLEAN   |      | true     | false        | true                 |
| oriental   | BOOLEAN   |      | true     | false        |                      |
| ovo        | BOOLEAN   |      | true     | false        |                      |
| pesca      | BOOLEAN   |      | true     | false        |                      |
| lacto      | BOOLEAN   |      | true     | false        |                      |
| pollo      | BOOLEAN   |      | true     | false        |                      |
| fruitarian | BOOLEAN   |      | true     | false        |                      |
| other      | BOOLEAN   |      | true     | false        |                      |
| created_at | date(100) |      | true     |              |                      |
| updated_at | date(100) |      | true     |              |                      |

### reviews テーブル

| カラム名     | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------ | ------------ | ---- | -------- | ------------ | -------------------- |
| id           | BIGINT       | PK   | true     |              | true                 |
| display_name | VARCHAR(100) | FK   | true     |              |                      |
| star         | INTEGER      |      | true     |              |                      |
| user_id      | BIGINT       | FK   | true     |              |                      |
| text         | VARCHAR(255) |      | true     |              |                      |
| vege_tag_id  | BIGINT       |      | true     |              |                      |
| created_at   | date(100)    |      | true     |              |                      |
| updated_at   | date(100)    |      | true     |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

### menus テーブル

| カラム名    | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ----------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id          | BIGINT       | PK   | true     |              | true                 |
| review_id   | BIGINT       | FK   | true     |              |                      |
| name        | VARCHAR(100) |      | true     |              |                      |
| price       | INTEGER      |      | true     |              |                      |
| vege_tag_id | BIGINT       | FK   | true     |              |                      |
| created_at  | date(100)    |      | true     |              |                      |
| updated_at  | date(100)    |      | true     |              |                      |

### bookshelves テーブル

| カラム名   | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ---------- | ----------- | ---- | -------- | ------------ | -------------------- |
| id         | BIGINT      | PK   | true     |              | true                 |
| user_id    | BIGINT      | FK   | true     |              |                      |
| name       | VARCHAR(50) |      | true     |              |                      |
| created_at | date(100)   |      | true     |              |                      |
| updated_at | date(100)   |      | true     |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

### favorites テーブル

| カラム名     | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------ | ----------- | ---- | -------- | ------------ | -------------------- |
| bookshelf_id | BIGINT      | FK   | true     |              |                      |
| article_type | VARCHAR(20) |      |          |              |                      |
| article_id   | BIGINT      |      | true     |              |                      |
| created_at   | date(100)   |      | true     |              |                      |
| updated_at   | date(100)   |      | true     |              |                      |

PRIMARY KEY (bookshelf_id, article_type, article_id)

※article_id は、article_type が recipe なら article_of_recipe_id、item なら article_of_item_id と連携したい。条件つきで外部キーとして設定できるか要確認。
