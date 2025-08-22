const nodemailer = require("nodemailer")

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"thepankajkumar9020@gmail.com",
        pass:"oigl tyau xhbj gfis"
    },
});


const SendMail = async ()=>{
    try {
        const info = await transporter.sendMail({
            from: '"codebypankaj"<thepankajkumar9020@gmail.com>',
            to:"pk3355294@gmail.com",
            subject:"Hello Pankaj",
            text:"Hello Mr. Pankaj Jangid",
            html:"Hello Mr. Pankaj Jangid"
        })
        console.log(info)
    } catch (error) {
        console.log(error)
    }
}

// SendMail()

module.exports = {transporter};