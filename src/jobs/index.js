import scheduler from "node-schedule";
function log() {
  return  console.log("Hello World!");
}
export default () => {

  const jobs = [
    {
      frequency: "* * * * *",
      handler: log,
    },
    {
      frequency: "* * * * *",
      handler: log,
    }
  ];

  jobs.forEach((job) => {
    scheduler.scheduleJob(job.frequency, job.handler);
  });

  console.log("Jobs scheduled");
};
