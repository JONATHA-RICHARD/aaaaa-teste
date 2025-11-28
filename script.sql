CREATE DATABASE IF NOT EXISTS controle_filmes;
USE controle_filmes;

CREATE TABLE IF NOT EXISTS Filme (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  sinopse TEXT NOT NULL,
  genero VARCHAR(100),
  diretor VARCHAR(150),
  ano INT,
  duracao INT,
  idioma VARCHAR(50),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Filme (titulo, sinopse, genero, diretor, ano, duracao, idioma) VALUES
('Resgate Implacável', 'Um ex-soldado precisa resgatar sua família sequestrada por um cartel brutal.', 'Ação', 'Carlos Mendes', 2019, 125, 'Português'),
('Operação Noite Chuvosa', 'Equipe de agentes tem 24 horas para impedir um ataque cibernético de grande escala.', 'Ação', 'Mariana Costa', 2021, 110, 'Inglês'),
('Velocidade Extrema', 'Corridas ilegais nas ruas criam uma guerra entre gangues rivais.', 'Ação', 'L. Ferreira', 2018, 98, 'Inglês'),
('Coração de Ferro', 'Um policial solitário enfrenta um criminoso que controla a cidade.', 'Ação', 'R. Souza', 2020, 132, 'Português'),
('Alvo Final', 'Assassinatos misteriosos ligam-se a uma conspiração internacional.', 'Ação', 'T. Almeida', 2022, 140, 'Inglês');
