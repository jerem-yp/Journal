-- Run this file for all tables necessary

-- UNCOMMENT LINE 4 IF DATABASE NOT IN SYSTEM
-- create database journal;

drop table if exists user_tag;
drop table if exists prompt_tag;
drop table if exists entries;
drop table if exists journals;
drop table if exists tags;
drop table if exists prompts;
drop table if exists users;

-- Users
create table users(
    id serial primary key,
    username varchar(10) not null,
    password text
);

-- Creative Writing
create table journals(
    id serial primary key,
    name varchar(50) not null,
    user_id int not null,
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

-- Insertion statements for all tables: Random data

INSERT INTO users (username, password) VALUES
('user1', 'pass1'),
('user2', 'pass2'),
('user3', 'pass3'),
('user4', 'pass4'),
('user5', 'pass5'),
('user6', 'pass6'),
('user7', 'pass7'),
('user8', 'pass8'),
('user9', 'pass9'),
('user10', 'pass10');

-- Journals
INSERT INTO journals (name, user_id) VALUES
('Journal Alpha', 5),
('Beta Journal', 2),
('Gamma Weekly', 8),
('Delta Daily', 4),
('Epsilon Monthly', 1),
('Zeta Quarterly', 6),
('Eta Review', 7),
('Theta Insights', 3),
('Iota News', 9),
('Kappa Reports', 10),
('Lambda Logs', 3),
('Mu Chronicles', 5),
('Nu Diaries', 1),
('Xi Memos', 7),
('Omicron Bulletins', 2),
('Pi Updates', 8),
('Rho Annals', 4),
('Sigma Records', 10),
('Tau Papers', 6),
('Upsilon Articles', 9);

-- Add prompts
INSERT INTO prompts (prompt) VALUES
('What are you grateful for today?'),
('Describe a recent accomplishment you are proud of.'),
('What goals do you have for the next month?'),
('How do you handle stress and pressure?'),
('Write about a memorable experience from your childhood.'),
('What is one thing you want to improve about yourself?'),
('Describe a place where you feel most at peace.'),
('What qualities do you value most in friendships?'),
('Reflect on a book or movie that had a significant impact on you.'),
('What are your dreams and aspirations for the future?');

-- Entries
INSERT INTO entries (prompt_id, title, entry, journal_id) VALUES
(1, 'Grateful Moments', 'Today, I am grateful for the support of my family and friends.', 5),
(2, 'Proud Achievement', 'I successfully completed my first marathon last weekend.', 3),
(3, 'Monthly Goals', 'This month, I aim to improve my coding skills and start a new hobby.', 7),
(4, 'Stress Management', 'I handle stress by practicing mindfulness and going for long walks.', 4),
(5, 'Childhood Memory', 'One memorable experience from my childhood is our family road trips during summer.', 2),
(6, 'Self-Improvement', 'I want to work on being more patient and understanding with others.', 6),
(7, 'Peaceful Place', 'I feel most at peace when I am at the beach, listening to the waves.', 8),
(8, 'Valued Qualities', 'In friendships, I value honesty, loyalty, and a good sense of humor.', 1),
(9, 'Impactful Book', 'A book that had a significant impact on me is "To Kill a Mockingbird".', 9),
(10, 'Future Aspirations', 'In the future, I dream of traveling the world and experiencing different cultures.', 10),
(1, 'Daily Gratitude', 'I am grateful for the beautiful weather today.', 2),
(2, 'Recent Success', 'I finished a complex project at work ahead of the deadline.', 6),
(3, 'Weekly Objectives', 'This week, I want to finish reading a book and organize my workspace.', 4),
(4, 'Managing Pressure', 'I find that deep breathing exercises help me manage pressure effectively.', 7),
(5, 'Memorable Event', 'A memorable event from my childhood is winning the school spelling bee.', 3),
(6, 'Personal Growth', 'I aim to become more disciplined in my daily routines.', 1),
(7, 'Favorite Spot', 'My favorite spot is a quiet corner in the local library.', 5),
(8, 'Friendship Values', 'I value empathy and kindness in my friends.', 8),
(9, 'Inspirational Film', 'The movie "The Pursuit of Happyness" deeply inspired me.', 10),
(10, 'Career Goals', 'I aspire to become a leader in my field and mentor others.', 9);


SELECT * from prompts ORDER BY RANDOM() LIMIT 5;