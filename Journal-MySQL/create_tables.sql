-- Run this file for all tables necessary

-- UNCOMMENT LINE 4 IF DATABASE NOT IN SYSTEM
-- create database journal;

drop table if exists users;
drop table if exists journals;
drop table if exists tags;
drop table if exists entries;
drop table if exists prompts;
drop table if exists prompt_tags;
drop table if exists user_tags;

-- Users
create table users(
    id varchar(10) primary key,
    username varchar(10) not null,
    password varchar(50) not null
);

-- Creative Writing
create table journals(
    id varchar(10) primary key,
    name varchar(50) not null,
    user_id varchar(10) not null,
    foreign key (user_id) references users(id)
);

create table tags(
    id serial primary key,
    name varchar(20) not null
);

create table prompts(
    id serial primary key,
    prompt varchar(100) not null
);

create table prompt_tag(
    prompt_id int not null,
    tag_id int not null,
    foreign key (prompt_id) references prompts(id),
    foreign key (tag_id) references tags(id)
);

create table entries(
    prompt_id int,
    title varchar(50) not null,
    entry text,
    journal_id int not null,
    time timestamp default current_timestamp,
    foreign key (journal_id) references journals(id)
    -- Combine with journals table for user id
);

-- Purely for data mining
create table user_tag(
    user_id int not null,
    tag_id int not null,
    foreign key (user_id) references users(id),
    foreign key (tag_id) references tags(id)
);