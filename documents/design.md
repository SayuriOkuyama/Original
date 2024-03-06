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

![image](https://github.com/SayuriOkuyama/VegEvery/assets/134520812/daa72294-b8c0-4f98-9ebc-1430fd6b8470)

# テーブル定義書

### users テーブル

| カラム名                  | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                        | BIGINT       | PK   | true     |              | true                 |
| name                      | VARCHAR(50)  |      | true     |              |                      |
| password                  | VARCHAR(100) |      | true     |              |                      |
| secret_question           | VARCHAR(100) |      | true     |              |                      |
| answer_to_secret_question | VARCHAR(100) |      | true     |              |                      |
| vegetarian_type           | VARCHAR(20)  |      | true     |              |                      |
| icon                      | VARCHAR(255) |      | false    |              |                      |
| created_at                | DATE(100)    |      | true     |              |                      |
| updated_at                | DATE(100)    |      | true     |              |                      |

### articles_of_recipe テーブル

| カラム名            | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                  | BIGINT       | PK   | true     |              | true                 |
| user_id             | BIGINT       | FK   | true     |              |                      |
| title               | VARCHAR(50)  |      | true     |              |                      |
| thumbnail           | VARCHAR(255) |      | false    |              |                      |
| cooking_time        | TIME         |      | false    |              |                      |
| number_of_likes     | INTEGER      |      | true     | 0            |                      |
| servings            | INTEGER      |      | true     |              |                      |
| vegan               | BOOLEAN      |      | true     | false        |                      |
| oriental_vegetarian | BOOLEAN      |      | true     | false        |                      |
| ovo_vegetarian      | BOOLEAN      |      | true     | false        |                      |
| pescatarian         | BOOLEAN      |      | true     | false        |                      |
| lacto_vegetarian    | BOOLEAN      |      | true     | false        |                      |
| pollo_vegetarian    | BOOLEAN      |      | true     | false        |                      |
| fruitarian          | BOOLEAN      |      | true     | false        |                      |
| created_at          | DATE(100)    |      | true     |              |                      |
| updated_at          | DATE(100)    |      | true     |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

FOREIGN KEY (material_id) REFERENCES materials(id)

### recipe_steps テーブル

| カラム名             | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| -------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                   | BIGINT       | PK   | true     |              | true                 |
| article_of_recipe_id | BIGINT       | FK   | true     |              |                      |
| order                | INTEGER      |      | true     |              |                      |
| text                 | VARCHAR(255) |      | false    |              |                      |
| image                | VARCHAR(255) |      | false    |              |                      |
| created_at           | DATE(100)    |      | true     |              |                      |
| updated_at           | DATE(100)    |      | true     |              |                      |

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id)

### materials テーブル

| カラム名             | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| -------------------- | ----------- | ---- | -------- | ------------ | -------------------- |
| id                   | BIGINT      | PK   | true     |              | true                 |
| article_of_recipe_id | BIGINT      | FK   | true     |              |                      |
| name                 | VARCHAR(50) |      | true     |              |                      |
| quantity             | VARCHAR(20) |      | true     |              |                      |
| unit                 | VARCHAR(20) |      | false    |              |                      |
| created_at           | DATE(100)   |      | true     |              |                      |
| updated_at           | DATE(100)   |      | true     |              |                      |

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id)

### articles_of_item テーブル

| カラム名            | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                  | BIGINT       | PK   | true     |              | true                 |
| user_id             | BIGINT       | FK   | false    |              |                      |
| title               | VARCHAR(50)  |      | true     |              |                      |
| thumbnail           | VARCHAR(255) |      | true     |              |                      |
| number_of_likes     | INTEGER      |      | true     |              |                      |
| vegan               | BOOLEAN      |      | true     | false        |                      |
| oriental_vegetarian | BOOLEAN      |      | true     | false        |                      |
| ovo_vegetarian      | BOOLEAN      |      | true     | false        |                      |
| pescatarian         | BOOLEAN      |      | true     | false        |                      |
| lacto_vegetarian    | BOOLEAN      |      | true     | false        |                      |
| pollo_vegetarian    | BOOLEAN      |      | true     | false        |                      |
| fruitarian          | BOOLEAN      |      | true     | false        |                      |
| created_at          | DATE(100)    |      | true     |              |                      |
| updated_at          | DATE(100)    |      | true     |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

### items テーブル

| カラム名           | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------ | ----------- | ---- | -------- | ------------ | -------------------- |
| id                 | BIGINT      | PK   | true     |              | true                 |
| article_of_item_id | BIGINT      | FK   | true     |              |                      |
| name               | VARCHAR(50) |      | true     |              |                      |
| where_to_buy       | VARCHAR(50) |      | false    |              |                      |
| price              | INTEGER     |      |          |              |                      |
| created_at         | DATE(100)   |      | true     |              |                      |
| updated_at         | DATE(100)   |      | true     |              |                      |

FOREIGN KEY (article_of_item_id) REFERENCES articles_of_item(id)

### reports テーブル

| カラム名           | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------ | ------------ | ---- | -------- | ------------ | -------------------- |
| id                 | BIGINT       | PK   | true     |              | true                 |
| article_of_item_id | BIGINT       | FK   | true     |              |                      |
| order              | INTEGER      |      | true     |              |                      |
| image              | VARCHAR(225) |      | false    |              |                      |
| text               | VARCHAR(225) |      |          |              |                      |
| created_at         | DATE(100)    |      | true     |              |                      |
| updated_at         | DATE(100)    |      | true     |              |                      |

FOREIGN KEY (article_of_item_id) REFERENCES articles_of_item(id)

### comments_to_recipe テーブル

| カラム名             | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| -------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                   | BIGINT       | PK   | true     |              | true                 |
| article_of_recipe_id | BIGINT       | FK   | true     |              |                      |
| user_id              | BIGINT       | FK   | false    |              |                      |
| number_of_likes      | INTEGER      |      | true     |              |                      |
| text                 | VARCHAR(255) |      |          |              |                      |
| created_at           | DATE(100)    |      | true     |              |                      |
| updated_at           | DATE(100)    |      | true     |              |                      |

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id)

FOREIGN KEY (user_id) REFERENCES users(id)

### comments_to_item テーブル

| カラム名           | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------ | ------------ | ---- | -------- | ------------ | -------------------- |
| id                 | BIGINT       | PK   | true     |              | true                 |
| article_of_item_id | BIGINT       | FK   | true     |              |                      |
| user_id            | BIGINT       | FK   | false    |              |                      |
| number_of_likes    | INTEGER      |      | true     |              |                      |
| text               | VARCHAR(255) |      | true     |              |                      |
| created_at         | DATE(100)    |      | true     |              |                      |
| updated_at         | DATE(100)    |      | true     |              |                      |

FOREIGN KEY (articles_of_item_id) REFERENCES articles_of_item(id)

FOREIGN KEY (user_id) REFERENCES users(id)

### tags テーブル

| カラム名   | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ---------- | ----------- | ---- | -------- | ------------ | -------------------- |
| id         | BIGINT      | PK   | true     |              | true                 |
| name       | VARCHAR(20) |      | true     |              |                      |
| created_at | DATE(100)   |      | true     |              |                      |
| updated_at | DATE(100)   |      | true     |              |                      |

### article_of_recipe_tag テーブル

| カラム名             | データ型  | キー | NOT NULL | デフォルト値 | オートインクリメント |
| -------------------- | --------- | ---- | -------- | ------------ | -------------------- |
| article_of_recipe_id | BIGINT    | FK   | true     |              |                      |
| tag_id               | BIGINT    | FK   | true     |              |                      |
| created_at           | DATE(100) |      | true     |              |                      |
| updated_at           | DATE(100) |      | true     |              |                      |

PRIMARY KEY (articles_of_recipe_id, tag_id),

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id),

FOREIGN KEY (tag_id) REFERENCES tags(id)

### article_of_item_tag テーブル

| カラム名           | データ型  | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------ | --------- | ---- | -------- | ------------ | -------------------- |
| article_of_item_id | BIGINT    | FK   | true     |              |                      |
| tag_id             | BIGINT    | FK   | true     |              |                      |
| created_at         | DATE(100) |      | true     |              |                      |
| updated_at         | DATE(100) |      | true     |              |                      |

PRIMARY KEY (article_of_item_id, tag_id),

FOREIGN KEY (articles_of_item_id) REFERENCES article_of_item(id),

FOREIGN KEY (tag_id) REFERENCES tags(id)

### reviews テーブル

| カラム名            | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                  | BIGINT       | PK   | true     |              | true                 |
| user_id             | BIGINT       | FK   | true     |              |                      |
| display_name        | VARCHAR(100) |      | true     |              |                      |
| thumbnail           | VARCHAR(255) |      | true     |              |                      |
| star                | INTEGER      |      | true     |              |                      |
| text                | VARCHAR(255) |      | true     |              |                      |
| number_of_likes     | INTEGER      |      | true     |              |                      |
| vegan               | BOOLEAN      |      | true     | false        |                      |
| oriental_vegetarian | BOOLEAN      |      | true     | false        |                      |
| ovo_vegetarian      | BOOLEAN      |      | true     | false        |                      |
| pescatarian         | BOOLEAN      |      | true     | false        |                      |
| lacto_vegetarian    | BOOLEAN      |      | true     | false        |                      |
| pollo_vegetarian    | BOOLEAN      |      | true     | false        |                      |
| fruitarian          | BOOLEAN      |      | true     | false        |                      |
| created_at          | DATE(100)    |      | true     |              |                      |
| updated_at          | DATE(100)    |      | true     |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

### menus テーブル

| カラム名   | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ---------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id         | BIGINT       | PK   | true     |              | true                 |
| review_id  | BIGINT       | FK   | true     |              |                      |
| name       | VARCHAR(100) |      | true     |              |                      |
| price      | INTEGER      |      | true     |              |                      |
| created_at | DATE(100)    |      | true     |              |                      |
| updated_at | DATE(100)    |      | true     |              |                      |

FOREIGN KEY (review_id) REFERENCES reviews(id)

### bookshelves テーブル

| カラム名   | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ---------- | ----------- | ---- | -------- | ------------ | -------------------- |
| id         | BIGINT      | PK   | true     |              | true                 |
| user_id    | BIGINT      | FK   | true     |              |                      |
| name       | VARCHAR(50) |      | true     |              |                      |
| created_at | DATE(100)   |      | true     |              |                      |
| updated_at | DATE(100)   |      | true     |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

### bookshelf_article_of_recipe テーブル

| カラム名             | データ型  | キー | NOT NULL | デフォルト値 | オートインクリメント |
| -------------------- | --------- | ---- | -------- | ------------ | -------------------- |
| bookshelf_id         | BIGINT    | FK   | true     |              |                      |
| article_of_recipe_id | BIGINT    | FK   | true     |              |                      |
| created_at           | DATE(100) |      | true     |              |                      |
| updated_at           | DATE(100) |      | true     |              |                      |

FOREIGN KEY (bookshelf_id) REFERENCES bookshelves(id)
FOREIGN KEY (article_of_recipe_id) REFERENCES articles_of_recipe(id)

### bookshelf_article_of_item テーブル

| カラム名           | データ型  | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------ | --------- | ---- | -------- | ------------ | -------------------- |
| bookshelf_id       | BIGINT    | FK   | true     |              |                      |
| article_of_item_id | BIGINT    | FK   | true     |              |                      |
| created_at         | DATE(100) |      | true     |              |                      |
| updated_at         | DATE(100) |      | true     |              |                      |

FOREIGN KEY (bookshelf_id) REFERENCES bookshelves(id)
FOREIGN KEY (article_of_item_id) REFERENCES articles_of_item(id)
