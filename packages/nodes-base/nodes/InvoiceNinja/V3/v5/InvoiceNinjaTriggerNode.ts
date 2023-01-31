import { IHookFunctions, IWebhookFunctions } from 'n8n-core';

import { INodeProperties, IWebhookResponseData } from 'n8n-workflow';

import {
	invoiceNinjaApiRequest,
	invoiceNinjaApiRequestAllItems,
} from '../GenericFunctions';

const eventID: { [key: string]: string } = {
	create_client: '1',
	update_client: '10',
	archive_client: '37',
	restore_client: '45',
	delete_client: '11',

	create_vendor: '5',
	update_vendor: '13',
	archive_vendor: '48',
	restore_vendor: '49',
	delete_vendor: '14',

	create_invoice: '2',
	update_invoice: '8',
	delay_invoice: '22',
	remind_invoice: '24',
	archive_invoice: '33',
	delete_invoice: '9',

	create_quote: '3',
	update_quote: '6',
	accept_quote: '21',
	expire_quote: '23',
	archive_quote: '34',
	delete_quote: '7',

	create_payment: '4',
	update_payment: '31',
	archive_payment: '32',
	restore_payment: '40',
	delete_payment: '12',

	create_expense: '15',
	update_expense: '16',
	archive_expense: '39',
	restore_expense: '47',
	delete_expense: '17',

	create_project: '25',
	update_project: '26',
	archive_project: '38',
	restore_project: '46',
	delete_project: '30',

	create_task: '18',
	update_task: '19',
	archive_task: '36',
	restore_task: '44',
	delete_task: '20',

	create_credit: '27',
	update_credit: '28',
	archive_credit: '35',
	restore_credit: '43',
	delete_credit: '29',
};

const headProperties: INodeProperties[] = [{
	displayName: 'Event',
	name: 'event',
	type: 'options',
	displayOptions: {
		show: {
			apiVersion: ['v5'],
		},
	},
	description: 'You are using InvoiceNinja V5: <br />Check Swagger documentation for additional fields: <a href="https://app.swaggerhub.com/apis/invoiceninja/invoiceninja/" target="_blank">https://app.swaggerhub.com/apis/invoiceninja/invoiceninja/</a><br /><br />Change your Version at the Node-Settings.',
	options: [
		{
			name: 'Client Created',
			value: 'create_client',
		},
		{
			name: 'Client Updated',
			value: 'update_client',
		},
		{
			name: 'Client Archived',
			value: 'archive_client',
		},
		{
			name: 'Client Restored',
			value: 'restore_client',
		},
		{
			name: 'Client Deleted',
			value: 'delete_client',
		},
		{
			name: 'Vendor Created',
			value: 'create_vendor',
		},
		{
			name: 'Vendor Updated',
			value: 'update_vendor',
		},
		{
			name: 'Vendor Archived',
			value: 'archive_vendor',
		},
		{
			name: 'Vendor Restored',
			value: 'restore_vendor',
		},
		{
			name: 'Vendor Deleted',
			value: 'delete_vendor',
		},
		{
			name: 'Invoice Created',
			value: 'create_invoice',
		},
		{
			name: 'Invoice Updated',
			value: 'update_invoice',
		},
		{
			name: 'Invoice Delayed',
			value: 'delay_invoice',
		},
		{
			name: 'Invoice Reminded',
			value: 'remind_invoice',
		},
		{
			name: 'Invoice Archived',
			value: 'archive_invoice',
		},
		{
			name: 'Invoice Restored',
			value: 'restore_invoice',
		},
		{
			name: 'Invoice Deleted',
			value: 'delete_invoice',
		},
		{
			name: 'Quote Created',
			value: 'create_quote',
		},
		{
			name: 'Quote Updated',
			value: 'update_quote',
		},
		{
			name: 'Quote Accepted',
			value: 'accept_quote',
		},
		{
			name: 'Quote Expired',
			value: 'expire_quote',
		},
		{
			name: 'Quote Archived',
			value: 'archive_quote',
		},
		{
			name: 'Quote Restored',
			value: 'restore_quote',
		},
		{
			name: 'Quote Deleted',
			value: 'delete_quote',
		},
		{
			name: 'Payment Created',
			value: 'create_payment',
		},
		{
			name: 'Payment Updated',
			value: 'update_payment',
		},
		{
			name: 'Payment Archived',
			value: 'archive_payment',
		},
		{
			name: 'Payment Restore',
			value: 'restore_payment',
		},
		{
			name: 'Payment Deleted',
			value: 'delete_payment',
		},
		{
			name: 'Expense Created',
			value: 'create_expense',
		},
		{
			name: 'Expense Updated',
			value: 'update_expense',
		},
		{
			name: 'Expense Archived',
			value: 'archive_expense',
		},
		{
			name: 'Expense Restored',
			value: 'restore_expense',
		},
		{
			name: 'Expense Deleted',
			value: 'delete_expense',
		},
		{
			name: 'Project Created',
			value: 'create_project',
		},
		{
			name: 'Project Updated',
			value: 'update_project',
		},
		{
			name: 'Project Archived',
			value: 'archive_project',
		},
		{
			name: 'Project Restored',
			value: 'restore_project',
		},
		{
			name: 'Project Deleted',
			value: 'delete_project',
		},
		{
			name: 'Task Created',
			value: 'create_task',
		},
		{
			name: 'Task Updated',
			value: 'update_task',
		},
		{
			name: 'Task Archived',
			value: 'archive_task',
		},
		{
			name: 'Task Restored',
			value: 'restore_task',
		},
		{
			name: 'Task Deleted',
			value: 'delete_task',
		},
		{
			name: 'Credit Created',
			value: 'create_credit',
		},
		{
			name: 'Credit Updated',
			value: 'update_credit',
		},
		{
			name: 'Credit Archived',
			value: 'archive_credit',
		},
		{
			name: 'Credit Restored',
			value: 'restore_credit',
		},
		{
			name: 'Credit Deleted',
			value: 'delete_credit',
		},
	],
	default: '',
	required: true,
}];
export const InvoiceNinjaTriggerV5 = {
	description: {
		properties: [
			...headProperties
		],
	},

	// @ts-ignore (because of request)
	webhookMethods: {
		default: {
			async checkExists(that: IHookFunctions): Promise<boolean> {
				const webhookData = that.getWorkflowStaticData('node');
				const webhookUrl = that.getNodeWebhookUrl('default') as string;
				const event = that.getNodeParameter('event') as string;

				if (webhookData.webhookId === undefined) {
					return false;
				}

				const registeredWebhooks = await invoiceNinjaApiRequestAllItems.call(
					that,
					'data',
					'GET',
					'/webhooks',
				);

				for (const webhook of registeredWebhooks) {
					if (
						webhook.target_url === webhookUrl &&
						webhook.is_deleted === false &&
						webhook.event_id === eventID[event]
					) {
						webhookData.webhookId = webhook.id;
						return true;
					}
				}

				return false;
			},
			async create(that: IHookFunctions): Promise<boolean> {
				const webhookUrl = that.getNodeWebhookUrl('default');
				const webhookData = that.getWorkflowStaticData('node');
				const event = that.getNodeParameter('event') as string;

				const body = {
					target_url: webhookUrl,
					event_id: eventID[event],
				};

				let responseData = await invoiceNinjaApiRequest.call(that, 'POST', '/webhooks', body);
				webhookData.webhookId = responseData.data.id as string;

				if (webhookData.webhookId === undefined) {
					// Required data is missing so was not successful
					return false;
				}

				return true;
			},
			async delete(that: IHookFunctions): Promise<boolean> {
				const webhookData = that.getWorkflowStaticData('node');

				if (webhookData.webhookId !== undefined) {

					try {
						await invoiceNinjaApiRequest.call(that, 'DELETE', `/webhooks/${webhookData.webhookId}`);
					} catch (error) {
						return false;
					}

					// Remove from the static workflow data so that it is clear
					// that no webhooks are registred anymore
					delete webhookData.webhookId;
				}

				return true;
			},
		},
	},

	async webhook(that: IWebhookFunctions): Promise<IWebhookResponseData> {
		const bodyData = that.getBodyData();
		return {
			workflowData: [that.helpers.returnJsonArray(bodyData)],
		};
	}
}