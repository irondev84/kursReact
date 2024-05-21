export const addItem =
  <T,>(nextItem: T) =>
  (prevItems: T[]): T[] =>
    [...prevItems, nextItem];

/**
   * Immutable replace element with same ID
   *
   * ```ts
    setPlaylists(replaceItemById(draft));
    ```
   *
   * @param item Item with Id
   * @returns new array with replaced Item
   */
export const replaceItemById =
  <T extends { id: string }>(item: T) =>
  (prevItems: T[]): T[] => {
    return prevItems.map((p) => (p.id == item.id ? item : p));
  };
