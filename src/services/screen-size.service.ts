function getWindowsDimensions() {
  const { innerHeight: height, innerWidth: width } = window;
  return {
    width,
    height,
  };
}

export { getWindowsDimensions };
