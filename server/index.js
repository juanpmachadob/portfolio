const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/email", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `${req.body.name} <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: req.body.subject,
      html: `<main>
      <b>Name:</b> ${req.body.name}<br/>
      <b>Email:</b> ${req.body.email}<br/>
      <br/><hr/><br/>
      <p>${req.body.message}</p>
      </main>`,
    });

    res.json({ msg: "Ok" });
  } catch (error) {
    res.status(500).json({ error});
  }
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
