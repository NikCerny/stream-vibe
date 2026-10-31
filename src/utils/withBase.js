const withBase = (path = "") => {
  const value = String(path);

  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(value)) return value;

  return `${import.meta.env.BASE_URL}${value.replace(/^\/+/, "")}`;
};

export default withBase;
