export const isScrolledToBottom = (scrollTop: number, clientHeight: number, scrollHeight: number): boolean => {
  return Math.abs(scrollTop + clientHeight - scrollHeight) <= 10;
};
