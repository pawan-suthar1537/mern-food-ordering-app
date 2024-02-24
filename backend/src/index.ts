import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

mongoose
  .connect(process.env.DB_URL as string)
  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port} 😪👍`);
    });
  })
  .catch((err: any) => {
    console.log(err);
    process.exit(1);
  });




