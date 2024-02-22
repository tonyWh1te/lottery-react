function distributeGifts() {
  let IDs = [1, 1, 1, 2, 2, 2, 3, 3, 3];

  for (let i = IDs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [IDs[i], IDs[j]] = [IDs[j], IDs[i]];
  }

  return IDs;
}

export { distributeGifts };
