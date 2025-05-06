export const HelloWorld = (req, res) => {
  res.status(200).json({
    message: 'Hello World from backend!',
  });
}