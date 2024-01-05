CREATE TABLE user_data(
    userId varchar(60) unique not null,
    username varchar(30),
    email varchar(60) unique not null,
    password varchar(30) unique not null,
    photo varchar(160) not null
);