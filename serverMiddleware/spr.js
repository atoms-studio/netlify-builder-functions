module.exports = function(req, res, next) {
  const maxage = process.env.SPR_MAX_AGE || 10;
  res.setHeader("Cache-Control", `s-maxage=${maxage}, stale-while-revalidate`);
  next();
};
