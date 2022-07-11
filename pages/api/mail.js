// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const mail = require('@sendgrid/mail')
import mail from '@sendgrid/mail'
mail.setApiKey('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')
// mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {
  const body = JSON.parse(req.body)
  console.log(body)
  const message = `
    Name : ${body.name}\r\n
    Email : ${body.email}\r\n
    Message : ${body.message}
  `

  const data = {
    to: body.email,
    from: 'nibas.1971@gmail.com',
    subject: 'hello from sid',
    message: body.message,
    html: message.replace(/\r\n/g, '<br>')
  }

  mail
    .send(data)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  res.status(200).json({ status: 'OK' })
}
