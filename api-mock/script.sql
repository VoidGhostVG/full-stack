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