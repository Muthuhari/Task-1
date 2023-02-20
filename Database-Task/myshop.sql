-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2023 at 07:24 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created` timestamp(1) NOT NULL DEFAULT current_timestamp(1) ON UPDATE current_timestamp(1),
  `updated` timestamp(1) NOT NULL DEFAULT current_timestamp(1) ON UPDATE current_timestamp(1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id`, `name`, `created`, `updated`) VALUES
(1, 'Nimal', '0000-00-00 00:00:00.0', '0000-00-00 00:00:00.0'),
(2, 'kamal', '0000-00-00 00:00:00.0', '0000-00-00 00:00:00.0'),
(3, 'Sunil', '0000-00-00 00:00:00.0', '0000-00-00 00:00:00.0'),
(4, 'Kumara', '2023-02-10 17:56:23.0', '2023-02-09 17:56:23.0'),
(5, 'muthuhari', '2023-02-16 17:56:49.0', '2023-02-23 17:56:49.0');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(5) NOT NULL,
  `a_id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created` timestamp(1) NOT NULL DEFAULT current_timestamp(1) ON UPDATE current_timestamp(1),
  `updated` timestamp(1) NOT NULL DEFAULT current_timestamp(1) ON UPDATE current_timestamp(1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `a_id`, `name`, `created`, `updated`) VALUES
(1, 1, 'Yuganthaya', '2023-02-20 04:45:22.8', '0000-00-00 00:00:00.0'),
(2, 2, 'Gamperaliya', '2023-02-20 04:45:22.8', '0000-00-00 00:00:00.0'),
(3, 3, 'Hathpana', '2023-02-20 04:45:22.9', '0000-00-00 00:00:00.0'),
(4, 3, 'Kavi potha', '2023-02-20 04:45:22.9', '0000-00-00 00:00:00.0'),
(5, 5, 'AMMA', '2023-02-20 17:58:13.6', '2023-02-20 17:58:13.6'),
(6, 4, 'Viragaya', '2023-02-10 17:59:38.0', '2023-02-23 17:59:38.0');

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `id` int(5) NOT NULL,
  `book_id` int(5) NOT NULL,
  `count` int(23) NOT NULL,
  `created` timestamp(1) NOT NULL DEFAULT current_timestamp(1) ON UPDATE current_timestamp(1),
  `updated` timestamp(1) NOT NULL DEFAULT current_timestamp(1) ON UPDATE current_timestamp(1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`id`, `book_id`, `count`, `created`, `updated`) VALUES
(1, 1, 25, '2023-02-20 04:57:23.7', '2023-02-20 04:57:23.7'),
(2, 2, 15, '2023-02-20 04:47:34.1', '0000-00-00 00:00:00.0'),
(3, 3, 35, '2023-02-20 04:57:07.3', '2023-02-20 04:57:07.3'),
(4, 3, 15, '0000-00-00 00:00:00.0', '0000-00-00 00:00:00.0'),
(5, 3, 35, '2023-02-20 04:47:01.4', '0000-00-00 00:00:00.0'),
(6, 3, 344, '0000-00-00 00:00:00.0', '0000-00-00 00:00:00.0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `a_id` (`a_id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`a_id`) REFERENCES `author` (`id`);

--
-- Constraints for table `shops`
--
ALTER TABLE `shops`
  ADD CONSTRAINT `shops_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
