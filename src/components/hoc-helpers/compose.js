const compose = (...fucns) => (comp) => {
  return fucns.reduceRight(
    (prevResult, f) => f(prevResult), comp);
};

export default compose;