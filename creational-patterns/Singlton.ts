class AnObjectToGetSingletonedClass {
    private static _instance:AnObjectToGetSingletonedClass = new AnObjectToGetSingletonedClass();

    if (AnObjectToGetSingletonedClass._instance) {
        throw new Error("Initiallization not allowed. Use getInstance instead of new.")
    }
    AnObjectToGetSingletonedClass._instance = this;


    public static getInstance():AnObjectToGetSingletonedClass
    {
        return AnObjectToGetSingletonedClass._instance;
    }
}