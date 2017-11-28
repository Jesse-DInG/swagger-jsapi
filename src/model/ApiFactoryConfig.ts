export default interface ApiFactoryConfig {
    apis: Array<{
        name: string,
        url: string
    }>,
    ouputDir: string,
    template: {
        model: string,
        ajax: string
    }
}
