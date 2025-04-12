import { IExecuteFunctions } from "n8n-workflow";
import { HtmlToText } from "./HtmlToText.node";




; (async function () {
    console.log("Running")

    // Mock `this` context
    const fakeThis = {
        getInputData: () => [{ json: { key: "value" } }],
        getNodeParameter: (paramName: string, index?: number) => {
            const mockParams: { [key: string]: string | number } = {
                html: "<p>The HTML editor allows users to create HTML templates in their workflows. The editor supports standard HTML, CSS in <code>&lt;style&gt;</code> tags, and expressions wrapped in <code>{{}}</code>. Users can add <code>&lt;script&gt;</code> tags to pull in additional JavaScript. n8n doesn't run this JavaScript during workflow execution.</p>"
            };
            return mockParams[paramName] || null; // Return the mock parameter
        },
    };

    const node = new HtmlToText()

    const response = await node.execute.call(fakeThis as unknown as IExecuteFunctions)

    console.log(response[0][0].json)
})()