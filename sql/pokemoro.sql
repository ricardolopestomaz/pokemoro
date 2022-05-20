drop database if exists pokemoro;
create database pokemoro;
use pokemoro;

drop table if exists usuario;
create table usuario(
email varchar(50) not null unique,
username varchar(20) not null unique,
senha varchar(16) not null,
primary key(username)
);

drop table if exists pokemon;
create table pokemon(
id varchar(3) not null unique,
nome varchar(20) not null unique,
tipo varchar(20) not null,
dono varchar(20),
primary key(id),
key tipo (tipo),
constraint fk_dono foreign key(dono) references usuario(username)
);

drop table if exists pokedex;
create table pokedex(
usuario varchar(20),
pokemon varchar(3),
tipo varchar(20),
constraint fk_usuario foreign key(usuario) references usuario(username),
constraint fk_pokemon foreign key(pokemon) references pokemon(id),
constraint fk_tipo foreign key(tipo) references pokemon(tipo)
);