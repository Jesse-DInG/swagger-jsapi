export default interface ApiFactoryConfig {
    apis: Array<{
        name: string,
        url: string
    }>,
    outputDir: string,
    ajaxModulePath: string,
    operations: Array<string>,
    template: {
        model: string,
        ajax: string
    }
}
