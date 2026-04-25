import app from "./app.js";


console.log('Starting server...');
app.listen(6000, () => {
  console.log('Server is running on port 6000');
});
