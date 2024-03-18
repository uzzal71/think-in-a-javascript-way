const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      localtion: "Google Meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled!"));
  }
});

const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.localtion} at ${meetingDetails.time}`;
  return Promise.resolve(calendar);
};

async function myMeeting() {
  try {
    const meetingMetails = await meeting;
    const calendar = await addToCalendar(meetingMetails);
    console.log(calendar);
  } catch (error) {
    console.error(error);
  }
}

myMeeting();
