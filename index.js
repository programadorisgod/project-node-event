import EmailService from "./emailService.js"
import TicketManager from "./TicketManager.js"

const ticketManager = new TicketManager(40)
const emailService = new EmailService

const testEmail = [
    { email: "testeventemmiter1@gmail.com", price: 9.99 },
    { email: "testeventemmiter20@outlook.com", price: 14.50 },
    { email: "testeventemmiter2@gmail.com", price: 5.75 },
]

ticketManager.on("buy", async (...props) => {
    await emailService.send(props)
})


testEmail.forEach(user => {
    ticketManager.buy(user.email, user.price)
})