const { transporter } = require("./EmailConfig.js")

const Sendverificationcode = async (email,VerificationCode)=>{
    try {
        const respose = await transporter.sendMail({
                    from: '<thepankajkumar9020@gmail.com>',
                    to:email,
                    subject:"Verify your email",
                    text:`Your verification code is : ${VerificationCode}`,
                    html:
                        `<div style="font-family: Arial, sans-serif; text-align:center; padding:20px;">
          <h2>Email Verification</h2>
          <p>Use the code below to verify your email:</p>
          <div style="font-size:24px; font-weight:bold; background:#f3f3f3; padding:10px; display:inline-block; border-radius:5px;">
            ${VerificationCode}
          </div>
          <p style="margin-top:20px; font-size:14px; color:#666;">
            If you didn't request this, you can safely ignore this email.
          </p>
        </div>
        `,
    });

    console.log("Verification code:", VerificationCode, "Sent to:", email);
    console.log("Email sent successfully ✅", response.messageId);
        console.log(VerificationCode,email)
        console.log("Email send successfully",respose)
    } catch (error) {
        console.log("Email error")
    }
}

module.exports = {Sendverificationcode}