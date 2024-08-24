import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import nodemailer, { Transporter } from 'nodemailer';
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
        .then(() => console.log("Connected to DB"))
        .catch(err => console.error("Database connection error:", err));

const app = express();
const PORT: number | string = process.env.PORT || 7000;

app.use(express.json())
app.use(cors())

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "hello" });
});

// Handle form submission
app.post('/submit-form', (req: Request, res: Response) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).send('Missing required fields');
    }
    const transporter: Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ADDRESS as string,  // replace with your email
            pass: process.env.EMAIL_PASSWORD as string,   // replace with your email password or app password
        },
    });
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_ADDRESS as string,
        subject: `New message from ${name}`,
        text: message,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // Log the error
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Form submission successful');
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
