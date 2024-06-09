module.exports = {
  config: {
    "api::rsvp.rsvp": {
      columns: ["attendance_code", "is_attended", "attended_at"],
      relation: {
        user: {
          column: ["name"],
        },
        event: {
          column: ["title"],
        },
        rsvp_status: {
          column: ["status"],
        },
      },
      locale: "false",
    },
  },
};
