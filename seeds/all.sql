insert into chalker_dev.gametypes (gameName, gameDescription, gameRules, createdAt, updatedAt, GameTypeId)
values  ('Burma', null, null, '2021-03-05 21:57:09', '2021-03-05 21:57:11', null);

insert into chalker_dev.games (gameId, createdAt, updatedAt, GameTypeId)
values  ('9zhs8fcklw7r36d', '2021-03-05 11:27:29', '2021-03-05 11:27:29', 1);

insert into chalker_dev.users (username, email, password, createdAt, updatedAt)
values  ('fancyfingers', '1@example.com', '123', '2021-03-05 22:04:58', '2021-03-05 22:05:02'),
        ('angry horse', '2@example.com', '123', '2021-03-05 22:05:17', '2021-03-05 22:05:20');

insert into chalker_dev.gameplayers (playerOrder, currentScore, createdAt, updatedAt, GameId, UserId)
values  (1, 40.00, '2021-03-05 22:05:55', '2021-03-05 22:05:58', 1, 1),
        (2, 40.00, '2021-03-05 22:06:07', '2021-03-05 22:06:10', 1, 2);