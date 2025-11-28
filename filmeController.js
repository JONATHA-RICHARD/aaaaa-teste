const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarFilmes = async (req, res) => {
  try {
    const filmes = await prisma.filme.findMany();
    res.status(200).json(filmes);
  } catch (error) {
    res.status(500).json({ error: "Erro interno ao listar filmes" });
  }
};

const buscarFilmePorId = async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });
  try {
    const filme = await prisma.filme.findUnique({ where: { id } });
    if (!filme) return res.status(404).json({ error: "Filme não encontrado" });
    res.status(200).json(filme);
  } catch {
    res.status(500).json({ error: "Erro interno ao buscar filme" });
  }
};

const filtrarFilmes = async (req, res) => {
  const { nome } = req.query;
  if (!nome) return res.status(400).json({ error: "Nome é obrigatório" });

  try {
    const filmes = await prisma.filme.findMany({
      where: {
        OR: [
          { titulo: { contains: nome, mode: "insensitive" } },
          { sinopse: { contains: nome, mode: "insensitive" } }
        ]
      }
    });
    res.status(200).json(filmes);
  } catch {
    res.status(500).json({ error: "Erro interno ao filtrar filmes" });
  }
};

module.exports = {
  listarFilmes,
  buscarFilmePorId,
  filtrarFilmes
};
