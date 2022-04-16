import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async createToken(request, response) {
    const { email = '', password = '' } = request.body;

    if (!email || !password) return response.status(400).json({ errors: 'Missing user credentials' });
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) return response.status(400).json({ errors: 'User does not exists' });
    if (!(await user.passwordIsValid(password))) return response.status(400).json({ errors: 'Invalid password' });

    const { id } = user;
    const token = jwt.sign({
      id,
      email,
    }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
    });

    return response.json({ token });
  }
}

export default new TokenController();
