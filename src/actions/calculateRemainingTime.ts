export const calculateRemainingTime = (value: string | null) => {
  let expirationTime = '0';
  const currentTime = new Date().getTime();

  if (value) expirationTime = value;

  const adjustExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjustExpirationTime - currentTime;

  return remainingDuration;
};
