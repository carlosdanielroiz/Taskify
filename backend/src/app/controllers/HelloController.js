class HelloController {
  async index(req, res) {
    return res.status(200).json({ message: "Hello, World!"})
  }
}

export default new HelloController();