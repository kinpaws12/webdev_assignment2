const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, location, category, date, duration } = req.body;
    const event = await Event.create({
      title, description, location, category, date, duration,
      organizerId: req.user.id
    });
    res.status(201).json({ message: "Event created", event });
  } catch (err) {
    res.status(500).json({ message: "Error creating event", error: err.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: "Error fetching events", error: err.message });
  }
};
