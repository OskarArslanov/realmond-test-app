export const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, key: string, callback: () => void) => {
  if (e.code === key) {
    callback();
  }
};
