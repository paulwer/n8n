import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { invoiceNinjaApiRequest, invoiceNinjaApiRequestAllItems } from '../GenericFunctions';
import type { ISubscription } from './SubscriptionInterface';

export const execute = async function (this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const returnData: INodeExecutionData[] = [];
	const length = items.length;
	const qs: IDataObject = {};

	let responseData;

	const resource = this.getNodeParameter('resource', 0);
	const operation = this.getNodeParameter('operation', 0);
	if (resource !== 'subscription') throw new Error('Invalid Resource Execution Handler');

	for (let i = 0; i < length; i++) {
		//Routes: https://github.com/invoiceninja/invoiceninja/blob/v5-stable/routes/api.php or swagger documentation
		try {
			if (operation === 'create') {
				const additionalFields = this.getNodeParameter('additionalFields', i);
				const body: ISubscription = {};
				if (additionalFields.allowCancellation) {
					body.allow_cancellation = additionalFields.allowCancellation as boolean;
				}
				if (additionalFields.allowPlanChanges) {
					body.allow_plan_changes = additionalFields.allowPlanChanges as boolean;
				}
				if (additionalFields.allowQueryOverrides) {
					body.allow_query_overrides = additionalFields.allowQueryOverrides as boolean;
				}
				if (additionalFields.assignedUserId) {
					body.assigned_user_id = additionalFields.assignedUserId as string;
				}
				if (additionalFields.autoBill) {
					body.auto_bill = additionalFields.autoBill as string;
				}
				if (additionalFields.companyId) {
					body.company_id = additionalFields.companyId as string;
				}
				if (additionalFields.currencyId) {
					body.currency_id = additionalFields.currencyId as string;
				}
				if (additionalFields.frequencyId) {
					body.frequency_id = additionalFields.frequencyId as string;
				}
				if (additionalFields.groupId) {
					body.group_id = additionalFields.groupId as string;
				}
				if (additionalFields.isAmountDiscount) {
					body.is_amount_discount = additionalFields.isAmountDiscount as boolean;
				}
				if (additionalFields.maxSeatsLimit) {
					body.max_seats_limit = additionalFields.maxSeatsLimit as number;
				}
				if (additionalFields.name) {
					body.name = additionalFields.name as string;
				}
				if (additionalFields.optionalProductIds) {
					body.optional_product_ids = additionalFields.optionalProductIds as string;
				}
				if (additionalFields.optionalRecurringProductIds) {
					body.optional_recurring_product_ids =
						additionalFields.optionalRecurringProductIds as string;
				}
				if (additionalFields.perSeatEnabled) {
					body.per_seat_enabled = additionalFields.perSeatEnabled as boolean;
				}
				if (additionalFields.planMap) {
					body.plan_map = additionalFields.planMap as string;
				}
				if (additionalFields.price) {
					body.price = additionalFields.price as number;
				}
				if (additionalFields.productIds) {
					body.product_ids = additionalFields.productIds as string;
				}
				if (additionalFields.promoDiscount) {
					body.promo_discount = additionalFields.promoDiscount as number;
				}
				if (additionalFields.promoPrice) {
					body.promo_price = additionalFields.promoPrice as number;
				}
				if (additionalFields.purchasePage) {
					body.purchase_page = additionalFields.purchasePage as string;
				}
				if (additionalFields.recurringProductIds) {
					body.recurring_product_ids = additionalFields.recurringProductIds as string;
				}
				if (additionalFields.refundPeriod) {
					body.refund_period = additionalFields.refundPeriod as number;
				}
				if (additionalFields.registrationRequired) {
					body.registration_required = additionalFields.registrationRequired as boolean;
				}
				if (additionalFields.trialDuration) {
					body.trial_duration = additionalFields.trialDuration as number;
				}
				if (additionalFields.trialEnabled) {
					body.trial_enabled = additionalFields.trialEnabled as boolean;
				}
				if (additionalFields.useInventoryManagement) {
					body.use_inventory_management = additionalFields.useInventoryManagement as boolean;
				}
				if (additionalFields.webhookConfiguration) {
					body.webhook_configuration =
						typeof additionalFields.webhookConfiguration == 'string'
							? JSON.parse(additionalFields.webhookConfiguration)
							: (additionalFields.webhookConfiguration as object);
				}
				responseData = await invoiceNinjaApiRequest.call(
					this,
					'POST',
					'/subscriptions',
					body as IDataObject,
				);
				responseData = responseData.data;
			}
			if (operation === 'update') {
				const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
				const additionalFields = this.getNodeParameter('additionalFields', i);
				const body: ISubscription = {};
				if (additionalFields.allowCancellation) {
					body.allow_cancellation = additionalFields.allowCancellation as boolean;
				}
				if (additionalFields.allowPlanChanges) {
					body.allow_plan_changes = additionalFields.allowPlanChanges as boolean;
				}
				if (additionalFields.allowQueryOverrides) {
					body.allow_query_overrides = additionalFields.allowQueryOverrides as boolean;
				}
				if (additionalFields.assignedUserId) {
					body.assigned_user_id = additionalFields.assignedUserId as string;
				}
				if (additionalFields.autoBill) {
					body.auto_bill = additionalFields.autoBill as string;
				}
				if (additionalFields.companyId) {
					body.company_id = additionalFields.companyId as string;
				}
				if (additionalFields.currencyId) {
					body.currency_id = additionalFields.currencyId as string;
				}
				if (additionalFields.frequencyId) {
					body.frequency_id = additionalFields.frequencyId as string;
				}
				if (additionalFields.groupId) {
					body.group_id = additionalFields.groupId as string;
				}
				if (additionalFields.isAmountDiscount) {
					body.is_amount_discount = additionalFields.isAmountDiscount as boolean;
				}
				if (additionalFields.maxSeatsLimit) {
					body.max_seats_limit = additionalFields.maxSeatsLimit as number;
				}
				if (additionalFields.name) {
					body.name = additionalFields.name as string;
				}
				if (additionalFields.optionalProductIds) {
					body.optional_product_ids = additionalFields.optionalProductIds as string;
				}
				if (additionalFields.optionalRecurringProductIds) {
					body.optional_recurring_product_ids =
						additionalFields.optionalRecurringProductIds as string;
				}
				if (additionalFields.perSeatEnabled) {
					body.per_seat_enabled = additionalFields.perSeatEnabled as boolean;
				}
				if (additionalFields.planMap) {
					body.plan_map = additionalFields.planMap as string;
				}
				if (additionalFields.price) {
					body.price = additionalFields.price as number;
				}
				if (additionalFields.productIds) {
					body.product_ids = additionalFields.productIds as string;
				}
				if (additionalFields.promoDiscount) {
					body.promo_discount = additionalFields.promoDiscount as number;
				}
				if (additionalFields.promoPrice) {
					body.promo_price = additionalFields.promoPrice as number;
				}
				if (additionalFields.purchasePage) {
					body.purchase_page = additionalFields.purchasePage as string;
				}
				if (additionalFields.recurringProductIds) {
					body.recurring_product_ids = additionalFields.recurringProductIds as string;
				}
				if (additionalFields.refundPeriod) {
					body.refund_period = additionalFields.refundPeriod as number;
				}
				if (additionalFields.registrationRequired) {
					body.registration_required = additionalFields.registrationRequired as boolean;
				}
				if (additionalFields.trialDuration) {
					body.trial_duration = additionalFields.trialDuration as number;
				}
				if (additionalFields.trialEnabled) {
					body.trial_enabled = additionalFields.trialEnabled as boolean;
				}
				if (additionalFields.useInventoryManagement) {
					body.use_inventory_management = additionalFields.useInventoryManagement as boolean;
				}
				if (additionalFields.webhookConfiguration) {
					body.webhook_configuration =
						typeof additionalFields.webhookConfiguration == 'string'
							? JSON.parse(additionalFields.webhookConfiguration)
							: (additionalFields.webhookConfiguration as object);
				}
				responseData = await invoiceNinjaApiRequest.call(
					this,
					'PUT',
					`/subscriptions/${subscriptionId}`,
					body as IDataObject,
				);
				responseData = responseData.data;
			}
			if (operation === 'get') {
				const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
				const include = this.getNodeParameter('include', i) as string[];
				if (include.length) {
					qs.include = include.toString();
				}
				responseData = await invoiceNinjaApiRequest.call(
					this,
					'GET',
					`/subscriptions/${subscriptionId}`,
					{},
					qs,
				);
				responseData = responseData.data;
			}
			if (operation === 'getAll') {
				const filters = this.getNodeParameter('filters', i);
				if (filters.filter) {
					qs.filter = filters.filter as string;
				}
				// include does not exists
				// const include = this.getNodeParameter('include', i) as Array<string>;
				// if (include.length) {
				//     qs.include = include.toString() as string;
				// }
				const returnAll = this.getNodeParameter('returnAll', i);
				if (returnAll) {
					responseData = await invoiceNinjaApiRequestAllItems.call(
						this,
						'data',
						'GET',
						'/subscriptions',
						{},
						qs,
					);
				} else {
					const perPage = this.getNodeParameter('perPage', i) as boolean;
					if (perPage) qs.per_page = perPage;
					responseData = await invoiceNinjaApiRequest.call(this, 'GET', '/subscriptions', {}, qs);
					responseData = responseData.data;
				}
			}
			if (operation === 'delete') {
				const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
				responseData = await invoiceNinjaApiRequest.call(
					this,
					'DELETE',
					`/subscriptions/${subscriptionId}`,
				);
				responseData = responseData.data;
			}
			if (operation === 'action') {
				const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
				const action = this.getNodeParameter('action', i) as string;
				responseData = await invoiceNinjaApiRequest.call(
					this,
					'POST',
					`/subscriptions/bulk`,
					{
						action,
						ids: [subscriptionId]
					}
				);
				responseData = responseData.data[0];
			}

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData),
				{ itemData: { item: i } },
			);

			returnData.push(...executionData);
		} catch (error) {
			if (this.continueOnFail()) {
				const executionErrorData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray({ error: error.message }),
					{ itemData: { item: i } },
				);
				returnData.push(...executionErrorData);
				continue;
			}
			throw error;
		}
	}

	return this.prepareOutputData(returnData);
};