import User from '../models/User';

class UserController {
  async index(request, response) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'nome', 'email'],
      });
      return response.json(users);
    } catch (e) {
      return response.json(null);
    }
  }

  async show(request, response) {
    try {
      const user = await User.findByPk(request.params.id, {
        attributes: ['id', 'nome', 'email'],
      });

      return response.json(user);
    } catch (e) {
      return response.json(null);
    }
  }

  async create(request, response) {
    try {
      const novoUser = await User.create(request.body);
      response.json(novoUser);
    } catch (e) {
      response.status(400).json({ erros: e.errors.map((error) => error.message) });
    }
  }

  async update(request, response) {
    try {
      const user = await User.findByPk(request.userId);
      if (!user) return response.status(400).json({ erros: ['Usuário não existe'] });

      const newUser = await user.update(request.body);

      return response.json(newUser);
    } catch (e) {
      return response.json({ erros: e.errors.map((error) => error.message) });
    }
  }

  async destroy(request, response) {
    try {
      const user = await User.findByPk(request.userId);
      if (!user) return response.status(400).json({ erros: ['Usuário não existe'] });

      await user.destroy(request.body);

      return response.json({ message: 'Usuário deletado com sucesso' });
    } catch (e) {
      return response.json({ erros: e.errors.map((error) => error.message) });
    }
  }
}

export default new UserController();

/*
* index -> listar todos os usuários (GET)
* show -> mostrar um usuário (GET)
* store/create -> criar um novo usuário (POST)
* delete -> deletar um usuário (DELETE)
* update -> atualizar um usuário (PATCH OR PUT)
* [PATCH: atualiza somente um campo, PUT: atualiza todos os campos]
*/
