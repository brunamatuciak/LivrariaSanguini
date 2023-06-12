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
	idQuizz int primary key auto_increment,
	fkUsuario int,
    foreign key (fkUsuario) references usuario (idUsuario),
    fkLivro int,
    foreign key (fkLivro) references Livros (id)
    );
    
INSERT INTO quizz values 
(null, 5,1);
    
create table QuizzFavortio (
	idQuizzFavorito int primary key auto_increment,
    acertos char(1),
    fkLivroFavorito int,
    foreign key (fkLivroFavorito) references Livros(id),
    fkUsuarioQuizz int,
    foreign key (fkUsuarioQuizz) references usuario(idUsuario)
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
select * from Livros;


desc usuario;
desc Livros;


select * from usuario join quizz on idUsuario = fkUsuario;
select * from Livros join quizz on id = fkLivro;

select * from usuario join quizz on idUsuario = fkUsuario
					  join Livros on id = fkLivro;

-- utilizado na Model do Usuario

SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
INSERT INTO usuario (nome, email, senha, genero, subGenero) VALUES ('${nome}', '${email}', '${senha}', '${genero}', '${subGenero}'); 
SELECT genero, count(genero) as 'numero_de_favoritos' from usuario GROUP BY genero;
SELECT subGenero, count(subGenero) as 'numero_de_favorito' from usuario GROUP BY subGenero;

