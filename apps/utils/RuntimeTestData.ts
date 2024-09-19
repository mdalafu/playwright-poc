export class RuntimeTestData {
    private static data: Record<string, any> = {};

    /**
     * Adds a key-value pair to the test data storage.
     * 
     * @param key The unique key for the data.
     * @param value The data to be stored.
     */
    public static set(key: string, value: any): void {
        this.data[key] = value;
    }

    /**
     * Retrieves the data associated with a specific key.
     * 
     * @param key The key of the data to retrieve.
     * @returns The data associated with the key, or undefined if not found.
     */
    public static get(key: string): any {
        return this.data[key];
    }

    /**
     * Checks if the given key exists in the test data storage.
     * 
     * @param key The key to check for existence.
     * @returns True if the key exists, false otherwise.
     */
    public static has(key: string): boolean {
        return this.data.hasOwnProperty(key);
    }

    /**
     * Removes the data associated with a specific key.
     * 
     * @param key The key of the data to remove.
     */
    public static remove(key: string): void {
        delete this.data[key];
    }

    /**
     * Clears the entire test data storage.
     */
    public static clear(): void {
        this.data = {};
    }
}
