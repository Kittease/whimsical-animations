const convertDegreesToRadians = (angle: number) => (angle * Math.PI) / 180;

const convertPolarToCartesian = (angle: number, distance: number) => {
  const angleInRadians = convertDegreesToRadians(angle);

  const x = Math.cos(angleInRadians) * distance;
  const y = Math.sin(angleInRadians) * distance;

  return [x, y];
};

export { convertPolarToCartesian, convertDegreesToRadians };
