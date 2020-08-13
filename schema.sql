-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;
-- Use db if created already --
USE burgers_db;

-- Default Table --
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(500) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (`burger_name`) VALUE ('Mega-Man 3 Meats Burger');
INSERT INTO burgers (`burger_name`) VALUE ('Metroid "Out of this World" Beyond Burger');
INSERT INTO burgers (`burger_name`) VALUE ('Portobello Burger');
INSERT INTO burgers (`burger_name`, `devoured`) VALUE ("Spongebob's Double Patty Angus Beef Burger", true);
INSERT INTO burgers (`burger_name`, `devoured`) VALUE ('Mission Impossible Mango Burger', true);
INSERT INTO burgers (`burger_name`, `devoured`) VALUE ("Bowser's BBQ Chicken Burger", true);

