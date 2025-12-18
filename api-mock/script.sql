create database copa_mundo;

use copa_mundo;

create table selecoes (
id int auto_increment primary key,
selecao varchar (100) not null,
grupo char (1) not null
);

insert into selecoes (selecao, grupo) values
('Estados Unidos', 'A'),
('França', 'D'),
('Argentina', 'H'),
('Brasil', 'N'),
('Espanha', 'P'),
('Bélgica', 'M'),
('Portugal', 'O'),
('México', 'B'),
('Canadá', 'C'),
('Japão', 'I'),
('Marrocos', 'F'),
('Uruguai', 'G'),
('Nova Zelândia', 'K'),
('Inglaterra', 'L'),
('Coréia do Sul', 'J'),
('Holanda', 'E');

select * from selecoes