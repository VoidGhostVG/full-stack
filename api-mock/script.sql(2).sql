-- criar novo schema
create database sistema_produtos;

use sistema_produtos;

-- criar tabela "produtos" com algumas colunas simples
create table produtos (
id int auto_increment primary key, -- ID ÚNICO
nome varchar (100) not null, -- NOME
email varchar (120) not null, -- EMAIL
telefone varchar (20), -- TELEFONE
cpf varchar (14), -- CPF
endereco varchar (150) -- ENDEREÇO
);

-- inserir dois registos
insert into produtos (nome, email, telefone, cpf, endereco) values
('Eduardo Ramos', 'edu.ramos@orutos.com', '1245454-777', '454.545.454-55', 'Rua Orutos 7'),
('Juliana Clara', 'juliana@orutos.com', '45454545-745', '754.964.977-75', 'Rua Orutos 8'),
('Victor Luiz', 'vluiz0196@gmail.com', '97894-1717', '423.181.368-07', 'Rua Padre Rocha 66');

-- Selecionar o registro por id
select * from produtos where id = 2;

create table usuarios (
id int auto_increment primary key,
nome varchar (120) not null,
email varchar (140) not null,
idade varchar (20),
endereco varchar (150)
);

insert into usuarios (nome, email, idade, endereco) values
('Ana Pereira', 'ana.pereira@example.com', '28', 'Rua das Flores, 120 - São Paulo/SP'),
('Bruno Silva', 'bruno.silva@example.com', '32', 'Av. Central, 450 - Rio de Janeiro/RJ'),
('Carla Mendes', 'carla.mendes@example.com', '25', 'Rua Bela Vista, 89 - Belo Horizonte/MG'),
('Diego Rocha', 'diego.rocha@example.com', '30', 'Rua das Acácias, 210 - Curitiba/PR'),
('Eduarda Lima', 'eduarda.lima@example.com', '27', 'Travessa Horizonte, 55 - Salvador/BA'),
('Fernando Alves', 'fernando.alves@example.com', '35', 'Av. Independência, 980 - Porto Alegre/RS'),
('Gabriela Torres', 'gabriela.torres@example.com', '29', 'Rua do Sol, 300 - Recife/PE'),
('Henrique Duarte', 'henrique.duarte@example.com', '33', 'Rua Palmeira, 145 - Fortaleza/CE'),
('Isabela Martins', 'isabela.martins@example.com', '26', 'Rua Ipê Amarelo, 72 - Goiânia/GO'),
('João Cardoso', 'joao.cardoso@example.com', '31', 'Av. Primavera, 600 - Manaus/AM');

select * from usuarios;

drop table usuarios;

drop database sistema_produtos;

create database atividade_bd;

use atividade_bd;

create table usuario (
id int auto_increment primary key,
nome varchar (120) not null
);

insert into usuario (nome) value
('Victor'),
('Daniel'),
('Thiago'),
('Júlio');

select * from usuario;

create table cadastro (
id int auto_increment primary key,
email varchar (140) not null,
telefone varchar (20)
);

insert into cadastro (email, telefone) values
('victor@gmail.com', '(11)97894-1717'),
('daniel@gmail.com', '(11)96074-6520'),
('thiago@gmail.com', '(11)93734-2653'),
('julio@gmail.com', '(13)99691-2364');

select * from cadastro;

create table dados_pessoais (
id int auto_increment primary key,
idade varchar (3),
endereco varchar (150)
);

insert into dados_pessoais (idade, endereco) values
('16', 'Cotia, SP'),
('17', 'Caucaia, SP'),
('17', 'Granja Viana, SP'),
('21', 'Cotia, SP');

select * from dados_pessoais;