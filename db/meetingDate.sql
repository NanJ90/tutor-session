#
# TABLE STRUCTURE FOR: Meetings
#

DROP TABLE IF EXISTS Meetings;

CREATE TABLE `Meetings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO Meetings (`id`, `day`) VALUES (1, '2017-08-02');
INSERT INTO Meetings (`id`, `day`) VALUES (2, '2017-09-29');
INSERT INTO Meetings (`id`, `day`) VALUES (3, '2017-11-20');
INSERT INTO Meetings (`id`, `day`) VALUES (4, '2017-10-09');
INSERT INTO Meetings (`id`, `day`) VALUES (5, '2017-11-23');
INSERT INTO Meetings (`id`, `day`) VALUES (6, '2017-03-01');
INSERT INTO Meetings (`id`, `day`) VALUES (7, '2017-02-12');
INSERT INTO Meetings (`id`, `day`) VALUES (8, '2017-09-12');
INSERT INTO Meetings (`id`, `day`) VALUES (9, '2017-12-25');
INSERT INTO Meetings (`id`, `day`) VALUES (10, '2017-05-22');


