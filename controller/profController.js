const professores =[]

exports.getAllProf = (req, res) => {
  res.json(professores);
};

exports.getListTurma = (req, res) => {
  const id = req.params.id; 
  const professor = professores[0].find(u => u.id === id);

  if (!professor) {
    return res.status(404).json({ message: 'Professor não encontrado por ID' });
  }
  res.json(professor.turmas);
};


exports.postTurma = (req, res) => {
  const { id } = req.params;
  const { codigo, disciplina, alunos } = req.body;

  const professor = professores[0].find(u => u.id === id);
  if (!professor) {
    return res.status(404).json({ message: 'Professor não encontrado por ID' });
  }

  const novaTurma = { codigo, disciplina, alunos };

  professor.turmas.push(novaTurma);

  res.status(201).json({
    message: 'Turma cadastrada com sucesso!',
    professor: professor.nome,
    novaTurma
  });
};

exports.getProfId = (req, res) => {
  const id = req.params.id;
  const professor = professores[0].find(u => u.id === id);

  if (!professor) {
    return res.status(404).json({ message: 'Professor não encontrado por ID' });
  }

  res.json(professor);
};

exports.getListProfDep = (req, res) => {
  const departamento = req.params.departamento;
  const professoresDepto = professores[0].filter(u => u.departamento === departamento);

  if (professoresDepto.length === 0) {
    return res.status(404).json({
      message: 'Nenhum professor encontrado nesse departamento',
      departamento
    });
  }

  res.json(professoresDepto);
};


exports.deleteProf = (req, res) => {
    const id = req.params.id
    const index = professores[0].findIndex(u => u.id === id)

    if (index === -1) { 
        return res.status(404).json(
            {'message': 'ID não existente'}
        )
    }

    professores[0].splice(index, 1)
    res.json("Professor deletado")
};

exports.updateProf = (req, res) => {
  const id = req.params.id; 
  const index = professores[0].findIndex(u => u.id === id); 

  if (index === -1) {
    return res.status(404).json({ message: 'ID não existente' });
  }

  // Atualiza apenas os campos enviados no body
  if (req.body.nome) professores[0][index].nome = req.body.nome;
  if (req.body.idade) professores[0][index].idade = req.body.idade;
  if (req.body.departamento) professores[0][index].departamento = req.body.departamento;

  res.json({ message: 'Professor alterado com sucesso' });
};


exports.createProf = (req, res) => {
  professores.push(req.body)
  res.json({'message':'Professor cadastrado com sucesso!'})

};  
