"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log("Connected to DB"))
    .catch(err => console.error("Database connection error:", err));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 7000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Middleware to parse form data
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.get("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "hello" });
}));
// Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, phone, email, message } = req.body;
    if (!name || !phone || !email || !message) {
        return res.status(400).send('Missing required fields');
    }
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ADDRESS, // replace with your email
            pass: process.env.EMAIL_PASSWORD, // replace with your email password or app password
        },
    });
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_ADDRESS,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
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
