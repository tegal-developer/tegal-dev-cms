module.exports = ({ env }) => ({
  transformer: {
    enabled: true,
    config: {},
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("MAIL_DEFAULT_FROM"),
        defaultReplyTo: env("MAIL_DEFAULT_REPLY_TO"),
      },
    },
  },
  "qrcode-generator": {
    enabled: true,
  },
});
