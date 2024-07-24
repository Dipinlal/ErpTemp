export const accountTree = [
  {
    id: "1",
    label: "Assets",
    children: [
      { id: "7", label: "Fixed Assets" },
      {
        id: "8",
        label: "Current Assets",
        children: [
          { id: "17", label: "Cash & bank" },
          {
            id: "18",
            label: "Inventories",
          },
          { id: "19", label: "Account Receivable" },
          { id: "20", label: "Investments" },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Expenses",
    children: [
      { id: "9", label: "Direct Expenses" },
      {
        id: "10", label: "Indirect Expenses",
        children: [
          { id: "21", label: "Administrative Expenses" },
          {
            id: "22",
            label: "Employee Benefits",
          },
          { id: "23", label: "Financial Charges" },
          { id: "24", label: "Gain and Loss" },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "Revenue",
    children: [{ id: "11", label: "Sales" }],
  },
  {
    id: "4",
    label: "Equities",
    children: [{ id: "12", label: "Captial" }],
  },
  {
    id: "5",
    label: "Liabilities",
    children: [
      {
        id: "13", label: "Loans & Borrowings",
        children: [
          { id: "25", label: "Loans" }]
      },
      { id: "14", label: "Accrued Liabilities" },
      { id: "15", label: "Trade Payable" },
      { id: "16", label: "Provisions" },
    ],
  },
  {
    id: "6",
    label: "Control Accounts",
  },
];


export const accountData = [
  {
    MasterId: 1,
    Name: "Example Name 1",
    Code: "ABC123",
    AccountType: "Type A",
    CreatedBy: "User123"
  },
  {
    MasterId: 2,
    Name: "Example Name 2",
    Code: "DEF456",
    AccountType: "Type B",
    CreatedBy: "User456"
  },
  {
    MasterId: 3,
    Name: "Example Name 3",
    Code: "GHI789",
    AccountType: "Type C",
    CreatedBy: "User789"
  },
  {
    MasterId: 4,
    Name: "Example Name 4",
    Code: "JKL012",
    AccountType: "Type D",
    CreatedBy: "User012"
  },
  {
    MasterId: 5,
    Name: "Example Name 5",
    Code: "MNO345",
    AccountType: "Type E",
    CreatedBy: "User345"
  },
  {
    MasterId: 6,
    Name: "Example Name 6",
    Code: "PQR678",
    AccountType: "Type F",
    CreatedBy: "User678"
  },
  {
    MasterId: 7,
    Name: "Example Name 7",
    Code: "STU901",
    AccountType: "Type G",
    CreatedBy: "User901"
  },
  {
    MasterId: 8,
    Name: "Example Name 8",
    Code: "VWX234",
    AccountType: "Type H",
    CreatedBy: "User234"
  },
  {
    MasterId: 9,
    Name: "Example Name 9",
    Code: "YZA567",
    AccountType: "Type I",
    CreatedBy: "User567"
  },
  {
    MasterId: 10,
    Name: "Example Name 10",
    Code: "BCD890",
    AccountType: "Type J",
    CreatedBy: "User890"
  },
  {
    MasterId: 11,
    Name: "Example Name 11",
    Code: "EFG123",
    AccountType: "Type K",
    CreatedBy: "User123"
  },
  {
    MasterId: 12,
    Name: "Example Name 12",
    Code: "HIJ456",
    AccountType: "Type L",
    CreatedBy: "User456"
  },
];

export const exchangeRateData = [
  {
    MasterId: 1,
    "Currency Name": "gtgt",
    "Defined As": "gg",
    "Rate": 96,
    "Description": "gtgtg"
  },
  {
    MasterId: 2,
    "Currency Name": "USD",
    "Defined As": "US Dollar",
    "Rate": 1,
    "Description": "United States Dollar"
  },
  {
    MasterId: 3,
    "Currency Name": "EUR",
    "Defined As": "Euro",
    "Rate": 0.85,
    "Description": "European Currency"
  },
  {
    MasterId: 4,
    "Currency Name": "GBP",
    "Defined As": "British Pound",
    "Rate": 0.73,
    "Description": "Pound Sterling"
  },
];


export const exchangeRateHistoryData = [
  {
    MasterId: 1,
    "Select Currency": "",
    "Defined as": "",
  },

];

export const productData = [
  {
    "Master": 1,
    "Name": "Product A",
    "Code": "PA001",
    "Recorder Level": 5,
    "Bin capacity": "Large",
    "Is Attribute": false,
    "ItemType": "Widget",
    "Valuation Method": "FIFO"
  },
  {
    "Master": 2,
    "Name": "Product B",
    "Code": "PB002",
    "Recorder Level": 3,
    "Bin capacity": "Small",
    "Is Attribute": true,
    "ItemType": "Gadget",
    "Valuation Method": "LIFO"
  },
  {
    "Master": 3,
    "Name": "Product C",
    "Code": "PC003",
    "Recorder Level": 4,
    "Bin capacity": "Medium",
    "Is Attribute": false,
    "ItemType": "Tool",
    "Valuation Method": "Weighted Average"
  },
  {
    "Master": 4,
    "Name": "Product D",
    "Code": "PD004",
    "Recorder Level": 2,
    "Bin capacity": "Small",
    "Is Attribute": true,
    "ItemType": "Device",
    "Valuation Method": "Specific Identification"
  },
  {
    "Master": 5,
    "Name": "Product E",
    "Code": "PE005",
    "Recorder Level": 6,
    "Bin capacity": "Large",
    "Is Attribute": false,
    "ItemType": "Equipment",
    "Valuation Method": "Average Cost"
  },
  {
    "Master": 6,
    "Name": "Product F",
    "Code": "PF006",
    "Recorder Level": 3,
    "Bin capacity": "Medium",
    "Is Attribute": true,
    "ItemType": "Appliance",
    "Valuation Method": "FIFO"
  },
  {
    "Master": 7,
    "Name": "Product G",
    "Code": "PG007",
    "Recorder Level": 4,
    "Bin capacity": "Large",
    "Is Attribute": false,
    "ItemType": "Accessory",
    "Valuation Method": "LIFO"
  },
  {
    "Master": 8,
    "Name": "Product H",
    "Code": "PH008",
    "Recorder Level": 2,
    "Bin capacity": "Small",
    "Is Attribute": true,
    "ItemType": "Component",
    "Valuation Method": "Weighted Average"
  },
  {
    "Master": 9,
    "Name": "Product I",
    "Code": "PI009",
    "Recorder Level": 5,
    "Bin capacity": "Medium",
    "Is Attribute": false,
    "ItemType": "Material",
    "Valuation Method": "Specific Identification"
  },
  {
    "Master": 10,
    "Name": "Product J",
    "Code": "PJ010",
    "Recorder Level": 3,
    "Bin capacity": "Large",
    "Is Attribute": true,
    "ItemType": "Supply",
    "Valuation Method": "Average Cost"
  },
  {
    "Master": 11,
    "Name": "Product K",
    "Code": "PK011",
    "Recorder Level": 4,
    "Bin capacity": "Small",
    "Is Attribute": false,
    "ItemType": "Resource",
    "Valuation Method": "FIFO"
  },
  {
    "Master": 12,
    "Name": "Product L",
    "Code": "PL012",
    "Recorder Level": 2,
    "Bin capacity": "Medium",
    "Is Attribute": true,
    "ItemType": "Product",
    "Valuation Method": "LIFO"
  }
];

export const UnitData = [
  {
    Master: 1,
    Name: "Item 1",
    Code: "ITM001",
    "No of decimal": 2,
    "Rounding Type": "Normal",
  },
  {
    Master: 2,
    Name: "Item 2",
    Code: "ITM002",
    "No of decimal": 3,
    "Rounding Type": "Up",
  },
  {
    Master: 3,
    Name: "Item 3",
    Code: "ITM003",
    "No of decimal": 2,
    "Rounding Type": "Down",
  },
  {
    Master: 4,
    Name: "Item 4",
    Code: "ITM004",
    "No of decimal": 4,
    "Rounding Type": "Normal",
  },
  {
    Master: 5,
    Name: "Item 5",
    Code: "ITM005",
    "No of decimal": 2,
    "Rounding Type": "Up",
  },
  {
    Master: 6,
    Name: "Item 6",
    Code: "ITM006",
    "No of decimal": 3,
    "Rounding Type": "Down",
  },
  {
    Master: 7,
    Name: "Item 7",
    Code: "ITM007",
    "No of decimal": 2,
    "Rounding Type": "Normal",
  },
  {
    Master: 8,
    Name: "Item 8",
    Code: "ITM008",
    "No of decimal": 3,
    "Rounding Type": "Up",
  },
  {
    Master: 9,
    Name: "Item 9",
    Code: "ITM009",
    "No of decimal": 2,
    "Rounding Type": "Down",
  },
  {
    Master: 10,
    Name: "Item 10",
    Code: "ITM010",
    "No of decimal": 4,
    "Rounding Type": "Normal",
  },
  {
    Master: 11,
    Name: "Item 11",
    Code: "ITM011",
    "No of decimal": 2,
    "Rounding Type": "Up",
  },
  {
    Master: 12,
    Name: "Item 12",
    Code: "ITM012",
    "No of decimal": 3,
    "Rounding Type": "Down",
  },
];


export const warehouseData = [
  {
    MasterId: 1,
    Name: "Example Name 1",
    Code: "ABC123",
  },
  {
    MasterId: 2,
    Name: "Example Name 2",
    Code: "DEF456",
  },
  {
    MasterId: 3,
    Name: "Example Name 3",
    Code: "GHI789",
  },
  {
    MasterId: 4,
    Name: "Example Name 4",
    Code: "JKL012",
  },
  {
    MasterId: 5,
    Name: "Example Name 5",
    Code: "MNO345",
  },
  {
    MasterId: 6,
    Name: "Example Name 6",
    Code: "PQR678",
  },
  {
    MasterId: 7,
    Name: "Example Name 7",
    Code: "STU901",
  },
  {
    MasterId: 8,
    Name: "Example Name 8",
    Code: "VWX234",
  },
  {
    MasterId: 9,
    Name: "Example Name 9",
    Code: "YZA567",
  },
  {
    MasterId: 10,
    Name: "Example Name 10",
    Code: "BCD890",
  },
  {
    MasterId: 11,
    Name: "Example Name 11",
    Code: "EFG123",
  },
  {
    MasterId: 12,
    Name: "Example Name 12",
    Code: "HIJ456",
  },
];

export const productTree = [
  {
    id: "1",
    label: "Product",

  },
]

export const unitTree = [
  {
    id: "1",
    label: "Unit",

  },
]

export const warehouseTree = [
  {
    id: "1",
    label: "Warehouse",

  },
]
export const CustomizationTree = [
  {
    id: "1",
    label: "Master Fields",
    children: [
      { id: "7", label: "General" },
      { id: "11", label: "Entity",children: [{ id: "12", label: "" }] },
      { id: "8", label: "Settings" },
      { id: "9", label: "VAT Settings" },
      { id: "10", label: "Language" },
      
    ],
  },
  {
    id: "2",
    label: "Unique Constraints",
  },
  // {
  //   id: "3",
  //   label: "Info Panel Customization",
  // },
  // {
  //   id: "4",
  //   label: "Reports",
  // },
];


export const viewTree = [
  {
    id: "1",
    label: "Master Fields",
    children: [
      { id: "7", label: "General" },
      { id: "11", label: "Entity" ,children: [{ id: "12", label: "" }]},
      { id: "8", label: "Settings" },
      { id: "9", label: "VAT Settings" },
      { id: "10", label: "Language" },
    ],
  },
 
];

export const searchadvanceTreeItemsAccount = [
  { id: '1', label: 'General', children: [
    { id: '2', label: 'Name' },
    { id: '3', label: 'Code' },
    { id: '4', label: 'Account Type' },
    { id: '5', label: 'Group' },
    { id: '6', label: 'Cheque Discount Limit' },
    { id: '7', label: 'Rate Of interest' },
    { id: '8', label: 'PDC Discount A/C' },
    { id: '9', label: 'Bank A/C' },
  ] },
  { id: '10', label: 'Settings', children: [
    { id: '11', label: 'Default Currency' },
    
  ] },
  { id: '12', label: 'VAT Settings', children: [
    { id: '13', label: 'Place of Supply' },
    { id: '14', label: 'TRP' },
    { id: '15', label: 'Reverse charge' },
    
  ] },
  { id: '16', label: 'Languages', children: [
    { id: '17', label: 'Language' },
   
    
  ] },
  { id: '18', label: 'Business Entity', children: [
    { id: '19', label: 'Business Entity' },
    
    
  ] }
];

export const searchadvanceTreeItemsCustomer = [
  { id: '1', label: 'General', children: [
    { id: '2', label: 'Name' },
    { id: '3', label: 'Code' },
    { id: '4', label: 'Type' },
    { id: '5', label: 'Credit Limit' },
    { id: '6', label: 'Credit days' },
    { id: '7', label: 'Salesman' },
   
  ] },
  { id: '8', label: 'Settings', children: [
    { id: '9', label: 'Default Currency' },
    { id: '10', label: 'Reminder Terms' },
    { id: '11', label: 'Exchange Adjustment Gain' },
    { id: '12', label: 'Exchange Adjustment Loss' },
    
  ] },
  { id: '13', label: 'Details', children: [
    
    { id: '14', label: 'address' },
    { id: '15', label: 'City' },
    { id: '16', label: 'Contry'},
    { id: '17', label: 'Delivery Address' },
    { id: '18', label: 'Email' },
    
    
  ] },
  { id: '19', label: 'VAT Settings', children: [
    { id: '20', label: 'Place of supply' },
    { id: '21', label: 'Reverse chargeable' },
   
    
  ] },
  { id: '22', label: 'INFO', children: [
    { id: '23', label: 'Telephone Number' },
    { id: '24', label: 'Fax Number' },
    { id: '25', label: 'Pin' },
    { id: '26', label: 'Bank Account Name' },
    { id: '27', label: 'Bank Account Number' },
    { id: '28', label: 'IFSC Code' },
    { id: '29', label: 'Payment type' },
    { id: '30', label: 'Finance Email' },
    
    
  ] }
  ,
  { id: '31', label: 'Language', children: [
    { id: '32', label: 'Language' },
  ] } 
  ,
  { id: '33', label: 'Business Entity', children: [
    { id: '34', label: 'Business Entity' },
  ] }  
];

export const searchadvanceTreeItemsProduct = [
  { id: '1', label: 'General', children: [
    { id: '2', label: 'Name' },
    { id: '3', label: 'Code' },
    { id: '4', label: 'Type' },
    { id: '5', label: 'Credit Limit' },
    { id: '6', label: 'Credit days' },
    { id: '7', label: 'Salesman' },
   
  ] },
  { id: '8', label: 'Settings', children: [
    { id: '9', label: 'Default Currency' },
    { id: '10', label: 'Reminder Terms' },
    { id: '11', label: 'Exchange.Adj Gain' },
    { id: '12', label: 'Exchange.Adj Loass' },
    
  ] },
  { id: '13', label: 'Details', children: [
    
    { id: '14', label: 'address' },
    { id: '15', label: 'City' },
    { id: '16', label: 'Contry'}
    
  ] },
  { id: '17', label: 'Languages', children: [
    { id: '18', label: 'Language' },
   
    
  ] },
  { id: '19', label: 'Business Entity', children: [
    { id: '20', label: 'Business Entity' },
    
    
  ] }
];

export const searchAdvanceSelect = [
  { value: 'Default', label: 'Default' }

  
 
];

export const fixedAssetData = [
  {
    MasterId: 1,
    Name: "Example Name 1",
    Code: "ABC123",
    Type:"Type A",
    CreatedBy: "User123"
  },
  {
    MasterId: 2,
    Name: "Example Name 2",
    Code: "DEF456",
    Type:"Type B",
    CreatedBy: "User456"
  },
  {
    MasterId: 3,
    Name: "Example Name 3",
    Code: "GHI789",
    Type:"Type A",
    CreatedBy: "User789"
  },
  {
    MasterId: 4,
    Name: "Example Name 4",
    Code: "JKL012",
    Type:"Type E",
    CreatedBy: "User012"
  },
  {
    MasterId: 5,
    Name: "Example Name 5",
    Code: "MNO345",
    Type:"Type X",
    CreatedBy: "User345"
  },
  {
    MasterId: 6,
    Name: "Example Name 6",
    Code: "PQR678",
    Type:"Type A",
    CreatedBy: "User678"
  },
  {
    MasterId: 7,
    Name: "Example Name 7",
    Code: "STU901",
    Type:"Type Y",
    CreatedBy: "User901"
  },
  {
    MasterId: 8,
    Name: "Example Name 8",
    Code: "VWX234",
    Type:"Type D",
    CreatedBy: "User234"
  },
  {
    MasterId: 9,
    Name: "Example Name 9",
    Code: "YZA567",
    Type:"Type T",
    CreatedBy: "User567"
  },
  {
    MasterId: 10,
    Name: "Example Name 10",
    Code: "BCD890",
    Type:"Type Z",
    CreatedBy: "User890"
  },
  {
    MasterId: 11,
    Name: "Example Name 11",
    Code: "EFG123",
    Type:"Type A",
    CreatedBy: "User123"
  },
  {
    MasterId: 12,
    Name: "Example Name 12",
    Code: "HIJ456",
    Type:"Type A",
    CreatedBy: "User456"
  },
];

export const fixedAssetTree = [
  {
    id: "1",
    label: "FixedAsset",
    children: [
      { id: "7", label: "General" },
    ]  

  },
]

export const taxCodeData = [
  {
    MasterId: 1,
    Name: "Example Name 1",
    Code: "ABC123",
   
    CreatedBy: "User123"
  },
  {
    MasterId: 2,
    Name: "Example Name 2",
    Code: "DEF456",
   
    CreatedBy: "User456"
  },
  {
    MasterId: 3,
    Name: "Example Name 3",
    Code: "GHI789",
  
    CreatedBy: "User789"
  },
  {
    MasterId: 4,
    Name: "Example Name 4",
    Code: "JKL012",
  
    CreatedBy: "User012"
  },
  {
    MasterId: 5,
    Name: "Example Name 5",
    Code: "MNO345",
  
    CreatedBy: "User345"
  },
  {
    MasterId: 6,
    Name: "Example Name 6",
    Code: "PQR678",

    CreatedBy: "User678"
  },
  {
    MasterId: 7,
    Name: "Example Name 7",
    Code: "STU901",

    CreatedBy: "User901"
  },
  {
    MasterId: 8,
    Name: "Example Name 8",
    Code: "VWX234",

    CreatedBy: "User234"
  },
  {
    MasterId: 9,
    Name: "Example Name 9",
    Code: "YZA567",

    CreatedBy: "User567"
  },
  {
    MasterId: 10,
    Name: "Example Name 10",
    Code: "BCD890",

    CreatedBy: "User890"
  },
  {
    MasterId: 11,
    Name: "Example Name 11",
    Code: "EFG123",
  
    CreatedBy: "User123"
  },
  {
    MasterId: 12,
    Name: "Example Name 12",
    Code: "HIJ456",
   
    CreatedBy: "User456"
  },
];

export const taxCodeTree = [
  {
    id: "1",
    label: "TaxCode",
    children: [
      { id: "7", label: "General" },
    ]  

  },
]

export const placeOfSupplyTree = [
  {
    id: "1",
    label: "PlaceofSupply",
    children: [
      { id: "7", label: "General" },
    ]  

  },
]

export const jurisdictionTree = [
  {
    id: "1",
    label: "Jurisdiction",
    children: [
      { id: "7", label: "General" },
    ]  

  },
]



