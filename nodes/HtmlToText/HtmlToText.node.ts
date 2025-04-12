import {
    IDataObject,
    IExecuteFunctions,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
    // IRequestOptions,
    // IDataObject,
    NodeConnectionType,
    // IHttpRequestOptions
} from 'n8n-workflow';

import { convert } from "html-to-text";

export class HtmlToText implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'HtmlToText',
        name: 'htmlToText',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        description: 'Download Facebook video and reel using @xaviabot/fb-downloader package',
        defaults: {
            name: 'htmlToText',
        },
        inputs: [NodeConnectionType.Main], // eslint-disable-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
        outputs: [NodeConnectionType.Main], // eslint-disable-line n8n-nodes-base/node-class-description-outputs-wrong
        credentials: [

        ],

        properties: [
            {
                displayName: 'HTML',
                name: 'html',
                type: 'string',
                placeholder: 'https://...',
                default: '',
                required: true,
            },
        ],
    };
    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        let responseData: IDataObject = {}

        const html = this.getNodeParameter('html', 0) as string;

        try {

            const text = convert(html, {
                wordwrap: false,
            });

            responseData = { text } as unknown as IDataObject


        } catch (error) {
            // This node should never fail but we want to showcase how
            // to handle errors.
            if (this.continueOnFail()) {
                // handle continue on fail, maybe we return an empty array?
            } else {
                // Adding `itemIndex` allows other workflows to handle this error
                /*
                if (error.context) {
                    // If the error thrown already contains the context property,
                    // only append the itemIndex
                    error.context.itemIndex = itemIndex;
                    throw error;
                }
                throw new NodeOperationError(this.getNode(), error, {
                    itemIndex,
                });
                */
                throw error
            }
        }



        // Map data to n8n data
        // return [this.helpers.returnJsonArray(responseData)];
        return [[{ json: responseData }]];
    }
}