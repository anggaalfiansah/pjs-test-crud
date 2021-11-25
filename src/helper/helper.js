export const prosesTypeLocation = async (raw) => {
  const hasil = [];
  await Promise.all(
    Object.keys(raw).map((item) =>
      hasil.push({ label: raw[item], value: item })
    )
  );
  return hasil;
};
