import { INodeProperties } from 'n8n-workflow';

export const vendorOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get data of a vendor',
				action: 'Get a vendor',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get data of many vendors',
				action: 'Get many vendors',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new vendor',
				action: 'Create a vendor',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing vendor',
				action: 'Update a vendor',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a vendor',
				action: 'Delete a vendor',
			},
		],
		default: 'create',
	},
];

export const vendorFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                  vendor:get                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Vendor ID',
		name: 'vendorId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				operation: ['get'],
				resource: ['vendor'],
			},
		},
		options: [
			{
				displayName: 'Include',
				name: 'include',
				type: 'multiOptions',
				description: 'Additional resources to fetch related to this resource.',
				options: [
					{
						name: 'Invoices',
						value: 'invoices',
					},
				],
				default: [],
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                  vendor:getAll                             */
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
				operation: ['getAll'],
				resource: ['vendor'],
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
				displayName: 'Vendor Number',
				name: 'number',
				type: 'string',
				default: '',
			},
		],
	},
	{
		displayName: 'Include',
		name: 'include',
		type: 'multiOptions',
		description: 'Additional resources to fetch related to this resource.',
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				name: 'Invoices',
				value: 'invoices',
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
				resource: ['vendor'],
				operation: ['getAll'],
			},
		},
		default: true,
		description: 'Whether to return all results or only up to a given perPage',
	},
	{
		displayName: 'Limit',
		name: 'perPage',
		type: 'number',
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
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
	/*                                 vendor:create                              */
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
				resource: ['vendor'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Vendor Name',
				name: 'vendorName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ID Number',
				name: 'idNumber',
				type: 'string',
				default: '',
			},
			{
				displayName: 'VAT Number',
				name: 'vatNumber',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Private Notes',
				name: 'privateNotes',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
			},
			{
				displayName: 'Public Notes',
				name: 'publicNotes',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
			},
			{
				displayName: 'Custom Value 1',
				name: 'customValue1',
				type: 'string',
				typeOptions: {},
				default: '',
			},
			{
				displayName: 'Auto Bill Enabled',
				name: 'autoBillEnabled',
				type: 'boolean',
				typeOptions: {},
				default: false,
			},
			{
				displayName: 'Custom Value 2',
				name: 'customValue2',
				type: 'string',
				typeOptions: {},
				default: '',
			},
			{
				displayName: 'Custom Value 3',
				name: 'customValue3',
				type: 'string',
				typeOptions: {},
				default: '',
			},
			{
				displayName: 'Custom Value 4',
				name: 'customValue4',
				type: 'string',
				typeOptions: {},
				default: '',
			},
		],
	},
	{
		displayName: 'Billing Address',
		name: 'billingAddressUi',
		placeholder: 'Add Billing Address',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
				operation: ['create'],
			},
		},
		default: {},
		options: [
			{
				name: 'billingAddressValue',
				displayName: 'Billing Address',
				values: [
					{
						displayName: 'Street Address',
						name: 'streetAddress',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Apt/Suite',
						name: 'aptSuite',
						type: 'string',
						default: '',
					},
					{
						displayName: 'City',
						name: 'city',
						type: 'string',
						default: '',
					},
					{
						displayName: 'State',
						name: 'state',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Postal Code',
						name: 'postalCode',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Country Code Name or ID',
						name: 'countryCode',
						type: 'options',
						description:
							'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
						typeOptions: {
							loadOptionsMethod: 'getCountryCodesV5',
						},
						default: '',
					},
				],
			},
		],
	},
	{
		displayName: 'Contacts',
		name: 'contactsUi',
		placeholder: 'Add Contact',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
				operation: ['create'],
			},
		},
		default: {},
		options: [
			{
				name: 'contactValues',
				displayName: 'Contact',
				values: [
					{
						displayName: 'First Name',
						name: 'firstName',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Last Name',
						name: 'lastName',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						placeholder: 'name@email.com',
						default: '',
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
	{
		displayName: 'Shipping Address',
		name: 'shippingAddressUi',
		placeholder: 'Add Shipping Address',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
				operation: ['create'],
			},
		},
		default: {},
		options: [
			{
				name: 'shippingAddressValue',
				displayName: 'Shipping Address',
				values: [
					{
						displayName: 'Street Address',
						name: 'streetAddress',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Apt/Suite',
						name: 'aptSuite',
						type: 'string',
						default: '',
					},
					{
						displayName: 'City',
						name: 'city',
						type: 'string',
						default: '',
					},
					{
						displayName: 'State',
						name: 'state',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Postal Code',
						name: 'postalCode',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Country Code Name or ID',
						name: 'countryCode',
						type: 'options',
						description:
							'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
						typeOptions: {
							loadOptionsMethod: 'getCountryCodesV5',
						},
						default: '',
					},
				],
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 vendor:update                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Vendor ID',
		name: 'vendorId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
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
				resource: ['vendor'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Vendor Name',
				name: 'vendorName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ID Number',
				name: 'idNumber',
				type: 'string',
				default: '',
			},
			{
				displayName: 'VAT Number',
				name: 'vatNumber',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Private Notes',
				name: 'privateNotes',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
			},
			{
				displayName: 'Public Notes',
				name: 'publicNotes',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
			},
			{
				displayName: 'Custom Value 1',
				name: 'customValue1',
				type: 'string',
				typeOptions: {},
				default: '',
			},
			{
				displayName: 'Custom Value 2',
				name: 'customValue2',
				type: 'string',
				typeOptions: {},
				default: '',
			},
			{
				displayName: 'Custom Value 3',
				name: 'customValue3',
				type: 'string',
				typeOptions: {},
				default: '',
			},
			{
				displayName: 'Custom Value 4',
				name: 'customValue4',
				type: 'string',
				typeOptions: {},
				default: '',
			},
		],
	},
	{
		displayName: 'Billing Address',
		name: 'billingAddressUi',
		placeholder: 'Add Billing Address',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			{
				name: 'billingAddressValue',
				displayName: 'Billing Address',
				values: [
					{
						displayName: 'Street Address',
						name: 'streetAddress',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Apt/Suite',
						name: 'aptSuite',
						type: 'string',
						default: '',
					},
					{
						displayName: 'City',
						name: 'city',
						type: 'string',
						default: '',
					},
					{
						displayName: 'State',
						name: 'state',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Postal Code',
						name: 'postalCode',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Country Code Name or ID',
						name: 'countryCode',
						type: 'options',
						description:
							'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
						typeOptions: {
							loadOptionsMethod: 'getCountryCodesV5',
						},
						default: '',
					},
				],
			},
		],
	},
	{
		displayName: 'Contacts',
		name: 'contactsUi',
		placeholder: 'Add Contact',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			{
				name: 'contactValues',
				displayName: 'Contact',
				values: [
					{
						displayName: 'First Name',
						name: 'firstName',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Last Name',
						name: 'lastName',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						placeholder: 'name@email.com',
						default: '',
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
	{
		displayName: 'Shipping Address',
		name: 'shippingAddressUi',
		placeholder: 'Add Shipping Address',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			{
				name: 'shippingAddressValue',
				displayName: 'Shipping Address',
				values: [
					{
						displayName: 'Street Address',
						name: 'streetAddress',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Apt/Suite',
						name: 'aptSuite',
						type: 'string',
						default: '',
					},
					{
						displayName: 'City',
						name: 'city',
						type: 'string',
						default: '',
					},
					{
						displayName: 'State',
						name: 'state',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Postal Code',
						name: 'postalCode',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Country Code Name or ID',
						name: 'countryCode',
						type: 'options',
						description:
							'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
						typeOptions: {
							loadOptionsMethod: 'getCountryCodesV5',
						},
						default: '',
					},
				],
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 vendor:delete                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Vendor ID',
		name: 'vendorId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				apiVersion: ['v5'],
				resource: ['vendor'],
				operation: ['delete'],
			},
		},
	},
];