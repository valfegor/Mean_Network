const User = require("../models/user");
const Role = require("../models/role");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.password || !req.body.email)
    return res.status(400).send("Sorry the Camps please check");

  const existingEmail = await User.findOne({ email: req.body.email });

  if (existingEmail) return res.status(400).send("Sorry the email dont exists");

  const hash = await bcrypt.hash(req.body.password, 10);

  let role = await Role.findOne({ name: "user" });
  console.log(role);

  if (!role) return res.status(400).send("Sorry the role dont exist");

  const user = new User({
    name: req.body.name,
    password: hash,
    email: req.body.email,
    roleId: role._id,
    Status: true,
  });

  let result = await user.save();

  if (!result) return res.status(400).send("Sorry the User Cant save");

  try {
    const jwtToken = user.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (error) {
    return res.status(400).send("Cant save please try again");
  }
};

const login = async (req, res) => {
  if (!req.body.password || !req.body.email)
    return res.status(400).send("Sorry check all the camps please");

  let user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send("Sorry the password or email incorrect");

  let hash = await bcrypt.compare(user.password, req.body.password);

  if (!hash)
    return res.status(400).send("Sorry the password or email incorrect");

    try {
        const jwtToken = user.generateJWT();
        return res.status({jwtToken});
    } catch (e) {
        return res.status(400).send("Cant login");
    }
};

module.exports = { registerUser , login };
