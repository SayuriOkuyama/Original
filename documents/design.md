# 業務フロー

[業務フロー(Figma)](https://www.figma.com/file/l51XtXJgiBdSs4HR8aK3JR/%E6%A5%AD%E5%8B%99%E3%83%95%E3%83%AD%E3%83%BC%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88?type=whiteboard&node-id=0%3A1&t=u9WURY1y6iRRRLjd-1)

# 画面遷移図

[画面遷移図(Figma)](https://www.figma.com/file/4WOR2eq1VEiyQqKi37WFO9/%E7%94%BB%E9%9D%A2%E9%81%B7%E7%A7%BB%E5%9B%B3?type=design&node-id=0%3A1&mode=design&t=0LTQ6DmhRcHMp7ws-1)

# ER 図

![VegEvery er](https://github.com/SayuriOkuyama/VegEvery/assets/134520812/54180762-a073-41df-b65d-a5696148e9a5)

# テーブル定義書

users テーブル

| カラム名                  | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                        | BIGINT       | PK   | true     |              | true                 |
| name                      | VARCHAR(50)  |      | true     |              |                      |
| password                  | VARCHAR(100) |      | true     |              |                      |
| secret_question           | VARCHAR(100) |      | true     |              |                      |
| answer_to_secret_question | VARCHAR(100) |      | true     |              |                      |

articles_of_recipe テーブル

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

FOREIGN KEY (user_id) REFERENCES users(id)

FOREIGN KEY (material_id) REFERENCES materials(id)

FOREIGN KEY (vege_tag_id) REFERENCES vege_tags(id)

recepies テーブル

| カラム名             | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| -------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                   | BIGINT       | PK   | true     |              | true                 |
| article_of_recipe_id | BIGINT       | FK   | true     |              |                      |
| step_id              | INTEGER      |      | true     |              |                      |
| text                 | VARCHAR(255) |      | false    |              |                      |
| thumbnail            | VARCHAR(255) |      | false    |              |                      |

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id)

materials テーブル

| カラム名             | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| -------------------- | ----------- | ---- | -------- | ------------ | -------------------- |
| id                   | BIGINT      | PK   | true     |              | true                 |
| article_of_recipe_id | BIGINT      | FK   | true     |              |                      |
| name                 | VARCHAR(50) |      | true     |              |                      |
| quantity             | VARCHAR(20) |      | true     |              |                      |
| unit                 | VARCHAR(20) |      | false    |              |                      |

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id)

articles_of_item テーブル

| カラム名        | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| --------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id              | BIGINT       | PK   | true     |              | true                 |
| name            | VARCHAR(50)  |      | true     |              |                      |
| thumbnail       | VARCHAR(255) |      | true     |              |                      |
| number_of_likes | INTEGER      |      | true     |              |                      |
| user_id         | BIGINT       | FK   | false    |              |                      |
| text            | VARCHAR(255) |      |          |              |                      |
| vege_tag_id     | BIGINT       | FK   |          |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

FOREIGN KEY (vege_tag_id) REFERENCES vege_tags(id)

comments_to_recepi テーブル

| カラム名              | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| --------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                    | BIGINT       | PK   | true     |              | true                 |
| articles_of_recipe_id | BIGINT       | FK   | true     |              |                      |
| number_of_likes       | INTEGER      |      | true     |              |                      |
| user_id               | BIGINT       | FK   | false    |              |                      |
| text                  | VARCHAR(255) |      |          |              |                      |

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id)

FOREIGN KEY (user_id) REFERENCES users(id)

comments_to_item テーブル

| カラム名            | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id                  | BIGINT       | PK   | true     |              | true                 |
| articles_of_item_id | BIGINT       | FK   | true     |              |                      |
| number_of_likes     | INTEGER      |      | true     |              |                      |
| user_id             | BIGINT       | FK   | false    |              |                      |
| text                | VARCHAR(255) |      | true     |              |                      |

FOREIGN KEY (articles_of_item_id) REFERENCES articles_of_item(id)

FOREIGN KEY (user_id) REFERENCES users(id)

tags テーブル

| カラム名 | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| -------- | ----------- | ---- | -------- | ------------ | -------------------- |
| id       | BIGINT      | PK   | true     |              | true                 |
| name     | VARCHAR(20) |      | true     |              |                      |

article_of_recipe_tag テーブル

| カラム名              | データ型 | キー | NOT NULL | デフォルト値 | オートインクリメント |
| --------------------- | -------- | ---- | -------- | ------------ | -------------------- |
| articles_of_recipe_id | BIGINT   | FK   | true     |              |                      |
| tag_id                | BIGINT   | FK   | true     |              |                      |

PRIMARY KEY (articles_of_recipe_id, tag_id),

FOREIGN KEY (article_of_recipe_id) REFERENCES article_of_recipe(id),

FOREIGN KEY (tag_id) REFERENCES tags(id)

article_of_item_tag テーブル

| カラム名           | データ型 | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------------ | -------- | ---- | -------- | ------------ | -------------------- |
| article_of_item_id | BIGINT   | FK   | true     |              |                      |
| tag_id             | BIGINT   | FK   | true     |              |                      |

PRIMARY KEY (article_of_item_id, tag_id),

FOREIGN KEY (articles_of_item_id) REFERENCES article_of_item(id),

FOREIGN KEY (tag_id) REFERENCES tags(id)

vege_tags テーブル

| カラム名   | データ型 | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ---------- | -------- | ---- | -------- | ------------ | -------------------- |
| id         | BIGINT   | PK   | true     | false        |                      |
| vegan      | BOOLEAN  |      | true     | false        | true                 |
| oriental   | BOOLEAN  |      | true     | false        |                      |
| ovo        | BOOLEAN  |      | true     | false        |                      |
| pesca      | BOOLEAN  |      | true     | false        |                      |
| lacto      | BOOLEAN  |      | true     | false        |                      |
| pollo      | BOOLEAN  |      | true     | false        |                      |
| fruitarian | BOOLEAN  |      | true     | false        |                      |
| other      | BOOLEAN  |      | true     | false        |                      |

reviews テーブル

| カラム名      | データ型     | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------- | ------------ | ---- | -------- | ------------ | -------------------- |
| id            | BIGINT       | PK   | true     |              | true                 |
| restaurant_id | BIGINT       | FK   | true     |              |                      |
| star          | INTEGER      |      | true     |              |                      |
| user_id       | BIGINT       | FK   | true     |              |                      |
| text          | VARCHAR(255) |      | true     |              |                      |
| vege_tag_id   | BIGINT       |      | true     |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

※restaurant_id：レストランとの紐づけ方法が未定。Google の情報と連携できるかどうか要確認。

bookshelves テーブル

| カラム名 | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| -------- | ----------- | ---- | -------- | ------------ | -------------------- |
| id       | BIGINT      | PK   | true     |              | true                 |
| user_id  | BIGINT      | FK   | true     |              |                      |
| name     | VARCHAR(50) |      | true     |              |                      |

FOREIGN KEY (user_id) REFERENCES users(id)

favorites テーブル

| カラム名     | データ型    | キー | NOT NULL | デフォルト値 | オートインクリメント |
| ------------ | ----------- | ---- | -------- | ------------ | -------------------- |
| bookshelf_id | BIGINT      |      | true     |              |                      |
| article_type | VARCHAR(20) |      |          |              |                      |
| article_id   | BIGINT      |      | true     |              |                      |

PRIMARY KEY (bookshelf_id, article_type, article_id)

※article_id は、article_type が recipe なら article_of_recipe_id、item なら article_of_item_id と連携したい。条件つきで外部キーとして設定できるか要確認。
