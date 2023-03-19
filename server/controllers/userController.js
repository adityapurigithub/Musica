export const getAuthUser = async (req, res) => {
  const validUser = req.user;

  console.log(validUser);
  return res.status(200).json({
    user: validUser,
  });
};
