/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import type {
	IHookFunctions,
	IWebhookFunctions,
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';

import { NodeOperationError } from 'n8n-workflow';

import { InvoiceNinjaTriggerV4 } from './v4/InvoiceNinjaTriggerNode';

import { InvoiceNinjaTriggerV5 } from './v5/InvoiceNinjaTriggerNode';

export class InvoiceNinjaTriggerV3 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			displayName: 'Invoice Ninja Trigger',
			name: 'invoiceNinjaTrigger',
			icon: 'file:invoiceNinja.svg',
			group: ['trigger'],
			version: 3,
			description: 'Starts the workflow when Invoice Ninja events occur',
			defaults: {
				name: 'Invoice Ninja Trigger',
			},
			inputs: ['main'],
			outputs: ['main'],
			credentials: [
				{
					name: 'invoiceNinjaApi',
					required: true,
				},
			],
			webhooks: [
				{
					name: 'default',
					httpMethod: 'POST',
					responseMode: 'onReceived',
					path: 'webhook',
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
				...InvoiceNinjaTriggerV4.description.properties,
				// V5
				...InvoiceNinjaTriggerV5.description.properties,
			],
		};
	}

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const apiVersion = this.getNodeParameter('apiVersion', 0) as string;

				if (apiVersion == 'v4')
					return InvoiceNinjaTriggerV4.webhookMethods.default.checkExists.call(this);
				else if (apiVersion == 'v5')
					return InvoiceNinjaTriggerV5.webhookMethods.default.checkExists.call(this);

				throw new NodeOperationError(this.getNode(), 'Invalid API Version');
			},
			async create(this: IHookFunctions): Promise<boolean> {
				const apiVersion = this.getNodeParameter('apiVersion', 0) as string;

				if (apiVersion == 'v4')
					return InvoiceNinjaTriggerV4.webhookMethods.default.create.call(this);
				else if (apiVersion == 'v5')
					return InvoiceNinjaTriggerV5.webhookMethods.default.create.call(this);

				throw new NodeOperationError(this.getNode(), 'Invalid API Version');
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				const apiVersion = this.getNodeParameter('apiVersion', 0) as string;

				if (apiVersion == 'v4')
					return InvoiceNinjaTriggerV4.webhookMethods.default.delete.call(this);
				else if (apiVersion == 'v5')
					return InvoiceNinjaTriggerV5.webhookMethods.default.delete.call(this);

				throw new NodeOperationError(this.getNode(), 'Invalid API Version');
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const apiVersion = this.getNodeParameter('apiVersion', 0) as string;

		if (apiVersion == 'v4') return InvoiceNinjaTriggerV4.webhook.call(this);
		else if (apiVersion == 'v5') return InvoiceNinjaTriggerV5.webhook.call(this);

		throw new NodeOperationError(this.getNode(), 'Invalid API Version');
	}
}