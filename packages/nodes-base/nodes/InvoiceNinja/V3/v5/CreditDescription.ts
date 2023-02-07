import type { INodeProperties } from 'n8n-workflow';

export const creditOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
			},
		},
		options: [
			{
				name: 'Action',
				value: 'action',
				description: 'Performs an action to a credit',
				action: 'Action to a credit',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new credit',
				action: 'Create a credit',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a credit',
				action: 'Delete a credit',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get data of a credit',
				action: 'Get a credit',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get data of many credits',
				action: 'Get many credits',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing credit',
				action: 'Update a credit',
			},
		],
		default: 'getAll',
	},
];

export const creditFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                  credit:get                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Credit ID',
		name: 'creditId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Include',
		name: 'include',
		type: 'multiOptions',
		description: 'Additional resources to fetch related to this resource',
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['get'],
			},
		},
		options: [
			{
				name: 'Client',
				value: 'client',
			},
			{
				name: 'Vendor',
				value: 'vendor',
			},
		],
		default: [],
	},
	{
		displayName: 'Download PDF',
		name: 'download',
		type: 'boolean',
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['get'],
			},
		},
		default: false,
	},
	/* -------------------------------------------------------------------------- */
	/*                                  credit:getAll                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Search',
				name: 'filter',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Credit Number',
				name: 'number',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Credit Status',
				name: 'creditStatus',
				type: 'multiOptions',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Overdue',
						value: 'overdue',
					},
					{
						name: 'Paid',
						value: 'paid',
					},
					{
						name: 'Reversed',
						value: 'reversed',
					},
					{
						name: 'Unpaid',
						value: 'unpaid',
					},
				],
				default: [],
			},
		],
	},
	{
		displayName: 'Include',
		name: 'include',
		type: 'multiOptions',
		description: 'Additional resources to fetch related to this resource',
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				name: 'Client',
				value: 'client',
			},
			{
				name: 'Vendor',
				value: 'vendor',
			},
		],
		default: [],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['getAll'],
			},
		},
		default: true,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'perPage',
		type: 'number',
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['getAll'],
			},
			hide: {
				returnAll: [true],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	/* -------------------------------------------------------------------------- */
	/*                                 credit:create                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'User (Assigned)',
				name: 'assignedUserId',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getUsersV5',
				},
				default: '',
			},
			{
				displayName: 'Client',
				name: 'clientId',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getClientsV5',
				},
				default: '',
			},
			{
				displayName: 'Vendor',
				name: 'vendorId',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getVendorsV5',
				},
				default: '',
			},
			{
				displayName: 'Project',
				name: 'projectId',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a><br />Only the last 100 entries will be displayed here.',
				typeOptions: {
					loadOptionsMethod: 'getProjectsV5',
				},
				default: '',
			},
			{
				displayName: 'Amount',
				name: 'amount',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Balance',
				name: 'balance',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Status',
				name: 'statusId',
				type: 'options',
				options: [
					{
						name: 'Draft',
						value: 1,
					},
					{
						name: 'Sent',
						value: 2,
					},
				],
				default: 1,
			},
			{
				displayName: 'Design',
				name: 'designId',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getDesignsV5',
				},
				default: '',
			},
			{
				displayName: 'Recurring ID',
				name: 'recurringId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Number',
				name: 'number',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Discount',
				name: 'discount',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'PO Number',
				name: 'poNumber',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Date',
				name: 'date',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Next Send Date',
				name: 'date',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Due Date',
				name: 'dueDate',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Terms',
				name: 'terms',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
			},
			{
				displayName: 'Footer',
				name: 'footer',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
			},
			{
				displayName: 'Private Notes',
				name: 'privateNotes',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Public Notes',
				name: 'publicNotes',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Uses Inclusive Taxes',
				name: 'usesInclusiveTaxes',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Tax Name 1',
				name: 'taxName1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Tax Name 2',
				name: 'taxName2',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Tax Name 3',
				name: 'taxName3',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Tax Rate 1',
				name: 'taxRate1',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Tax Rate 2',
				name: 'taxRate2',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Tax Rate 3',
				name: 'taxRate3',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Partial',
				name: 'partial',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Partial Due Date',
				name: 'partialDueDate',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Exchange Rate',
				name: 'exchangeRate',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Subscription ID',
				name: 'subscriptionId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Auto Bill Enabled',
				name: 'autoBillEnabled',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Custom Value 1',
				name: 'customValue1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Value 2',
				name: 'customValue2',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Value 3',
				name: 'customValue3',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Value 4',
				name: 'customValue4',
				type: 'string',
				default: '',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 credit:update                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Credit ID',
		name: 'creditId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'User (Assigned)',
				name: 'assignedUserId',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getUsersV5',
				},
				default: '',
			},
			{
				displayName: 'Client',
				name: 'clientId',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getClientsV5',
				},
				default: '',
			},
			{
				displayName: 'Vendor',
				name: 'vendorId',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getVendorsV5',
				},
				default: '',
			},
			{
				displayName: 'Project',
				name: 'projectId',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a><br />Only the last 100 entries will be displayed here.',
				typeOptions: {
					loadOptionsMethod: 'getProjectsV5',
				},
				default: '',
			},
			{
				displayName: 'Amount',
				name: 'amount',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Balance',
				name: 'balance',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Status',
				name: 'statusId',
				type: 'options',
				options: [
					{
						name: 'Draft',
						value: 1,
					},
					{
						name: 'Sent',
						value: 2,
					},
				],
				default: 1,
			},
			{
				displayName: 'Design',
				name: 'designId',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getDesignsV5',
				},
				default: '',
			},
			{
				displayName: 'Recurring ID',
				name: 'recurringId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Number',
				name: 'number',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Discount',
				name: 'discount',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'PO Number',
				name: 'poNumber',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Date',
				name: 'date',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Next Send Date',
				name: 'date',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Due Date',
				name: 'dueDate',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Terms',
				name: 'terms',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
			},
			{
				displayName: 'Footer',
				name: 'footer',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
			},
			{
				displayName: 'Private Notes',
				name: 'privateNotes',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Public Notes',
				name: 'publicNotes',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Uses Inclusive Taxes',
				name: 'usesInclusiveTaxes',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Tax Name 1',
				name: 'taxName1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Tax Name 2',
				name: 'taxName2',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Tax Name 3',
				name: 'taxName3',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Tax Rate 1',
				name: 'taxRate1',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Tax Rate 2',
				name: 'taxRate2',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Tax Rate 3',
				name: 'taxRate3',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Partial',
				name: 'partial',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Partial Due Date',
				name: 'partialDueDate',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Exchange Rate',
				name: 'exchangeRate',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Subscription ID',
				name: 'subscriptionId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Auto Bill Enabled',
				name: 'autoBillEnabled',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Custom Value 1',
				name: 'customValue1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Value 2',
				name: 'customValue2',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Value 3',
				name: 'customValue3',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Value 4',
				name: 'customValue4',
				type: 'string',
				default: '',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 credit:delete                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Credit ID',
		name: 'creditId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['delete'],
			},
		},
	},
	/* -------------------------------------------------------------------------- */
	/*                                  client:action                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Client ID',
		name: 'creditId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['action'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		default: '',
		required: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['action'],
			},
		},
		options: [
			{
				name: 'Send Email',
				value: 'email',
				action: 'Send an email',
			},
			{
				name: 'Send Email (custom)',
				value: 'custom_email',
				action: 'Send a custom email',
			},
			{
				name: 'Mark Sent',
				value: 'mark_sent',
				action: 'Mark as sent',
			},
			{
				name: 'Archive',
				value: 'archive',
				action: 'Archive a credit',
			},
			{
				name: 'Restore',
				value: 'restore',
				action: 'Restore a credit',
			},
		],
	},
	{
		displayName: 'Subject',
		name: 'customEmailSubject',
		description: 'use HTML with variables within this input. see: <a href="https://invoiceninja.github.io/docs/custom-fields/#custom-fields">https://invoiceninja.github.io/docs/custom-fields/#custom-fields</a>',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['action'],
				action: ['custom_email'],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'customEmailBody',
		description: 'use HTML with variables within this input. see: <a href="https://invoiceninja.github.io/docs/custom-fields/#custom-fields">https://invoiceninja.github.io/docs/custom-fields/#custom-fields</a>',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['action'],
				action: ['custom_email'],
			},
		},
	},
	{
		displayName: 'Template',
		name: 'customEmailTemplate',
		description: 'use HTML with variables within this input. see: <a href="https://invoiceninja.github.io/docs/custom-fields/#custom-fields">https://invoiceninja.github.io/docs/custom-fields/#custom-fields</a>',
		type: 'options',
		default: 'email_template_credit',
		required: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['credit'],
				operation: ['action'],
				action: ['custom_email'],
			},
		},
		options: [
			{
				name: 'Initial',
				value: 'email_template_credit',
			},
			{
				name: 'Custom 1',
				value: 'email_template_custom1',
			},
		]
	},
];