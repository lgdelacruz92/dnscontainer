export const linetool = (val, t, threshold) => {
  const gl = glo(val, t);
  const gh = ghi(val, t);
  const [clG, dist] = closestG(val, gl, gh);
  const th = threshold || 2;
  if (dist <= th) {
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
