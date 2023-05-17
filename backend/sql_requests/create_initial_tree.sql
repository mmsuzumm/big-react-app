CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    "password" TEXT NOT NULL,
    "role" INT NOT NULL,
    theme INT NOT NULL,
    is_active BOOL NOT NULL DEFAULT true
);

CREATE INDEX idx_users_email ON users (email);
CREATE INDEX idx_users_phone ON users (phone);
CREATE INDEX idx_users_username ON users (username);

-- Создание таблицы "themes"
CREATE TABLE IF NOT EXISTS themes (
    id SERIAL PRIMARY KEY,
    theme VARCHAR(50) UNIQUE
);
INSERT INTO themes (id, theme) VALUES (0, 'default');

-- Создание таблицы "themes"
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
	role VARCHAR(50) UNIQUE
);
INSERT INTO roles (id, "role") VALUES (0, 'Admin'), (1, 'User');


-- Добавление внешнего ключа для столбца "theme"
ALTER TABLE users
ADD CONSTRAINT fk_theme
FOREIGN KEY (theme) REFERENCES themes (id)
ON UPDATE CASCADE;

-- Добавление внешнего ключа для столбца "role"
ALTER TABLE users
ADD CONSTRAINT fk_role
FOREIGN KEY ("role") REFERENCES roles (id)
ON UPDATE CASCADE;

-- Изменение столбца "theme" и "role" с добавлением значений по умолчанию
ALTER TABLE users
ALTER COLUMN theme SET DEFAULT 0,
ALTER COLUMN "role" SET DEFAULT 1;