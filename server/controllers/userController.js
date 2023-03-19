export const getAuthUser = (req, res) => {
  const validUser = req.user;

  return res.status(200).json({
    user: validUser,
  });
};
