module.exports = {
  config: {
    "api::rsvp.rsvp": {
      columns: ["attendance_code", "is_attended", "attended_at"],
      relation: {
        user_id: {
          column: ["id"],
        },
        event_id: {
          column: ["id"],
        },
        rsvp_status_id: {
          column: ["id"],
        },
      },
      locale: "false",
    },
  },
};
