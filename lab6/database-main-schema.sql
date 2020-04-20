CREATE DATABASE  IF NOT EXISTS `main_db`;
USE `main_db`;

CREATE TABLE IF NOT EXISTS `log_requests` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `url_path` varchar(255) NOT NULL,
  `user_agent` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf16;