const usuarios = []

exports.getAllUsers = (req, res) => {
    res.json(usuarios)
}

exports.getUserID = (req, res) => {
    const id = req.params.id
    const usuario = res.json(usuarios.find(u => u.id === id))

    if (!usuario) { 
        return res.status(404).json(
            {'message': 'Usuário por ID'}
        )
    }

    res.json(usuario)
}

exports.deleteUser = (req, res) => {
    const id = req.params.id
    const index = usuarios.findIndex(u => u.id === id)

    if (index === -1) { 
        return res.status(404).json(
            {'message': 'Usuário por ID'}
        )
    }

    usuarios.splice(index, 1)
    res.json("Usuário deletado")
}

exports.updateUser = (req, res) => {
    const id = req.params.id
    const index = usuarios.findIndex(u => u.id === id)

    if (index === -1) { 
        return res.status(404).json(
            {'message': 'Usuário por ID'}
        )
    }

    usuarios[index].nome = req.body.nome;
    res.json("Usuário alterado")
}

exports.createUser = (req, res) => {
    usuarios.push(req.body)
    res.json({'message':'Usuário cadastrado com sucesso!'})
}