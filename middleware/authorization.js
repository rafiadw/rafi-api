import jwt from "jsonwebtoken";

export const authorization = async (req, res, next) => {
  try {
    if (req.headers && req.headers.authorization) {
      const decode = await jwt.verify(
        req.headers.authorization.split(" ")[1],
        "secret"
      );
      req.user = decode;
      res.status(200).json({ data: req.user });
      next();
    }
  } catch (error) {
    res.status(401).json({ message: "invalid authorization" });
    next();
  }
};
