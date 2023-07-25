"use client";
type getAddressType = {
  latitude: number;
  longitude: number;
  setCenterAddress: (e: string) => void | null;
  setCenterAddressLoading: (e: boolean) => void | null;
};

const getAddress = async ({ latitude, longitude, setCenterAddress, setCenterAddressLoading }: getAddressType) => {
  setCenterAddressLoading(true);
  await fetch(`https://api.neshan.org/v5/reverse?lat=${latitude}&lng=${longitude}`, {
    method: "GET",
    headers: {
      "Api-Key": `service.67c090dfb3f74ac0b1c96b678cb4c649`,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      setCenterAddressLoading(false);
      setCenterAddress(res?.formatted_address);
    })
    .catch((error) => {
      setCenterAddressLoading(false);
      // console.error(error);
    });
};

export default getAddress;
