CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  verifyPassword VARCHAR(255) NOT NULL
);


create TABLE products(
  id SERIAL PRIMARY KEY,
  category VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  price INTEGER NOT NULL,
  image VARCHAR(255) NOT NULL
)



create TABLE person(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  profession VARCHAR(255) NOT NULL
)