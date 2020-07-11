const numberOfSeconds = 1;

const sleep = (arg, fn, seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (fn) {
        fn();
      }
      resolve(arg);
    },
    (seconds || numberOfSeconds) * 1000);
  });
};

export default sleep;
