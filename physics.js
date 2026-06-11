const getAcceleration = ({ f, m, Δv, Δt, d, t }) => {
  if (f !== undefined && m !== undefined && m !== 0) return f / m;
  if (Δv !== undefined && Δt !== undefined && Δt !== 0) return Δv / Δt;
  if (d !== undefined && t !== undefined && t !== 0) return (2 * d) / (t ** 2);
  return 'impossible';
};
