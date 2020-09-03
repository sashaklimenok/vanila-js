const carry = (func) => (
  (date) => (importance) => (
    (message) => func(date, importance, message)
  )
);

const logged = (date, importance, message) => {
  console.log(
      `[${date.getHours()}: ${date.getMinutes()}]`,
      `[${importance}]`,
      `[${message}]`,
  );
};

const log = carry(logged);
const logNow = log(new Date());
logNow('INFO')('message');

