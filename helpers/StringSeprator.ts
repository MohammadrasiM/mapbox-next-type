import React from "react";

const StringSeprator = (word: string, count: number = 4) => {
  const regex = new RegExp("d{" + count + "}(?=.)", "g");
  console.log(`${word}`.replace(regex, "$& "), "sssss");

  return `${word}`.replace(`/\d{${count}}(?=.)/g`, "$& ");
};

export default StringSeprator;
