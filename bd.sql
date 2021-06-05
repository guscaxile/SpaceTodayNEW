create database SpaceToday;

use SpaceToday;

create table usuario(
idUsuario int primary key auto_increment,
login varchar(45),
email varchar(45),
senha varchar(45)
);