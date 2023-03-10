export const otpEmailTemplate = (OTP: string) =>
  `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OTP for InOffice</title>
    <style>
    .main-container {
      width: 100%;
      background-color: #7979fd98;
      height: 400px;
      position: relative;
      /* display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center; */
      margin: auto;
      padding-top: 1px;
    }
    .app-name {
      font-size: 26px;
      letter-spacing: 1.4px;
      color: #ffff;
      font-weight: 500;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 22px 0 12px 0;
      text-align: center;
    }
    .email-icon {
      width: 40px;
      margin-top: 8px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .otp-container {
      background-color: #ffff;
      width: 400px;
      height: 65%;
      border-radius: 2px;
      /* display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; */
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 6px;
      padding: 14px 8px;
    }
    .title {
      font-size: 18px;
      letter-spacing: 1.1px;
      color: #444343;
      font-weight: 500;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 24px 0 0 0;
      text-align: center;
    }
    .sub-title {
      font-size: 14px;
      letter-spacing: 1px;
      color: #6e6e6e;
      font-weight: 400;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 6px 0 0 0;
      text-align: center;
    }
    .otp {
      font-size: 42px;
      letter-spacing: 14px;
      color: #333333;
      font-weight: 500;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 30px 0 0 16px;
      text-align: center;
    }
    .warning-msg {
      font-size: 12px;
      letter-spacing: 0.8px;
      color: #7e7d7dd9;
      font-weight: 400;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 6px 0 0 0;
      text-align: center;
    }
    .footer-menu {
      /* display: flex; */
      /* margin-bottom: 2px; */
      font-size: 14px;
      letter-spacing: 1.1px;
      /* margin: 12px 0 0 0; */
      text-align: center;
    }
    .menu-item {
      font-size: 12px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      color: #ffff;
      opacity: 0.65;
      text-decoration: none;
    }
    .menu-divider {
      margin: 0 5px 0 5px;
      color: #ffff;
      opacity: 0.6;
    }
  </style>
  </head>
  <body>
    <div class="main-container">
      <p class="app-name">???? FarmFresh</p>
      <div class="otp-container">
        <img
          src="https://res.cloudinary.com/vastia/image/upload/v1666162762/anthill/otp-email-icon_a93v9t.png"
          alt="'email-icon"
          class="email-icon"
        />
        <p class="title">Here is your Verification Code</p>
        <p class="sub-title">To validate your email address</p>
        <p class="otp">${OTP}</p>
        <p class="warning-msg">valid for 2 minutes</p>
      </div>
      <p class="footer-menu">
        <a href="https://antstack.com" target="_blank" rel="'noreferrer" class="menu-item">FAQs</a>
        <span class="menu-divider">|</span>
        <a href="https://antstack.com" target="_blank" rel="'noreferrer" class="menu-item"
          >Terms & Conditions</a
        >
        <span class="menu-divider">|</span>
        <a href="https://antstack.com" target="_blank" rel="'noreferrer" class="menu-item">Contact Us</a>
      </p>
    </div>
  </body>
</html>
  `;
