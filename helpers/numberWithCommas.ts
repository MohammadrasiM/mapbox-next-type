export const numberWithCommas = (value: number | undefined | string) => {
  if (value) {
    const val = (Number(value) / 100).toFixed(2);
    const commaVal = val?.replace(".", ",");
    return commaVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } else {
    return 0;
  }
};
