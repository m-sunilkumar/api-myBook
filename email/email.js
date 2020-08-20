const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "msunkumdi@gmail.com",
    subject: `welcome to Task App ${name}`,
    text: `hello ${name} have a wonderful experience with task app`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "msunkumdi@gmail.com",
    subject: `Good bye ${name}`,
    text: `hello ${name},What made to you to cancel your account and how we can improve your experience with our application.Hope to see you soon back`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
