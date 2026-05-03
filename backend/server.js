const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const twilio = require("twilio");


const app = express();

app.use(cors());
app.use(express.json());

// 🔗 Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",   // XAMPP default is empty
    database: "portfolio1"
});

// connect DB
db.connect((err) => {
    if (err) {
        console.log("DB connection error:", err);
    } else {
        console.log("✅ Connected to MySQL database");
    }
});
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = twilio(
  accountSid,
  authToken
);

// Contact route
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    // 1. Save to database
    const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database error" });
        }

        // 2. Send SMS to YOU
        client.messages.create({
            body: `New message from ${name} (${email}): ${message}`,
            from: "+1 507 632 6783",
            to: "+251943583323"
        })
        .then(() => {
            res.json({ message: "Message sent successfully!" });
        })
        .catch((smsErr) => {
            console.log("SMS error:", smsErr);
            res.json({ message: "Saved but SMS failed" });
        });
    });
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});