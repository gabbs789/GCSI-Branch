let biblioteca = [
  { id: 1, titulo: 'Dom Quixote', quantidade: 10 },
  { id: 2, titulo: 'O Hobbit', quantidade: 15 },
  { id: 3, titulo: '1984', quantidade: 8 }
]

const getLivros = (req, res) => {
  res.json(biblioteca) 
}

const createLivro = (req, res) => {
  const { id, titulo, quantidade } = req.body 
  biblioteca.push({ id: Number(id), titulo, quantidade }) 
  res.status(201).json({ message: 'Livro adicionado com sucesso!' })
}

const updateLivro = (req, res) => {
  const { id } = req.params 
  const { titulo, quantidade } = req.body
  const livro = biblioteca.find(l => l.id === Number(id)) 

  if (livro) {
    livro.titulo = titulo
    livro.quantidade = quantidade
    res.json({ message: 'Livro atualizado com sucesso!' })
  } else {
    res.status(404).json({ message: 'Livro não encontrado!' })
  }
}

const deleteLivro = (req, res) => {
  const { id } = req.params
  const index = biblioteca.findIndex(l => l.id === Number(id))
  if (index !== -1) {
    biblioteca.splice(index, 1)
    res.json({ message: 'Livro removido com sucesso!' })
  } else {
    res.status(404).json({ message: 'Livro não encontrado!' })
  }
}

export default { getLivros, createLivro, updateLivro, deleteLivro }
