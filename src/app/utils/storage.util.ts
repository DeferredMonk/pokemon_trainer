export class StorageUtil {

  /**
   * Saves the user in the sessionStorage using the storage key.
   * @param {string} key 
   * @param {any} value 
   */
  public static storageSave<T>(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Reads the sessionStorage. 
   * Returns the stored value or  undefined if not found.
   * @param {string} key 
   * @returns {T | undefined} 
   */
  public static storageRead<T>(key: string): T | undefined {
    const storedValue = sessionStorage.getItem(key);
    try {
      if (storedValue) {
        return JSON.parse(storedValue) as T;
      }

      return undefined;
    } catch (e) {
      sessionStorage.removeItem(key);
      return undefined;
    }
  }

  /**
   * Removes the user from sessionStorage by its key. 
   * @param {string} key  
   */
  public static storageDelete<T>(key: string): void {
    sessionStorage.removeItem(key);
  }
}
