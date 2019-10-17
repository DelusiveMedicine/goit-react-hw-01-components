const randomColor = () => {
  const first = Math.floor(Math.random() * 256);
  const second = Math.floor(Math.random() * 256);
  const third = Math.floor(Math.random() * 256);
  const color = `rgb(${first},${second},${third})`;
  return color;
};

export default randomColor;
