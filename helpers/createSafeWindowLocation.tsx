const createSafeWindowLocation = () => {
  if (!window) return;
  const { origin, pathname } = window.location;
  const url = origin + pathname;
  return url;
};

export default createSafeWindowLocation;
