export const getAuthUser = async (req, res) => {
  const validUser = req.user;

  return res.status(200).json({
    user: validUser,
  });
};
