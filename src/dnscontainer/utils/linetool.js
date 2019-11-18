export const linetool = (val, t, threshold, max) => {
  const gl = glo(val, t);
  const gh = ghi(val, t);
  const [clG, dist] = closestG(val, gl, gh);
  const th = threshold || 2;
  const m = max || 100;
  if (dist <= th && t <= clG && clG <= m - t) {
    return [clG, dist];
  } else {
    return null;
  }
};

export const glo = (m, t) => {
  return Math.floor(m / t) * t;
};

export const ghi = (m, t) => {
  return Math.ceil(m / t) * t;
};

export const closestG = (m, gl, gh) => {
  const lo = m - gl;
  const hi = gh - m;
  if (lo < hi) {
    return [gl, lo];
  } else {
    return [gh, hi];
  }
};
