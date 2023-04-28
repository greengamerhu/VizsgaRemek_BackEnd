-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 28. 14:36
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `vizsgadb`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cart`
--

CREATE TABLE `cart` (
  `id` varchar(36) NOT NULL,
  `total` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `menuItemFoodId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `cart`
--

INSERT INTO `cart` (`id`, `total`, `quantity`, `userId`, `menuItemFoodId`) VALUES
('caa56169-463a-4709-8552-f6a6dbaff959', 5100, 1, 2, 7),
('ddbebb8f-8cbf-4d86-850c-ef01f56a2bba', 11200, 2, 1, 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `menu`
--

CREATE TABLE `menu` (
  `food_id` int(11) NOT NULL,
  `food_name` varchar(255) NOT NULL,
  `food_description` varchar(255) NOT NULL,
  `food_category` varchar(255) NOT NULL,
  `food_price` int(11) NOT NULL,
  `food_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `menu`
--

INSERT INTO `menu` (`food_id`, `food_name`, `food_description`, `food_category`, `food_price`, `food_image`) VALUES
(1, 'Klasszikus burger', 'Ha az egyszerűséget kedveli, akkor a klasszikus burgerünk a megfelelő választás! Friss, szaftos húspogácsa, cheddar sajt, friss zöldségek és ízletes szósz, mindez egy friss zsemlében tálalva.', 'Burger', 3900, 'zoldburger.png'),
(2, 'Sajtburger', 'frissen sült húspogácsa sajttal, friss saláta, paradicsom és vöröshagyma a frissen sütött zsemlében, különleges szósszal tálalva', 'Burger', 2000, 'Sajtburger.png'),
(3, 'Pulled Pork', 'Szereti a füstös és szaftos ízeket? Akkor próbálja ki a pulled pork Burgerünket, füstölt sertéshúsból készítve, különleges fűszerekkel ízesítve és szaftos szósszal tálalva...', 'Burger', 4900, 'Pulled_Pork.png'),
(4, 'Vegán Burger', 'Szeretné élvezni egy finom és egészséges étel ízét? Válassza a vegán burgerünket, amelyet friss zöldségekből készítünk, ínycsiklandó szószokkal és fűszerekkel, hogy minden falat ízletes és tápláló legyen.', 'Vega', 5600, 'egeszseges.png'),
(5, 'Tres Burger', 'Ha nagy éhséggel küzd, akkor a tripla burgerünk a tökéletes választás! Friss, ropogós zsemlében, három szaftos húspogácsával és gazdag ízekkel.', 'Burger', 5000, 'triplaburger.png'),
(6, 'Tojásos burger', 'Kóstolja meg a tojásos burgerünk ínycsiklandó ízeit! Szaftos húspogácsa, friss zöldségek és egy finom tojás, mindez egy friss zsemlében tálalva.', 'Burger', 2500, 'tojasosburger.png'),
(7, 'Jalapeño Burger', 'Próbálja ki a jalapeno burgerünk pikáns ízét, amelyben szaftos húspogácsa, friss zöldségek, cheddar sajt és friss jalapeno paprika találkoznak egy friss zsemlében.', 'Burger', 5100, 'Jalapeno.png'),
(8, 'Csibe Burger', 'Ha szereti az egyszerű, mégis ínycsiklandó ízeket, akkor a csirkeburgerünk a tökéletes választás! Friss, ropogós csirkehús, finom szószok és friss zöldségek, amelyek garantáltan élvezetet nyújtanak.', 'Burger', 4200, 'csibeburger.png'),
(9, 'Bacon Burger', 'Kóstolja meg a bacon burgerünk pikáns és szaftos ízeit, amelyben friss zöldségek, szaftos húspogácsa és ropogós bacon csíkok találkoznak egy friss zsemlében..', 'Burger', 3900, 'baconburger.png'),
(15, 'teszt burger', 'teszt birger leirás', 'Burger', 1000, 'teszt.png');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `order`
--

CREATE TABLE `order` (
  `id` varchar(36) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Feldolgozás alatt',
  `total` int(11) NOT NULL,
  `selectedAddressId` int(11) DEFAULT NULL,
  `orderDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `order`
--

INSERT INTO `order` (`id`, `userId`, `status`, `total`, `selectedAddressId`, `orderDate`) VALUES
('1da6d9e8-5595-492a-816f-d91b77060fbb', 2, 'Kiszállítva', 76900, 33, '2023-04-28 02:07:30'),
('26f749d1-6b90-49ee-9a4c-c77885df4615', 2, 'Kiszállítva', 24500, 33, '2023-04-21 15:48:51'),
('27c52a4a-23ae-408a-970e-b147de0a4a57', 1, 'Kiszállítva', 13400, 35, '2023-04-27 15:34:59'),
('44362214-f5e9-405c-b9b2-c1376ea567bb', 1, 'Kiszállítva', 23300, 35, '2023-04-27 15:37:35'),
('97a17bb5-794f-47b3-9fc3-511d43bb2d35', 1, 'Feldolgozás alatt', 3900, 35, '2023-04-27 15:38:34'),
('c45d143c-3824-414b-9e72-d606087737cf', 1, 'Kiszállítva', 33300, NULL, '2023-04-19 22:43:23'),
('c8852c34-ee43-4e37-96f5-cdbacce82131', 1, 'Kiszállítva', 40300, NULL, '2023-04-21 15:40:32');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `order_items`
--

CREATE TABLE `order_items` (
  `food_name` varchar(255) NOT NULL,
  `food_description` varchar(255) NOT NULL,
  `food_category` varchar(255) NOT NULL,
  `food_price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `orderId` varchar(36) DEFAULT NULL,
  `id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `order_items`
--

INSERT INTO `order_items` (`food_name`, `food_description`, `food_category`, `food_price`, `quantity`, `total`, `orderId`, `id`) VALUES
('Klasszikus burger', 'Ha az egyszerűséget kedveli, akkor a klasszikus burgerünk a megfelelő választás! Friss, szaftos húspogácsa, cheddar sajt, friss zöldségek és ízletes szósz, mindez egy friss zsemlében tálalva.', 'Burger', 3900, 4, 15600, 'c8852c34-ee43-4e37-96f5-cdbacce82131', '2380a547-1ff4-4ab5-9e5c-1840c6b68248'),
('Tres Burger', 'Ha nagy éhséggel küzd, akkor a tripla burgerünk a tökéletes választás! Friss, ropogós zsemlében, három szaftos húspogácsával és gazdag ízekkel.', 'Burger', 5000, 1, 5000, '44362214-f5e9-405c-b9b2-c1376ea567bb', '27d4a61c-69f4-4482-a395-84524ce8620b'),
('Pulled Pork', 'Szereti a füstös és szaftos ízeket? Akkor próbálja ki a pulled pork Burgerünket, füstölt sertéshúsból készítve, különleges fűszerekkel ízesítve és szaftos szósszal tálalva..', 'Burger', 4900, 1, 4900, '26f749d1-6b90-49ee-9a4c-c77885df4615', '356b43d9-84a2-48a8-9b41-f6e7d2851a89'),
('Klasszikus burger', 'Ha az egyszerűséget kedveli, akkor a klasszikus burgerünk a megfelelő választás! Friss, szaftos húspogácsa, cheddar sajt, friss zöldségek és ízletes szósz, mindez egy friss zsemlében tálalva.', 'Burger', 3900, 3, 11700, '1da6d9e8-5595-492a-816f-d91b77060fbb', '5f414abf-239e-4688-a566-980dd51b9ec6'),
('Klasszikus burger', 'Ha az egyszerűséget kedveli, akkor a klasszikus burgerünk a megfelelő választás! Friss, szaftos húspogácsa, cheddar sajt, friss zöldségek és ízletes szósz, mindez egy friss zsemlében tálalva.', 'Burger', 3900, 2, 7800, '27c52a4a-23ae-408a-970e-b147de0a4a57', '60bd12b8-7309-4d06-a5f0-19cfe3c972eb'),
('Vegán Burger', 'Szeretné élvezni egy finom és egészséges étel ízét? Válassza a vegán burgerünket, amelyet friss zöldségekből készítünk, ínycsiklandó szószokkal és fűszerekkel, hogy minden falat ízletes és tápláló legyen.', 'Vega', 5600, 10, 56000, '1da6d9e8-5595-492a-816f-d91b77060fbb', '60ffe52c-d087-4aff-8193-6066eb07cdd5'),
('Tres Burger', 'Ha nagy éhséggel küzd, akkor a tripla burgerünk a tökéletes választás! Friss, ropogós zsemlében, három szaftos húspogácsával és gazdag ízekkel.', 'Burger', 5000, 2, 10000, 'c8852c34-ee43-4e37-96f5-cdbacce82131', '6d676353-f450-4360-9b2c-a5597339262a'),
('Jalapeño Burger', 'Próbálja ki a jalapeno burgerünk pikáns ízét, amelyben szaftos húspogácsa, friss zöldségek, cheddar sajt és friss jalapeno paprika találkoznak egy friss zsemlében.', 'Burger', 5100, 1, 5100, '26f749d1-6b90-49ee-9a4c-c77885df4615', '7550b543-4901-403f-a9b9-c435a1472da1'),
('Csibe Burger', 'Ha szereti az egyszerű, mégis ínycsiklandó ízeket, akkor a csirkeburgerünk a tökéletes választás! Friss, ropogós csirkehús, finom szószok és friss zöldségek, amelyek garantáltan élvezetet nyújtanak.', 'Burger', 4200, 1, 4200, '1da6d9e8-5595-492a-816f-d91b77060fbb', '87d7f245-6de3-418c-9e17-2956464ec194'),
('Classic Hamburger', 'A juicy beef patty with lettuce, tomato, onion, and cheese served on a sesame seed bun.', 'Burger', 3900, 1, 3900, 'c45d143c-3824-414b-9e72-d606087737cf', '9c3a2fb6-b304-4345-a0aa-9a5103c9a388'),
('Tojásos burger', 'Kóstolja meg a tojásos burgerünk ínycsiklandó ízeit! Szaftos húspogácsa, friss zöldségek és egy finom tojás, mindez egy friss zsemlében tálalva.', 'Burger', 2500, 1, 2500, '44362214-f5e9-405c-b9b2-c1376ea567bb', 'aaedf2dc-38b4-4c08-a3e7-eee2727186b1'),
('Pulled Pork', 'Szereti a füstös és szaftos ízeket? Akkor próbálja ki a pulled pork Burgerünket, füstölt sertéshúsból készítve, különleges fűszerekkel ízesítve és szaftos szósszal tálalva..', 'Burger', 4900, 3, 14700, 'c8852c34-ee43-4e37-96f5-cdbacce82131', 'ab5061a1-c600-4e94-8b18-4a81c89d372f'),
('Bacon Burger', 'Kóstolja meg a bacon burgerünk pikáns és szaftos ízeit, amelyben friss zöldségek, szaftos húspogácsa és ropogós bacon csíkok találkoznak egy friss zsemlében..', 'Burger', 3900, 1, 3900, '26f749d1-6b90-49ee-9a4c-c77885df4615', 'afb176f6-71c2-4666-b4b1-8eceab745cbc'),
('Sajtburger', 'frissen sült húspogácsa sajttal, friss saláta, paradicsom és vöröshagyma a frissen sütött zsemlében, különleges szósszal tálalva', 'Burger', 2000, 3, 6000, '44362214-f5e9-405c-b9b2-c1376ea567bb', 'bf6a3856-10fc-4414-bec3-5ac44be2a49d'),
('Vegán Burger', 'Szeretné élvezni egy finom és egészséges étel ízét? Válassza a vegán burgerünket, amelyet friss zöldségekből készítünk, ínycsiklandó szószokkal és fűszerekkel, hogy minden falat ízletes és tápláló legyen.', 'Vega', 5600, 1, 5600, '27c52a4a-23ae-408a-970e-b147de0a4a57', 'cc8f0080-e57d-4919-93bf-43bb402e0f27'),
('Tres Burger', 'Ha nagy éhséggel küzd, akkor a tripla burgerünk a tökéletes választás! Friss, ropogós zsemlében, három szaftos húspogácsával és gazdag ízekkel.', 'Burger', 5000, 1, 5000, '1da6d9e8-5595-492a-816f-d91b77060fbb', 'd2544fbd-263a-48ef-afa0-8e33a7fcfe07'),
('Tres Burger', 'Ha nagy éhséggel küzd, akkor a tripla burgerünk a tökéletes választás! Friss, ropogós zsemlében, három szaftos húspogácsával és gazdag ízekkel.', 'Burger', 5000, 1, 5000, '26f749d1-6b90-49ee-9a4c-c77885df4615', 'd7380b9b-ec7d-486d-9962-aac870e1e473'),
('Klasszikus burger', 'Ha az egyszerűséget kedveli, akkor a klasszikus burgerünk a megfelelő választás! Friss, szaftos húspogácsa, cheddar sajt, friss zöldségek és ízletes szósz, mindez egy friss zsemlében tálalva.', 'Burger', 3900, 1, 3900, '97a17bb5-794f-47b3-9fc3-511d43bb2d35', 'da0c1ab7-66d7-4013-bdb4-96dcb9e0b5e3'),
('Vegán Burger', 'Szeretné élvezni egy finom és egészséges étel ízét? Válassza a vegán burgerünket, amelyet friss zöldségekből készítünk, ínycsiklandó szószokkal és fűszerekkel, hogy minden falat ízletes és tápláló legyen.', 'Vega', 5600, 1, 5600, '26f749d1-6b90-49ee-9a4c-c77885df4615', 'da407c2a-fefc-4db4-abe8-eaed3446fd36'),
('Mushroom Swiss Burger', 'Classic hamburger with sautéed mushrooms and melted Swiss cheese.', 'Burger', 4900, 6, 29400, 'c45d143c-3824-414b-9e72-d606087737cf', 'f3709ace-c9dd-4546-a10e-1c86ce19d5db'),
('Pulled Pork', 'Szereti a füstös és szaftos ízeket? Akkor próbálja ki a pulled pork Burgerünket, füstölt sertéshúsból készítve, különleges fűszerekkel ízesítve és szaftos szósszal tálalva...', 'Burger', 4900, 2, 9800, '44362214-f5e9-405c-b9b2-c1376ea567bb', 'fe48f66c-2f54-45a1-a228-3707a27f554d');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `token`
--

CREATE TABLE `token` (
  `token` varchar(255) NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `token`
--

INSERT INTO `token` (`token`, `userId`) VALUES
('0f0013728c1b151b5a4ec68c5dac6a39fae598f6811a4453f3a56b17cd5c8ada', 1),
('163f088b929bd643e222e90cc5cb32aedf0036cf7ecd064bfb113d7f438265fd', 1),
('fd21db27544bdeafdcc4a043bf2139f4f6ec31f636dbf8843106ed7498920324', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`id`, `fullName`, `email`, `password`, `role`) VALUES
(1, 'Admin Boss(teszt account)', 'admin@example.com', '$2b$15$TcoYFEG0HOdDGWFEnX4mh.9UHEddfAzek1LST4.q7OEKNTnmPTMk2', 'admin'),
(2, 'Jóska Boss(teszt account)', 'joska@example.com', '$2b$15$9vx5bwIYvCrCAkoa5dLNLu5O9BaYcxOW9UuF3lkISS2d.auYODhxK', 'user'),
(13, 'Teszt Elek', 'teszt@example.com', '$2b$15$Nyp8YgB.wnguXbyh/UELzOW/1F4.x8eqAwsv0au6h3fY1/ayVhXxe', 'user');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_address`
--

CREATE TABLE `user_address` (
  `id` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `mobileNumber` varchar(255) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `postalCode` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `user_address`
--

INSERT INTO `user_address` (`id`, `city`, `mobileNumber`, `userId`, `address`, `postalCode`) VALUES
(33, 'Malo', '0000', 2, 'dashdf 13', '2234'),
(35, 'asd', '214235', 1, 'asd', '2234'),
(40, 'Városka', '06441231232', 2, 'Valamilyen utca 11', '1111'),
(41, 'Városka', '06441231232', 2, 'Valamilyen utca 11', '1111');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_756f53ab9466eb52a52619ee019` (`userId`),
  ADD KEY `FK_42b69f0e42fdc2d980e57511360` (`menuItemFoodId`);

--
-- A tábla indexei `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`food_id`);

--
-- A tábla indexei `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_caabe91507b3379c7ba73637b84` (`userId`),
  ADD KEY `FK_e97be45cea28d79df9f60f7233b` (`selectedAddressId`);

--
-- A tábla indexei `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_f1d359a55923bb45b057fbdab0d` (`orderId`);

--
-- A tábla indexei `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`token`),
  ADD KEY `FK_94f168faad896c0786646fa3d4a` (`userId`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `user_address`
--
ALTER TABLE `user_address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_1abd8badc4a127b0f357d9ecbc2` (`userId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `menu`
--
ALTER TABLE `menu`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT a táblához `user_address`
--
ALTER TABLE `user_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FK_42b69f0e42fdc2d980e57511360` FOREIGN KEY (`menuItemFoodId`) REFERENCES `menu` (`food_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_756f53ab9466eb52a52619ee019` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `FK_caabe91507b3379c7ba73637b84` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_e97be45cea28d79df9f60f7233b` FOREIGN KEY (`selectedAddressId`) REFERENCES `user_address` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Megkötések a táblához `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `FK_f1d359a55923bb45b057fbdab0d` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Megkötések a táblához `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FK_94f168faad896c0786646fa3d4a` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `user_address`
--
ALTER TABLE `user_address`
  ADD CONSTRAINT `FK_1abd8badc4a127b0f357d9ecbc2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
