import express, { Request, Response } from 'express';
import * as fs from "fs";
import path from "path";
const app = express();

app.get("/", (req: Request, res: Response) => res.send("Express on Vercel"));

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get('/api/data', (req: Request, res: Response) => {
  const filePath = path.join(__dirname, '..', 'public', 'coffee_menu.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send(`Error reading file: ${err}`);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).send('Internal Server Error');
    }
  });
});


const port = process.env.PORT;
app.listen(port, () => console.log(`Server ready on port ${port}.`));

module.exports = app;
