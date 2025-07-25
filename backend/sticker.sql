CREATE DATABASE stickers_db;

USE stickers_db;

CREATE TABLE stickers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    character VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    color VARCHAR(7) NOT NULL,
    "defaultText" JSON NOT NULL
);