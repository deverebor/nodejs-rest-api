import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      error: 'Unauthorized, you need to login first',
    });
  }

  const token = authorization.split(' ')[1];
  try {
    const userData = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = userData;
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({
      error: 'Token expired or invalid',
    });
  }
};
