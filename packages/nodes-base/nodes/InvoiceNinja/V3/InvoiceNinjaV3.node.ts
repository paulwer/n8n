import { NodeOperationError } from 'n8n-workflow';

import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
} from 'n8n-workflow';

import { InvoiceNinjaV4 } from './v4/InvoiceNinjaNode';

import { InvoiceNinjaV5 } from './v5/InvoiceNinjaNode';

export class InvoiceNinjaV3 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			version: 3,
			defaults: {
				name: 'Invoice Ninja',
			},
			inputs: ['main'],
			outputs: ['main'],
			credentials: [
				{
					name: 'invoiceNinjaApi',
					required: true,
				},
			],
			properties: [
				{
					displayName: 'API Version',
					name: 'apiVersion',
					type: 'options',
					isNodeSetting: true,
					description:
						'Invoice Ninja supports 2 Product Versions. Please read the docs to decide, which version is needed.',
					options: [
						{
							name: 'Version 4',
							value: 'v4',
						},
						{
							name: 'Version 5',
							value: 'v5',
						},
					],
					default: 'v5',
				},
				// V4
				...InvoiceNinjaV4.description.properties,
				// V5
				...InvoiceNinjaV5.description.properties,
				// JSON
				{
					displayName: 'Additional JSON Body',
					description:
						'You can provide additional properties in a JSON form. These parameters will be merged with the parameters above. <b>Note:</b> Do not provide an top level array.',
					name: 'jsonBody',
					type: 'json',
					default: '{}',

					displayOptions: {
						show: {
							operation: ['create', 'update', 'action'],
						},
					},
				},
			],
		};
	}

	methods = {
		loadOptions: {
			...InvoiceNinjaV4.methods.loadOptions,
			...InvoiceNinjaV5.methods.loadOptions,
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const apiVersion = this.getNodeParameter('apiVersion', 0) as string;

		if (apiVersion == 'v4') return InvoiceNinjaV4.execute.call(this);
		else if (apiVersion == 'v5') return InvoiceNinjaV5.execute.call(this);
		else throw new NodeOperationError(this.getNode(), 'Invalid Version Parameter');
	}
}