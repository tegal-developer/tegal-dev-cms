"use strict";

module.exports = {
  sendRSVPMail: async (ctx, next) => {
    try {
      const {
        rsvpName,
        rsvpEmail,
        rsvpAttendanceQRCode,
        eventName,
        eventDate,
        eventTime,
        eventLocation,
        eventGMAPLocationLink,
      } = ctx.request.body;

      console.log(rsvpAttendanceQRCode);

      await strapi
        .plugin("email")
        .service("email")
        .send({
          to: rsvpEmail,
          from: process.env.MAIL_DEFAULT_FROM,
          subject: "Informasi Pendaftaran Event Tegal Dev",
          text: "Informasi Pendaftaran Event Tegal Dev",
          html: `<!DOCTYPE html>
          <html lang="id">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Booking Confirmation</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  color: #333;
                  line-height: 1.6;
                  margin: 0;
                  padding: 0;
                }
                .container {
                  width: 100%;
                  max-width: 600px;
                  margin: 20px auto;
                  background: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .image {
                  width: 100px;
                  margin: 12px auto;
                }
                .logo-image {
                  width: 100px;
                  margin: 12px auto;
                }
                .header {
                  text-align: center;
                  padding: 10px 0;
                }
                .header h1 {
                  margin: 0;
                  font-size: 24px;
                }
                .content {
                  margin: 20px 0;
                }
                .content p {
                  margin: 10px 0;
                }
                .content p .event-name {
                  font-weight: bold;
                }
                .contact {
                  display: flex;
                  align-items: center;
                  padding: 6px 0;
                }
                .contact-link {
                  text-decoration: none;
                }
                .contact-image {
                  width: 20px;
                  margin-right: 10px;
                }
                .footer {
                  text-align: center;
                  margin-top: 20px;
                  padding: 10px 0;
                  background-color: #f4f4f4;
                  border-top: 1px solid #ccc;
                }
              </style>
            </head>
            <body>
              <div class="image">
                <img src="https://res.cloudinary.com/dv0q5v4l8/image/upload/v1717877757/Tegal_dev_BB_10163b9a82.png" alt="Tegal Dev" class="logo image" />
              </div>
              <div class="container">
                <div class="header">
                  <h1>Informasi Pendaftaran Event Tegal Dev</h1>
                </div>
                <div class="content">
                  <p>Hai ${rsvpName},</p>
                  <p>Selamat! Kamu terdaftar pada event <span class="event-name">${eventName}</span> Berikut informasi event-nya:</p>
                  </p>
                  <label>Tanggal: ${eventDate}</label><br />
                  <label>Waktu: ${eventTime}</label><br />
                  <label>Tempat: <a href="${eventGMAPLocationLink}" target="_blank"">${eventLocation}</a></label><br />
                  <a href=${rsvpAttendanceQRCode} target="_blank">Download QR Code</a><br />
                  <p>Salam,</p>
                  <div>Tegal Dev Core Team</div>
                  <div class="contact">
                    <img src="https://res.cloudinary.com/dv0q5v4l8/image/upload/v1717862539/web_097aba8104_87c7a35a51.png" alt="website logo" class="contact-image" />
                    <a href="https://tegal.dev/" class="contact-link">
                      <div>tegal.dev</div>
                    </a>
                  </div>
                  <div class="contact">
                    <img src="https://res.cloudinary.com/dv0q5v4l8/image/upload/v1717862547/phone_a3a3689697_6daace902a.png" alt="phone logo" class="contact-image" />
                    <div>+62 831-7322-7143</div>
                  </div>
                </div>
                <div class="footer">
                  <p>&copy; 2024 Tegal Dev. All rights reserved.</p>
                </div>
              </div>
            </body>
          </html>
`,
        });

      ctx.body = {
        error: false,
        message: "rsvp mail information has sent successfully",
      };
    } catch (err) {
      ctx.body = err;
    }
  },
};
