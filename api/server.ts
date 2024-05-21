import express, { Request, Response } from 'express';
const app = express();

app.get("/", (req: Request, res: Response) => res.send("Express on Vercel"));

const port = process.env.PORT;
app.listen(port, () => console.log(`Server ready on port ${port}.`));

module.exports = app;
