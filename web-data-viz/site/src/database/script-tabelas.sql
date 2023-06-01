create database LivrariaSanguini;
use LivrariaSanguini;

create table Livros (
	id int primary key,
    titulo varchar(50),
    genero varchar (40),
    subGenero varchar (40),
    trechoDoLivro varchar (150),
    comentario1 varchar (150),
    comentario2 varchar (150)
    );
    
create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(60),
    email varchar(45),
    senha varchar (45),
    genero varchar (30),
    subGenero varchar(30)
    );
    
create table quizz (
	fkUsuario int,
    foreign key (fkUsuario) references usuario (idUsuario),
    fkLivro int,
    foreign key (fkLivro) references Livros (id)
    );
    


/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
