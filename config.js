module.exports = {
    apis: [
        {
            name: 'customer',
            url: 'http://172.20.176.77:8000/customer/api-docs'
        },
        {
            name: 'clue',
            url: 'http://172.20.176.77:8000/clue/api-docs'
        }
    ],
    ouputDir: './dist',
    template: {
        model:
`
export default class <%id%> {
    /**
     * <%description%>
     <%#propertyList%>
    * @param {<%type%>} <%#required%>*<%/required%><%keyName%>
    <%/propertyList%>
    */
    constructor(
    <%#propertyList%>
    <%keyName%><%#defaultValue%>=.<%/defaultValue%>,
    <%/propertyList%>
    ){
        <%#propertyList%>
        this.<%keyName%> = <%keyName%>
        <%/propertyList%>
    }
}
`,
        ajax:
`
<%#outDetailList%>
export const <%objPath%> = {
    <%#outOperation%>
        /**
         * <%summary%>
        */
        <%method%>: async (
            <%queryString%>,
            <%#paramProperty%><%type%>,<%/paramProperty%>
            opt
        ) => {
            return await <%method%>(
                <%queryString%>,
                <%#paramProperty%>
                <%type%>,
                <%/paramProperty%>
                opt)
        },
    <%/outOperation%>
}
<%/outDetailList%>

`
    }
}
