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
    operations:['get','post'],
    outputDir: './dist',
    ajaxModulePath:'../http',
    template: {
        model:
            `
<%#modelList%>
export class <%id%> {
    /**
    * <%description%>
     <%#propertyList%>
    * @param {<%type%>} <%keyName%>
    <%/propertyList%>
    */
    constructor (
        <%#propertyList%>
        <%keyName%><%#defaultValue%>=.<%/defaultValue%>,
        <%/propertyList%>
    ) {
        <%#propertyList%>
        this.<%keyName%> = <%keyName%>
        <%/propertyList%>
    }
}
<%/modelList%>
`,
        ajax:
            `
import { get, post } from '<%#ajaxModulePath%><%/ajaxModulePath%>'
import {
    <%#modelList%>
    <%id%>,
    <%/modelList%>
} from './<%apiName%>Model'
<%#restList%>
/**
 * <%description%>
 */
<%#outDetailList%>
export const <%objPath%> = {
    <%#outOperation%>
    /**
     * <%summary%>
     <%#pathProperties%>
        * @param {<%type%>} <%name%>
        <%/pathProperties%>
        <%#queryProperties%>
        * @param {<%type%>} <%name%>
        <%/queryProperties%>
        <%#paramProperty%>
        * @param {<%type%>} <%type%>
        <%/paramProperty%>
    */
    <%method%>: async (
        <%#pathProperties%><%name%>, <%/pathProperties%><%#queryProperties%><%name%>, <%/queryProperties%><%#paramProperty%><%name%>, <%/paramProperty%>opt
    ) => {
        return await <%method%>(\`<%#wrapUrl%><%#pathProperties%>/<%name%><%/pathProperties%><%/wrapUrl%>\`,
            <%#paramProperty%>
            <%name%>,
            <%/paramProperty%>
            opt)
    },
    <%/outOperation%>
}
<%/outDetailList%>
<%/restList%>
`
    }
}
