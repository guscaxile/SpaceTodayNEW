create database SpaceToday;

use SpaceToday;

create table usuario(
idUsuario int primary key auto_increment,
login varchar(45),
email varchar(45),
senha varchar(45)
);

select * from usuario;

create table astronomos(
idCientista int primary key auto_increment,
nome varchar(45),
dataNasc date,
frases varchar(45)
) auto_increment = 100;

create table dash(
idDash int primary key auto_increment,
qtdGraficos int,
tipoGrafico varchar(45),
dados varchar(45),
fk_astro int,
foreign key (fk_astro) references astronomos(idCientista)
) auto_increment = 200;

create table elementos(
idElementos int primary key auto_increment,
qtdElementos int,
nomeElementos varchar(45)
) auto_increment = 200;

alter table dash add foreign key (fk_elementos) references elementos(idElementos);

alter table dash add fk_elementos int;

insert into astronomos(nome, dataNasc, frases) values
('Galileu Galilei', '1564-02-15', '5 frases cadastradas'),
('Nicolau Copérnico', '1473-02-19', '5 frases cadastradas'),
('Isaac Newton', '1643-01-04', '5 frases cadastradas'),
('Carl Sagan', '1934-11-09', '5 frases cadastradas'),
('Albert Einstein', '1879-03-14', '5 frases cadastradas'),
('Giordano Bruno', '1548-10-21', '5 frases cadastradas');

select * from astronomos;

insert into elementos(qtdElementos, nomeElementos) values 
(5, '5 Esrelas'),
(5, '3 Planetas'),
(5, '4 Luas'),
(5, '2 Galáxias'),
(5, '1 Asteróides');

insert into dash(qtdGraficos, tipoGrafico, dados, fk_astro, fk_elementos) values
(4, 'pie(pizza)', 'Significado astronomia', null, null),
(4, 'pie(pizza)', 'Grau de conhecimento', null, null),
(4, 'pie(pizza)', 'Astronomos que conhecem', 100, 201),
(4, 'pie(pizza)', 'Elementos que conhecem', 101, 201);

select * from dash join astronomos on fk_astro = astronomos(idCientista)
	join elementos on fk_elementos = elementos(idElementos);