module.exports = {
  routes: [
    {
      method: "POST",
      path: "/send-mail/rsvp",
      handler: "send-mail.sendRSVPMail",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
