const nodeMailer=require("nodemailer");
const emailjs = require('@emailjs/nodejs');


const sendEmail=async(options)=>{
    
    const templateParams = {
        
        to_email: options.email,
        from_name: 'Harshita',
        reply_to: 'harshitapurwar07@gmail.com',
        message: options.subject,
       
      };
     
        
    
      const {EmailJSServiceId , EmailJsTemplateId , EmailJsPublicKey,EmailJsPrivateKey} = process.env
      console.log(EmailJSServiceId,EmailJsPrivateKey,EmailJsPublicKey,EmailJsTemplateId);
      
    
      emailjs
        .send(EmailJSServiceId, EmailJsTemplateId, templateParams, {
          publicKey: EmailJsPublicKey,
          privateKey: EmailJsPrivateKey, // optional, highly recommended for security reasons
        })
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
            console.log('FAILED...', err);
          },
        );
    

};

module.exports=sendEmail;

// const nodeMailer = require("nodemailer");

// const sendEmail = async (options) => {
//   const transporter = nodeMailer.createTransport({
//     host: process.env.SMPT_HOST,
//     port: process.env.SMPT_PORT,
//     service: process.env.SMPT_SERVICE,
//     auth: {
//       user: process.env.SMPT_MAIL,
//       pass: process.env.SMPT_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMPT_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;