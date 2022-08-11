-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- DB NAME!
-- fs-react-shopping

CREATE TABLE "shoppingList" (
	"id" SERIAL PRIMARY KEY,
	"item" VARCHAR (80) NOT NULL,
	"quantity" INT NOT NULL,
	"unit" VARCHAR (20)
);

INSERT INTO "shoppingList"
	("item", "quantity", "unit")
VALUES
	('eric', '200', 'loaf'),
	('kas', '12', 'buschel'),
	('tim', '9000', 'gal'),
	('justin', '51', 'jar');