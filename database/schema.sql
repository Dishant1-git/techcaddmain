-- TechCADD website — one table for every form on the site.
-- Run this once in MySQL Workbench (File > Open SQL Script… > select this file > click the lightning-bolt Execute button).
-- The database name must match DB_NAME in the .env file.

CREATE DATABASE IF NOT EXISTS techcaddmain
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE techcaddmain;

CREATE TABLE IF NOT EXISTS leads (
  id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
  -- Which form sent it: popup | demo | contact | course | ai-course | training | after-12th
  form       VARCHAR(60)  NOT NULL,
  name       VARCHAR(120) NULL,
  phone      VARCHAR(20)  NOT NULL,
  email      VARCHAR(160) NULL,
  course     VARCHAR(200) NULL,
  location   VARCHAR(100) NULL,
  batch      VARCHAR(100) NULL,
  message    TEXT         NULL,
  -- Page the form was submitted from, e.g. /courses/python
  page_url   VARCHAR(300) NULL,
  created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_leads_created_at (created_at),
  KEY idx_leads_phone (phone)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- See the submissions (newest first):
-- SELECT * FROM leads ORDER BY id DESC;
