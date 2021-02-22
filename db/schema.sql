### Schema
# https://www.npmjs.com/package/uniqid
DROP DATABASE IF EXISTS chalker;

CREATE DATABASE chalker;
USE chalker;

CREATE TABLE game_rules
(
    id INT NOT NULL AUTO_INCREMENT,
    game_rules varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE game_types
(
    id int NOT NULL AUTO_INCREMENT,
    game_name varchar(255) NOT NULL,
    game_description varchar(255) NOT NULL,
    game_variant_of INT,
    game_rules INT,
    PRIMARY KEY (id),
    FOREIGN KEY(game_variant_of) REFERENCES game_types(id),
    FOREIGN KEY(game_rules) REFERENCES game_rules(id)
);

CREATE TABLE games
(
    id INT NOT NULL AUTO_INCREMENT,
    game_id varchar(20) NOT NULL,
    game_type INT,
    PRIMARY KEY (id),
    FOREIGN KEY(game_type) REFERENCES game_types(id)
);

CREATE TABLE members (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(20),
    game_statistics VARCHAR(2000),
    PRIMARY KEY (id)
);

CREATE TABLE game_players (
    id INT NOT NULL AUTO_INCREMENT,
    game_id INT,
    member_id INT,
    player_order INT,
    current_score DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY(game_id) REFERENCES games(id),
    FOREIGN KEY(member_id) REFERENCES members(id)
);

CREATE TABLE legs (
    id INT NOT NULL AUTO_INCREMENT,
    game_id INT,
    member_id INT,
    leg_number INT,
    darts VARCHAR(100),
    leg_score DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY(game_id) REFERENCES games(id),
    FOREIGN KEY(member_id) REFERENCES members(id)
);

