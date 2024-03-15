SELECT * FROM jana
CREATE TABLE Person (
	id int primary key,
	name varchar(255),
	age int,
	address varchar(255)
);

SELECT * FROM Person;

INSERT INTO Person(id,name,age,address) values (1,'Jana',22, '1/47 Annur Mettupalayam');
INSERT INTO Person(id,name,age,address) values (2,'Naveen',25,'1/47 Annur'),(3,'Mani',20,'Annur');
insert into Person(id,name,age,address) values (4,'Charan',22,'Trippur'),(5,'Hiii',28,'Mettupalayam');

SELECT * FROm Person where address = '1/47 Annur';
select * from Person order by age desc;
select * from person order by name;
select * from Person order by id;

