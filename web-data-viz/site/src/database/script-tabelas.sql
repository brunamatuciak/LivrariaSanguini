create database LivrariaSanguini;
use LivrariaSanguini;

create table Livros (
	id int primary key,
    titulo varchar(50)
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
    
insert into Livros values 
	(1, 'O fim da eternidade'),
	(3, 'As Crônicas de Gelo e Fogo'),
    (4, 'Duna'),
    (5, 'Neuromancer'),
    (11, 'A Sociedade do Anel'),
    (14, 'O mago Aprendiz'),
    (15, 'Harry Potter e a Pedra Filosofal'),
    (20, 'O Jogador nº1');
    
select * from usuario;

--  SELECT count(genero) as 'genero_fantasia' from usuario where genero = 'Fantasia';
 SELECT genero, count(genero) as 'numero_de_favoritos' from usuario GROUP BY genero;