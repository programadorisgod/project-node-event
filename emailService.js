import { transporter } from "./configNodemailer.js"
import { html } from "./template.js";

export default class EmailService {
    async send(props) {
        const [email, price, date] = props

        const emailOptions = {
            from: process.env.user,
            to: email,
            subject: 'Información de compra' + date,
            html: html(price)
        }
        await transporter.sendMail(emailOptions)

        console.log(`Email sent successfully`);
    }
}