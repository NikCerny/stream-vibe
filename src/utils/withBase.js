const withBase = (path = "") =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, "")}`;

export default withBase;
