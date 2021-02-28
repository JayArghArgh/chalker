-- Members--

INSERT INTO `chalker_dev`.`members` (`username`, `createdAt`, `updatedAt`) VALUES ('jrr', '2021-02-26', '2021-02-26');
INSERT INTO `chalker_dev`.`members` (`username`, `createdAt`, `updatedAt`) VALUES ('jayarghargh', '2021-02-26', '2021-02-26');

-- Game types--
INSERT INTO `chalker_dev`.`gametypes` (`game_name`, `game_description`, `createdAt`, `updatedAt`)
VALUES ('Burma Road', 'Burma Road', '2021-02-27', '2021-02-27');

INSERT INTO `chalker_dev`.`gametypes` (`game_name`, `game_description`, `createdAt`, `updatedAt`, `GameTypeId`)
VALUES ('Burma Road Hard Man', 'Burma Road', '2021-02-27', '2021-02-27', '1');

INSERT INTO `chalker_dev`.`gametypes` (`game_name`, `game_description`, `createdAt`, `updatedAt`)
VALUES ('x01', 'first to score zero', '2021-02-27', '2021-02-27');

INSERT INTO `chalker_dev`.`gametypes` (`game_name`, `createdAt`, `updatedAt`, `GameTypeId`)
VALUES ('501', '2021-02-27 00:00:00', '2021-02-27 00:00:00', '3');

INSERT INTO `chalker_dev`.`gametypes` (`game_name`, `createdAt`, `updatedAt`, `GameTypeId`)
VALUES ('301', '2021-02-27 00:00:00', '2021-02-27 00:00:00', '3');

-- Games--
INSERT INTO `chalker_dev`.`games` (`game_id`, `createdAt`, `updatedAt`, `GameTypeId`)
VALUES ('kh8uaiu32ko4', '2021-02-27', '2021-02-27', '2');

-- Games Players--

INSERT INTO `chalker_dev`.`gameplayers` (`player_order`, `current_score`, `createdAt`, `updatedAt`, `GameId`, `MemberId`)
VALUES ('1', '40', '2021-02-27', '2021-02-27', '1', '1');

INSERT INTO `chalker_dev`.`gameplayers` (`player_order`, `current_score`, `createdAt`, `updatedAt`, `GameId`, `MemberId`)
VALUES ('2', '40', '2021-02-27', '2021-02-27', '1', '2');

-- Legs--

INSERT INTO `chalker_dev`.`legs` (`leg_number`, `darts`, `leg_score`, `createdAt`, `updatedAt`, `GameId`, `MemberId`)
VALUES ('1', '{d1: t20, d2: t20, d3: t20}', '0', '2021-02-27', '2021-02-27', '1', '1');

INSERT INTO `chalker_dev`.`legs` (`leg_number`, `darts`, `leg_score`, `createdAt`, `updatedAt`, `GameId`, `MemberId`)
VALUES ('1', '{d1: t19, d2: t19, d3: t19}', '0', '2021-02-27', '2021-02-27', '1', '2');

