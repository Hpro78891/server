module.exports = Object.freeze({
//smtp config
MAIL_FROM : "adambrown@resumegod.com",
MAIL_HOST : "smtpout.secureserver.net",
MAIL_PORT : "465",
MAIL_USER : "adambrown@resumegod.com",
MAIL_PASS : "resumegod@123",

//Mail constant
TO : "shivnath0001@gmail.com",
SUBJECT : "Start Landing More Interviews With A Professionally Written Resume!",
MESSAGE : `<div className="email" style="
                        border: 1px solid black;
                        padding: 20px;
                        font-family: sans-serif;
                        line-height: 2;
                        font-size: 20px; 
                        ">
                        <h2>Here is your email!</h2>
                        <p>[%name%],[%email%],[%topic%],[%message%]</p>

                        <p>All the best, Darwin</p>
                         </div>`
});


