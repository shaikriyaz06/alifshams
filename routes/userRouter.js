const express = require("express");
const router = express.Router();
const multer = require("multer");
const fsPromises = require("fs/promises");
const path = require("path");
const fs = require("fs");
// // const connection = require("../connection/connect");
const { transporter } = require("../utilities/mail");
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdir(uploadDir, { recursive: true }, (err) => {
    if (err) {
      console.error("Error creating upload directory:", err);
    }
  });
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueFilename = `${file.originalname}`;
    cb(null, uniqueFilename);
  },
});
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
router.post("/mail", async (req, res) => {
  const {
    name,
    email,
    message,
    phone,
    countryCode,
    serviceOfInterest,
    companyName,
    userType,
  } = req.body;
  const mailOptions = {
    from: "testpilotsamctg@gmail.com",
    to: "shaikriyaz222@gmail.com;tcp.handshaikh@outlook.com",
    subject: `Client: ${name} wants to get in touch with you!!`,
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333;
              background-color: #f4f4f4;
              padding: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
              background-color: #ffffff;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            th, td {
              padding: 10px;
              text-align: left;
              border-bottom: 1px solid #ddd;
            }
            th {
              background-color: #4CAF50;
              color: white;
            }
            tr:nth-child(even) {
              background-color: #f2f2f2;
            }
            tr:hover {
              background-color: #ddd;
            }
          </style>
        </head>
        <body>
          <h2>User Information</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>User Type</th>
              <th>Company</th>
              <th>Service</th>
              <th>Email</th>
              <th>Country Code</th>
              <th>Number</th>
              <th>Message</th>
            </tr>
            <tr>
              <td>${name}</td>
              <td>${userType}</td>
              <td>${companyName}</td>
              <td>${serviceOfInterest}</td>
              <td>${email}</td>
              <td>${countryCode}</td>
              <td>${phone}</td>
              <td>${message}</td>
            </tr>
          </table>
        </body>
      </html>
    `,
  };
  await transporter.sendMail(mailOptions);
  res.send("Email sent successfully!!");
});
router.post(
  "/contactus",
  upload.fields([{ name: "resume", maxCount: 1 }]),
  async (req, res) => {
    const {
      name,
      email,
      phone,
      yearsOfExperience,
      availability,
      education,
      keySkills,
      userType,
      countryCode,
    } = req.body;
    const linkedinProfile = req.body.linkedinProfile || "NA";
    const portfolio = req.body.portfolio || "NA";
    const coverLetter = req.body.coverLetter || "NA";
    let mailOptions = {
      from: "testpilotsamctg@gmail.com",
      to: "shaikriyaz222@gmail.com;tcp.handshaikh@outlook.com",
      subject: `Job Seeker: ${name} wants to join your team!`,
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                color: #333;
                background-color: #f4f4f4;
                padding: 20px;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
                background-color: #ffffff;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
              }
              th, td {
                padding: 10px;
                text-align: left;
                border-bottom: 1px solid #ddd;
              }
              th {
                background-color: #4CAF50;
                color: white;
              }
              tr:nth-child(even) {
                background-color: #f2f2f2;
              }
              tr:hover {
                background-color: #ddd;
              }
            </style>
          </head>
          <body>
            <h2>User Information</h2>
            <table>
              <tr>
                <th>Name</th>
                <th>User Type</th>
                <th>Email</th>
                <th>Country Code</th>
                <th>Phone</th>
                <th>Experience</th>
                <th>Availability</th>
                <th>Education</th>
                <th>Linkedin Profile</th>
                <th>Portfolio</th>
                <th>Key Skills</th>
                <th>Cover Letter</th>
              </tr>
              <tr>
                <td>${name}</td>
                <td>${userType}</td>
                <td>${email}</td>
                <td>${countryCode}</td>
                <td>${phone}</td>
                <td>${yearsOfExperience}</td>
                <td>${availability}</td>
                <td>${education}</td>
                <td>${linkedinProfile}</td>
                <td>${portfolio}</td>
                <td>${keySkills}</td>
                <td>${coverLetter}</td>
              </tr>
            </table>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: path.basename(req.files.resume[0].path),
          path: req.files.resume[0].path,
        },
      ],
    };
    // console.log(req.files.resume[0].path)
    await transporter.sendMail(mailOptions);
    await fsPromises.unlink(req.files.resume[0].path);
    res.send("Email sent successfully!!");
  }
);

module.exports = router;
