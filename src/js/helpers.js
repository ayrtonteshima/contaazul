export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

export const delegate = (eventName, className, cb) => {
  const checkTarget = target =>
    target.classList && target.classList.contains(className);

  document.addEventListener(eventName, (event) => {
    let { target } = event;
    let search = true;

    if (!checkTarget(target)) {
      while (target.className && search) {
        target = target.parentNode;
        if (checkTarget(target)) {
          search = false;
        }
      }
    }

    if (checkTarget(target)) {
      cb.call(target, event);
    }
  });
};
