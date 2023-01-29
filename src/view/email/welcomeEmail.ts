export const welcomeEmailTemplate = (firstName: string) =>
  `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>OTP for InOffice</title>
      <style>
        .main-container {
          margin: auto;
          padding-top: 1px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-weight: 200;
        }
        .button {
          background-color: #7a79fd;
          border-radius: 4px;
          padding: 8px 16px;
          font-size: 14px;
          border: none;
          outline: none;
          color: #ffff !important;
          text-decoration: none;
          display: block;
          width: 10rem;
          text-align: center;
          margin-top: 10px;
        }
        .text {
          font-weight: 400;
          color: #323232;
          font-size: 15px;
          margin: 0;
          opacity: 0.85;
        }
        .light-text {
          font-size: 12.5px;
          opacity: 0.6;
          font-weight: 400;
          margin: 10px 0 0 2px;
          /* margin-top: -4px; */
        }
      </style>
    </head>
    <body>
      <div class="main-container">
        <p class="text">
          Welcome to FarmFresh <strong>${firstName}</strong>, <br />
          Complete a quick onboarding to start using app.
        </p>
  
        <a href="https://app.inoffice.today/onbaording/?step=1" target="_blank" class="button">
          Complete onboarding
        </a>
        <p class="light-text">Ignore if completed.</p>
      </div>
    </body>
  </html>  
  `;
