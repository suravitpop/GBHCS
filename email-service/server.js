const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3001

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pop.suravit29@gmail.com', // Replace with your Gmail address
    pass: 'gnawbvxqwnxczuvd' // Replace with your Gmail password
  }
})

app.post('/api/contact', (req, res) => {
  const { name, email, message, selected, birthdate, passport } = req.body

  const mailOptions = {
    from: email,
    to: 'pop.suravit@gmail.com',
    subject: 'Contact Form Submission',
    html: `
      <h1>Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Birthdate:</strong> ${birthdate}</p>
      <p><strong>Passport:</strong> ${passport}</p>
      <p><strong>Health Conditions:</strong> ${selected}</p>
      <p><strong>Expectation:</strong> ${message}</p>
    `
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error)
      res.status(500).send('Failed to send email')
    } else {
      console.log('Email sent:', info.response)
      res.status(200).send('Email sent successfully')
    }
  })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
