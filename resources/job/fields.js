const fields = [
  {
    'key': 'primary_job_status',
    'type': 'string',
    'helpText': 'Primary job status.',
  },
  {
    'key': 'open_to_marketplace',
    'type': 'boolean',
    'helpText': 'Open to marketplace.',
  },
  {
    'key': 'marketplace_offer',
    'type': 'string',
    'helpText': 'Marketplace offer.',
  },
  {
    'key': 'start_date',
    'type': 'datetime',
    'helpText': 'Start date.',
  },
  {
    'key': 'status',
    'type': 'string',
    'helpText': 'Job Status.',
  },
  {
    'key': 'job_release_time',
    'type': 'string',
    'helpText': 'Job release time.',
  },
  {
    'key': 'job_time',
    'type': 'string',
    'helpText': 'Job time.',
  },
  {
    'key': 'service_time',
    'type': 'string',
    'helpText': 'Service time.',
  },
  {
    'key': 'time_window',
    'type': 'string',
    'helpText': 'Time window.',
  },
  {
    'key': 'job_received_date',
    'type': 'datetime',
    'helpText': 'Job received date.',
  },
  {
    'key': 'tracking_number',
    'type': 'string',
    'helpText': 'Tracking number.',
  },
  {
    'key': 'order_number',
    'type': 'string',
    'helpText': 'Order number.',
  },
  {
    'key': 'job_type',
    'type': 'string',
    'helpText': 'Job type.',
  },
  {
    'key': 'job_sequence',
    'type': 'string',
    'helpText': 'Job order.',
  },
  {
    'key': 'job_fee',
    'type': 'string',
    'helpText': 'Job fee.',
  },
  {
    'key': 'address_lat',
    'type': 'number',
    'helpText': 'Address lat.',
  },
  {
    'key': 'address_lng',
    'type': 'number',
    'helpText': 'Address lng.',
  },
  {
    'key': 'company_name',
    'type': 'string',
    'helpText': 'Address company.',
  },
  {
    'key': 'address_1',
    'type': 'string',
    'helpText': 'Address 1.',
  },
  {
    'key': 'address_2',
    'type': 'string',
    'helpText': 'Address 2.',
  },
  {
    'key': 'address_3',
    'type': 'string',
    'helpText': 'Address 3.',
  },
  {
    'key': 'postal_code',
    'type': 'string',
    'helpText': 'Postal code.',
  },
  {
    'key': 'city',
    'type': 'string',
    'helpText': 'City.',
  },
  {
    'key': 'state',
    'type': 'string',
    'helpText': 'State.',
  },
  {
    'key': 'country',
    'type': 'string',
    'helpText': 'Country.',
  },
  {
    'key': 'billing_address',
    'type': 'string',
    'helpText': 'Billing address.',
  },
  {
    'key': 'deliver_to_collect_from',
    'type': 'string',
    'helpText': 'Contact name.',
  },
  {
    'key': 'last_name',
    'type': 'string',
    'helpText': 'Contact last name.',
  },
  {
    'key': 'phone_number',
    'type': 'string',
    'helpText': 'Contact phone.',
  },
  {
    'key': 'sender_phone_number',
    'type': 'string',
    'helpText': 'Sender phone.',
  },
  {
    'key': 'fax_number',
    'type': 'string',
    'helpText': 'Fax.',
  },
  {
    'key': 'instructions',
    'type': 'string',
    'helpText': 'Instructions.',
  },
  {
    'key': 'assign_to',
    'type': 'string',
    'helpText': 'Assign to.',
  },
  {
    'key': 'notify_email',
    'type': 'string',
    'helpText': 'Notify email.',
  },
  {
    'key': 'webhook_url',
    'type': 'string',
    'helpText': 'Webhook url.',
  },
  {
    'key': 'zone',
    'type': 'string',
    'helpText': 'Zone.',
  },
  {
    'key': 'customer',
    'type': 'string',
    'helpText': 'Customer.',
  },
  {
    'key': 'account_no',
    'type': 'string',
    'helpText': 'Account no.',
  },
  {
    'key': 'job_owner',
    'type': 'string',
    'helpText': 'Owner name.',
  },
  {
    'key': 'invoice_number',
    'type': 'string',
    'helpText': 'Invoice number.',
  },
  {
    'key': 'invoice_amount',
    'type': 'string',
    'helpText': 'Invoice amount.',
  },
  {
    'key': 'payment_mode',
    'type': 'string',
    'helpText': 'Payment mode.',
  },
  {
    'key': 'payment_amount',
    'type': 'number',
    'helpText': 'Payment amount.',
  },
  {
    'key': 'group_id',
    'type': 'string',
    'helpText': 'Id of group that the job belongs to.',
  },
  {
    'key': 'group_name',
    'type': 'string',
    'helpText': 'Group name.',
  },
  {
    'key': 'vendor_name',
    'type': 'string',
    'helpText': 'Vendor name.',
  },
  {
    'key': 'source',
    'type': 'string',
    'helpText': 'Source.',
  },
  {
    'key': 'weight',
    'type': 'float',
    'helpText': 'Weight.',
  },
  {
    'key': 'parcel_width',
    'type': 'integer',
    'helpText': 'Parcel width.',
  },
  {
    'key': 'parcel_length',
    'type': 'integer',
    'helpText': 'Parcel length.',
  },
  {
    'key': 'parcel_height',
    'type': 'integer',
    'helpText': 'Parcel height.',
  },
  {
    'key': 'cubic_meter',
    'type': 'integer',
    'helpText': 'Cubic meter.',
  },
  {
    'key': 'boxes',
    'type': 'integer',
    'helpText': 'Boxes.',
  },
  {
    'key': 'cartons',
    'type': 'integer',
    'helpText': 'Cartons.',
  },
  {
    'key': 'pieces',
    'type': 'integer',
    'helpText': 'Pieces.',
  },
  {
    'key': 'envelopes',
    'type': 'integer',
    'helpText': 'Envelopes.',
  },
  {
    'key': 'pallets',
    'type': 'integer',
    'helpText': 'Pallets.',
  },
  {
    'key': 'bins',
    'type': 'integer',
    'helpText': 'Bins.',
  },
  {
    'key': 'trays',
    'type': 'integer',
    'helpText': 'Trays.',
  },
  {
    'key': 'bundles',
    'type': 'integer',
    'helpText': 'Bundles.',
  },
  {
    'key': 'rolls',
    'type': 'integer',
    'helpText': 'Rolls.',
  },
  {
    'key': 'number_of_shipping_labels',
    'type': 'integer',
    'helpText': 'Labels.',
  },
  {
    'key': 'attachment_url',
    'type': 'string',
    'helpText': 'Attachment 1.',
  },
  {
    'key': 'carrier',
    'type': 'string',
    'helpText': 'Carrier.',
  },
  {
    'key': 'auto_reschedule',
    'type': 'string',
    'helpText': 'Reschedule.',
  },
  {
    'key': 'eta_time',
    'type': 'string',
    'helpText': 'Eta time.',
  },
  {
    'key': 'depot',
    'type': 'string',
    'helpText': 'Depot.',
  },
  {
    'key': 'depot_contact',
    'type': 'string',
    'helpText': 'Depot contact.',
  },
  {
    'key': 'department',
    'type': 'string',
    'helpText': 'Department.',
  },
  {
    'key': 'sales_person',
    'type': 'string',
    'helpText': 'Sales person.',
  },
  {
    'key': 'identification_number',
    'type': 'string',
    'helpText': 'Identification number.',
  },
  {
    'key': 'bank_prefix',
    'type': 'string',
    'helpText': 'Bank prefix.',
  },
  {
    'key': 'run_number',
    'type': 'string',
    'helpText': 'Run number.',
  },
  {
    'key': 'pick_up_from',
    'type': 'string',
    'helpText': 'Pick up from.',
  },
  {
    'key': 'pick_up_time',
    'type': 'string',
    'helpText': 'Pick up time.',
  },
  {
    'key': 'pick_up_lat',
    'type': 'string',
    'helpText': 'Pick up lat.',
  },
  {
    'key': 'pick_up_lng',
    'type': 'string',
    'helpText': 'Pick up lng.',
  },
  {
    'key': 'pick_up_address',
    'type': 'string',
    'helpText': 'Pick up address.',
  },
  {
    'key': 'pick_up_address_1',
    'type': 'string',
    'helpText': 'Pick up address 1.',
  },
  {
    'key': 'pick_up_address_2',
    'type': 'string',
    'helpText': 'Pick up address 2.',
  },
  {
    'key': 'pick_up_address_3',
    'type': 'string',
    'helpText': 'Pick up address 3.',
  },
  {
    'key': 'pick_up_city',
    'type': 'string',
    'helpText': 'Pick up city.',
  },
  {
    'key': 'pick_up_state',
    'type': 'string',
    'helpText': 'Pick up state.',
  },
  {
    'key': 'pick_up_country',
    'type': 'string',
    'helpText': 'Pick up country.',
  },
  {
    'key': 'pick_up_postal_code',
    'type': 'string',
    'helpText': 'Pick up postal code.',
  },
  {
    'key': 'pick_up_zone',
    'type': 'string',
    'helpText': 'Pick up zone.',
  },
  {
    'key': 'job_price',
    'type': 'number',
    'helpText': 'Job price.',
  },
  {
    'key': 'insurance_price',
    'type': 'number',
    'helpText': 'Insurance price.',
  },
  {
    'key': 'insurance_coverage',
    'type': 'boolean',
    'helpText': 'Insured.',
  },
  {
    'key': 'total_price',
    'type': 'number',
    'helpText': 'Total price.',
  },
  {
    'key': 'payer_type',
    'type': 'string',
    'helpText': 'Payer type.',
  },
  {
    'key': 'remarks',
    'type': 'string',
    'helpText': 'Remarks.',
  },
  {
    'key': 'service_type',
    'type': 'string',
    'helpText': 'Service type.',
  },
  {
    'key': 'warehouse_address',
    'type': 'string',
    'helpText': 'Warehouse address.',
  },
  {
    'key': 'destination_time_window',
    'type': 'string',
    'helpText': 'Destination timeslot.',
  },
  {
    'key': 'door',
    'type': 'string',
    'helpText': 'Door.',
  },
  {
    'key': 'time_zone',
    'type': 'string',
    'helpText': 'Time zone.',
  },
  {
    'key': 'pod_time',
    'type': 'string',
    'helpText': 'POD time for manual update in format HH:MM (13:30).',
  },
];

module.exports = fields;
