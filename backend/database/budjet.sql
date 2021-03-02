-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Мар 02 2021 г., 15:31
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `budjet`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Food'),
(2, 'Health'),
(3, 'Leisure'),
(4, 'Taxes'),
(5, 'Pets'),
(6, 'Car'),
(11, 'Salary'),
(12, 'Present');

-- --------------------------------------------------------

--
-- Структура таблицы `operations`
--

CREATE TABLE `operations` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `amount` double NOT NULL,
  `date` date NOT NULL,
  `categoryId` int(11) NOT NULL,
  `type` tinyint(1) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `operations`
--

INSERT INTO `operations` (`id`, `name`, `amount`, `date`, `categoryId`, `type`, `userId`) VALUES
(1, 'Grocery', 1000, '2021-02-16', 1, 1, 1),
(2, 'Restaurant', 600, '2021-02-03', 3, 0, 1),
(3, 'Farmacy', 125, '2021-02-10', 2, 1, 2),
(4, 'Vet', 500, '2021-02-10', 5, 0, 1),
(5, 'Light', 1555, '2021-02-10', 4, 0, 2),
(6, 'Gas', 400, '2021-02-08', 4, 1, 2),
(7, 'Cinema', 150, '2021-02-17', 3, 0, 2),
(8, 'Dog Food', 360, '2021-02-10', 5, 1, 2),
(9, 'Fill the tank', 1000, '2021-02-22', 6, 1, 1),
(10, 'Dentist', 200, '2021-02-11', 2, 0, 1),
(21, 'Salary', 30000, '2021-02-21', 2, 1, 10),
(33, 'Cirsus', 180, '2021-02-21', 4, 0, 12),
(37, 'Dog food', 123, '2021-03-10', 5, 0, 16),
(38, 'Rent', 5000, '2021-03-18', 11, 1, 16),
(39, 'Cinema', 50, '2021-03-16', 3, 0, 16),
(41, 'Birthday present', 100, '2021-03-10', 12, 1, 13),
(42, 'Chapetin', 12, '2021-03-03', 3, 0, 13),
(43, 'Stickers', 14, '2021-03-03', 3, 0, 13),
(44, 'Birthday present', 10000, '2021-03-18', 12, 1, 17),
(45, 'Shoes', 120, '2021-03-17', 3, 0, 17),
(46, 'Bonus at work', 5000, '2021-03-03', 11, 1, 17),
(47, 'Thetre', 150, '2021-03-10', 3, 0, 17),
(48, 'Order food', 130, '2021-03-03', 1, 0, 17),
(49, 'Dog Food', 100, '2021-03-10', 5, 0, 17),
(50, 'Sold a ring', 100, '2021-03-09', 11, 1, 17),
(51, 'Salary', 10000, '2021-03-01', 11, 1, 18),
(52, 'Candy', 10, '2021-03-01', 1, 0, 18);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `lastName` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `password`) VALUES
(1, 'Piter', 'Parker', 'pp@gmail.com', '12345qwerty'),
(2, 'Mary', 'Watson', 'mw@gmail.com', '12345qwerty'),
(5, 'Harry', 'Osborn', 'ho@gmail.com', '12345qwerty'),
(7, 'Flash', 'Thompson', 'ft@gmail.com', '$2a$10$hU5PxKl4vQNwRIwQp5xWdutQbzHDvE3cHazl9CN1Op8'),
(8, 'Liz', 'Allan', 'la@gmail.com', '$2a$10$OSKZcAlUq08dpryPEBLwCerHNpEX3AUU.Nnr.ytJbbm'),
(9, 'George', 'Stacy', 'gs@gmail.com', '$2a$10$S6RBz/MkSx7hmBCRo3NHb.aJwSw9ZrLWHLRfcsG5GWD'),
(10, 'Jonah', 'Jameson', 'jj@gmail.com', '$2a$10$Wv6CD96uMmF9dzVQgiGq.O1d3s2KK74VviMra4EtzyR'),
(11, 'May', 'Parker', 'mp@gmail.com', '$2a$10$SXZXrwKTDFqhrn2uAWAPxuSghLjAaKlI2LyOQBZEWZh'),
(12, 'Bear', 'Bearson', 'bb@gmail.com', '$2a$10$pI./D/j6DcQrZ0qJQPBoh.wsSQt/OvgLApEVbKpaqN6gydkIfq6pK'),
(13, 'Spider', 'Man', 'sm@gmail.com', '$2a$10$QQHuqvaCm2ad/NSrK3FTh.nAZHV22.ylQYLGG9HfkyOXzQVUt8smS'),
(14, 'Ivan', 'Ivanov', 'ii@gmail.com', '$2a$10$bdK9Qtk5huh/Gcjz0kUgOuo4E3pn1v5nxfYnWsvVAjpsbEfWp405C'),
(15, 'Sabrina', 'Witch', 'sw@gmail.com', '$2a$10$LHXQKy.QRFWuKWFsy4jT6uVSL.9uncBIXBWwjUwmNGYYt/76OYPVW'),
(16, 'Harry', 'Potter', 'hp@gmail.com', '$2a$10$SFJnGhXKUT0sj4qmOmwlT.iAMX/YEsbQcobfCLgcuAN9.cRHNKpbK'),
(17, 'Princess', 'Diana', 'pd@gmail.com', '$2a$10$5rBtgrJSr9gjAixVJpD2T.68/w7x16dw8Rc4gnhiPu3/ds9It7fqq'),
(18, 'User', 'Userovich', 'user@gmail.com', '$2a$10$ceBTe8bdOpHqCl2ThiNt/OUBRU2HC.A22z1VWPHcZ5jFmBo.Tnahi');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Индексы таблицы `operations`
--
ALTER TABLE `operations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_operation_category_idx` (`categoryId`),
  ADD KEY `userId` (`userId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `operations`
--
ALTER TABLE `operations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `operations`
--
ALTER TABLE `operations`
  ADD CONSTRAINT `fk_operation_category` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `operations_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
