module.exports = {
  config: {
    "api::rsvp.rsvp": {
      columns: [
        "attendance_code",
        "is_attended",
        "attended_at",
        "motivation",
        "expectation",
        "achieved_xp_point",
      ],
      relation: {
        user: {
          column: ["email"],
        },
        event: {
          column: ["slug"],
        },
        rsvp_status: {
          column: ["status"],
        },
      },
      locale: "false",
    },
  },
};
