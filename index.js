import express from "express";
import "dotenv/config";
const app = express();
import helmet from "helmet";
import cors from "cors";

const PORT = process.env.PORT || 8000;

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

// * routes

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
