export const getExpireDate = (hours) => {
    var date = new Date();
    var expiry = new Date(date.getTime() + hours * 60 * 60 * 1000);
    return expiry;
  };