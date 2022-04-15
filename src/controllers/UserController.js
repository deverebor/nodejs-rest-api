import User from '../models/User';

class UserController {
  async create(request, response) {
    try {
      const novoUser = await User.create(request.body);
      response.json(novoUser);
    } catch (e) {
      response.status(400).json({ erros: e.errors.map((error) => error.message) });
    }
  }
}

export default new UserController();

/*
* index -> listar todos os usuários (GET)
* store/create -> criar um novo usuário (POST)
* delete -> deletar um usuário (DELETE)
* show -> mostrar um usuário (GET)
* update -> atualizar um usuário (PATCH OR PUT)
* [PATCH: atualiza somente um campo, PUT: atualiza todos os campos]
*/
