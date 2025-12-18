create database dadosUsuario;

use dadosUsuario;

create table dadosDeCadastro(
id int auto_increment primary key,
usuario varchar(30)not null,
senha varchar(50)not null, 
animalEstimacao varchar(100)not null
);

insert into dadosDeCadastro(usuario, senha, animalEstimacao) values
('Eduardo Ramos', '@EuAmoMeuGato', 'Tenho um gato cinza'),
('Juliana Clara', '@TenhoODogMaisFofo', 'Tenho um cachorro preto');

select * from dadosDeCadastro;

create table usuarioo(
id int auto_increment primary key,
email varchar(30)not null,
senha varchar(100)not null, 
sexo varchar(10)
);

insert into usuarioo(email, senha, sexo) values
('Eduardo.ramos@gmail.com', '@EuAmoMeuGato', 'Homem'),
('Juliana.claros@gmail.com', '@TenhoODogMaisFofo', 'Mulher');

select * from usuarioo;

create table dadosPessoais(
id int auto_increment primary key,
animalDeEstimacao varchar(30)not null,
tomDePele varchar(10)not null, 
idade varchar(30)not null
);

insert into dadosPessoais(animalDeEstimacao, tomDePele, idade) values
('Cachorro', 'branca', '18 Anos'),
('Gato', 'Parda', '22 Anos');

select * from dadosPessoais;