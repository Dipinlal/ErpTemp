export const initialRows = [{
    iId: 1,
    EntityName:"Max",
    ProfileName: 'Profile1',
    CreatedOn: '2020-01-01',
    CreatedBy: 'user1',
    ModifiedOn: '2020-01-01',
    CheckerName: 'Sijina',
   
    
    
  },{
    iId: 2,
    EntityName:"Oriel",
    ProfileName: 'Profile2',
    CreatedOn: '2020-01-01',
    CreatedBy: 'user2',
    ModifiedOn: '2020-01-01',
    CheckerName: 'Sijina',
  
    
  },{
    iId: 3,
    EntityName:"Shipping",
    ProfileName: 'Profile3',
    CreatedOn: '2020-01-01',
    CreatedBy: 'user3',
    ModifiedOn: '2020-01-01',
    CheckerName: 'Sijina',
    
  }];

  export const createProfileTree = [
    {
        id: "1",
        label: "Home",
        children: [
          { id: "9", label: "Company" ,
          children: [
            { id: "10", label: "Open Company" },
            {
                id: "11",
                label: "New Company",
                children: [
                    { id: "12", label: "Create Company" },
                    
                ],
            },
            { id: "13", label: "Edit Company" },
            { id: "14", label: "Delete Company" },
          ],
          },
          {
              id: "15",
              label: "Security",
              children: [
                { id: "16", label: "Create Profile" },
                { id: "17", label: "Create Role" },
                { id: "18", label: "Create User" },
              ],
              
              
          },
          {
            id: "19",
            label: "Masters",
            children: [
              { id: "20", label: "Account" ,children: [
                { id: "21", label: "Account Master" },
                { id: "22", label: "Customer/vendor Master" },
                
              ],},
              { id: "23", label: "Currency" ,children: [
                { id: "24", label: "Currency Master" },
                { id: "25", label: "Exchange Rate" },
                { id: "26", label: "Exchange Rate History" },
                
              ],},
              { id: "27", label: "Product" ,children: [
                { id: "28", label: "Product" },
                { id: "29", label: "Unit" },
                { id: "30", label: "Unit Conversion" },
                { id: "31", label: "Seller Price Book" },
                { id: "32", label: "Buyer Price Book" },
                { id: "33", label: "Barcode Definition" },
                
              ],},
              { id: "34", label: "warehouse" }

              
            ],
            
            
        },
      ],
    },
    {
        id: "2",
        label: "Financials",
        // children: [
        //     { id: "9", label: "Direct Expenses" },
        //     {
        //         id: "10", label: "Indirect Expenses",
        //         children: [
        //             { id: "21", label: "Administrative Expenses" },
        //             {
        //                 id: "22",
        //                 label: "Employee Benefits",
        //             },
        //             { id: "23", label: "Financial Charges" },
        //             { id: "24", label: "Gain and Loss" },
        //         ],
        //     },
        // ],
    },
    {
        id: "3",
        label: "Inventory",
        // children: [{ id: "11", label: "Sales" }],
    },
    {
        id: "4",
        label: "Fixed Asset",
        // children: [{ id: "12", label: "Captial" }],
    },
    {
        id: "5",
        label: "Production",
        // children: [
        //     {
        //         id: "13", label: "Loans & Borrowings",
        //         children: [
        //             { id: "25", label: "Loans" }]
        //     },
        //     { id: "14", label: "Accrued Liabilities" },
        //     { id: "15", label: "Trade Payable" },
        //     { id: "16", label: "Provisions" },
        // ],
    },
    {
        id: "6",
        label: "Point of Sale",
    },
    {
      id: "7",
      label: "Quality Control",
      // children: [
      //     {
      //         id: "13", label: "Loans & Borrowings",
      //         children: [
      //             { id: "25", label: "Loans" }]
      //     },
      //     { id: "14", label: "Accrued Liabilities" },
      //     { id: "15", label: "Trade Payable" },
      //     { id: "16", label: "Provisions" },
      // ],
  },
  {
    id: "8",
    label: "Settings",
    children: [
        {
            id: "35", label: "Main Settings",
            children: [
                { id: "36", label: "Tag Settings" },
                { id: "37", label: "Account Settings" }
            ]
        },
        { id: "38", label: "Voucher Settings" },
        { id: "39", label: "Master Settings" },
        
    ],
},
];   
export const restrictionItems = [
  "Access", "Add", "Edit", "Copy", "Search", "Delete", "Print", "Export",
  "Customize View", "Sort", "Mass Update", "Authorize", "Transfer",
  "Properties", "Ledger", "Back Track", "Budgets", "Help", "Create Tree",
  "Delete Tree", "Create View", "Edit View", "Delete View", "Select View",
  "Select Tree", "Clone", "Add Group", "Group Master", "Set Type", "Delete All",
  "Move Up", "Move Down", "Credit Management", "Department Appropriation",
  "Customize Tree", "Customize Master", "Can Change Group", "Can Navigate",
  "Add Info Panel", "Edit Info Panel", "View Info Panel", "Reject", "Import",
  "Show home page", "Delete Info Panel", "Stop", "Save Revision", "Set Default Tree",
  "Modifier", "Edit Tree", "Authorization Info", "Alternate", "Related",
  "Open Close", "Close Product", "Adv Master Import/Export", "General", "Setting",
  "Details", "Print Layout", "VAT Settings", "TabNew", "Department"
];

export const historyProfile  = [
  { id: 1, profileName: "Portal", date: "15-04-2024", time: "13:56:07", createdBy: "SU" },
  { id: 2, profileName: "Portal2", date: "16-04-2024", time: "14:56:07", createdBy: "DI" },
  { id: 3, profileName: "", date: "", time: "", createdBy: "" },
  { id: 4, profileName: "", date: "", time: "", createdBy: "" },
  { id: 5, profileName: "", date: "", time: "", createdBy: "" },
  
];
export const historyRole  = [
  { id: 1, roleName: "Role1", date: "15-04-2024", time: "13:56:07", createdBy: "SU" },
  { id: 2, roleName: "Role2", date: "16-04-2024", time: "14:56:07", createdBy: "DI" },
  { id: 3, roleName: "", date: "", time: "", createdBy: "" },
  { id: 4, roleName: "", date: "", time: "", createdBy: "" },
  { id: 5, roleName: "", date: "", time: "", createdBy: "" },
  
];

export const RoleTable = [{
  iId: 1,
  RoleName: 'Role1',
  createdOn: '2020-01-01',
  CreatedBy: 'user1',
  ModifiedOn: '2020-01-01',
  CheckerName: 'Sijina',
 
  
  
},{
  iId: 2,
  RoleName: 'Role2',
  createdOn: '2020-01-01',
  CreatedBy: 'user2',
  ModifiedOn: '2020-01-01',
  CheckerName: 'Sijina',

  
},{
  iId: 3,
  RoleName: 'Role3',
  createdOn: '2020-01-01',
  CreatedBy: 'user1',
  ModifiedOn: '2020-01-01',
  CheckerName: 'Sijina',

  
}];

export const passwordPolicy = [
  { label: 'Simple', value: 'option1' },
  { label: 'Portal', value: 'option2' },
 
];

export const masterItems = [
  "Account", "Item", "Department", "Warehouse", "Cost Center", "Location", "Region", "Country", "State", "City",
  "Units", "Bins", "Tax Code", "Portal Rights", "Place of supply", "Jurisdiction", "Plant", "Supply Area",
  "Maintenance Parameter", "Safety Instructions", "Capacity", "Work Center", "Holiday", "Process", "Qc failure reason",
  "QC Parameters", "Insurance", "Fixed Asset", "Break down standard reason", "Employee", "Designation", "Position",
  "Qualification", "Specialization", "Nationality", "Skill Type", "Skill", "SourceType", "Source", "RoundType",
  "Grade", "Scale", "Course Type", "Course", "Trainer", "Airline Sector", "Venue", "Request Types", "Expense Claims",
  "Employee Bank", "Travel Agent", "Job Grade", "Outlet", "Counter", "Member Type", "Gift Voucher Definition", "Category",
  "Bank Card Type", "Member", "Discount Voucher Definition", "Floor", "Section", "Table", "Guest", "Void Remarks",
  "Member Card Definition", "Return Remarks", "Kitchen Display System", "Delivery Time Interval", "E-Payment", "Order Type",
  "Order Source", "jjjj", "abcd", "New", "testMaster"
];

export const masterTrees = [
  "tree1", "tree2", "tree3", "tree4",
];

export const roleRightSelectItem = [
  { label: 'Not Applicable', value: 'option1' },
  { label: 'Allow', value: 'option2' },
  { label: 'Alert', value: 'option3' },
  { label: 'Stop', value: 'option4' },
 
];

export const UserTable = [{
  iId: 1,
  User_Group: 'Group1',
  createdOn: '2020-01-01',
  CreatedBy: 'user2',
  ModifiedOn: '2020-01-01',
  CheckerName: 'Sijina',
 
  
  
},{
  iId: 2,
  User_Group: 'Group2',
  createdOn: '2020-01-01',
  CreatedBy: 'user1',
  ModifiedOn: '2020-01-01',
  CheckerName: 'Sijina',
  
},{
  iId: 3,
  User_Group: 'Group3',
  createdOn: '2020-01-01',
  CreatedBy: 'user2',
  ModifiedOn: '2020-01-01',
  CheckerName: 'Sijina',

  
}];
export const historyUser  = [
  { id: 1, userName: "User1", date: "15-04-2024", time: "13:56:07", createdBy: "SU" },
  { id: 2, userName: "User2", date: "16-04-2024", time: "14:56:07", createdBy: "DI" },
  { id: 3, userName: "", date: "", time: "", createdBy: "" },
  { id: 4, userName: "", date: "", time: "", createdBy: "" },
  { id: 5, userName: "", date: "", time: "", createdBy: "" },
  
];


export const erpRoles = [
  { label: 'Portal Role', value: 'PortalRole' },
  
 
];

export const securityQuestions = [
  { label: "What was your childhood nickname?", value: "q1" },
  { label: "In which city or town was your first job?", value: "q2" },
  { label: "What is your spouse's mother's maiden name?", value: "q3" },
  { label: "In which county were you born?", value: "q4" },
  { label: "What time of the day were you born?", value: "q5" },
  { label: "Who was your childhood hero?", value: "q6" },
  { label: "What was the first concert you attended?", value: "q7" },
  { label: "In which year was your father born?", value: "q8" },
  { label: "In which year was your mother born?", value: "q9" },
  { label: "What is your mother's maiden name?", value: "q10" },
  { label: "What was the color of your first car?", value: "q11" },
  { label: "What is your father's middle name?", value: "q12" },
  { label: "What is your mother's middle name?", value: "q13" },
  { label: "What was the name of your first car?", value: "q14" },
  { label: "What is your pet's name?", value: "q15" },
  { label: "What is your preferred musical genre?", value: "q16" },
  { label: "What is your favorite team?", value: "q17" },
  { label: "What is your favorite movie?", value: "q18" },
  { label: "What is your favorite teacher's nickname?", value: "q19" },
  { label: "What is your favorite TV program?", value: "q20" }
];

export const languages = [
  { label: "English", value: "l1" },
]

export const timeZone = [
  { label: "GMT-12:00 International Date Line West", value: "t1" },
  { label: "GMT-11:00 Coordinated Universal Time-11", value: "t2" },
  { label: "GMT-10:00 Hawaii", value: "t3" },
  { label: "GMT-09:30 Marquesas Islands", value: "t4" },
  { label: "GMT-09:00 Alaska", value: "t5" },
  { label: "GMT-08:00 Pacific Time (US & Canada)", value: "t6" },
  { label: "GMT-08:00 Baja California", value: "t7" },
  { label: "GMT-07:00 Arizona", value: "t8" },
  { label: "GMT-07:00 Chihuahua, La Paz, Mazatlan", value: "t9" },
  { label: "GMT-07:00 Mountain Time (US & Canada)", value: "t10" },
  { label: "GMT-06:00 Central America", value: "t11" },
  { label: "GMT-06:00 Central Time (US & Canada)", value: "t12" },
  { label: "GMT-06:00 Guadalajara, Mexico City, Monterrey", value: "t13" },
  { label: "GMT-06:00 Saskatchewan", value: "t14" },
  { label: "GMT-05:00 Bogota, Lima, Quito", value: "t15" },
  { label: "GMT-05:00 Eastern Time (US & Canada)", value: "t16" },
  { label: "GMT-05:00 Indiana (East)", value: "t17" },
  { label: "GMT-04:30 Caracas", value: "t18" },
  { label: "GMT-04:00 Asuncion", value: "t19" },
  { label: "GMT-04:00 Atlantic Time (Canada)", value: "t20" },
  { label: "GMT-04:00 Georgetown, La Paz, San Juan", value: "t21" },
  { label: "GMT-03:30 Newfoundland", value: "t22" },
  { label: "GMT-03:00 Brasilia", value: "t23" },
  { label: "GMT-03:00 Buenos Aires", value: "t24" },
  { label: "GMT-03:00 Cayenne, Fortaleza", value: "t25" },
  { label: "GMT-03:00 Greenland", value: "t26" },
  { label: "GMT-03:00 Montevideo", value: "t27" },
  { label: "GMT-02:00 Coordinated Universal Time-02", value: "t28" },
  { label: "GMT-01:00 Azores", value: "t29" },
  { label: "GMT-01:00 Cape Verde Is.", value: "t30" },
  { label: "GMT Coordinated Universal Time", value: "t31" },
  { label: "GMT+01:00 Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna", value: "t32" },
  { label: "GMT+01:00 Belgrade, Bratislava, Budapest, Ljubljana, Prague", value: "t33" },
  { label: "GMT+01:00 Brussels, Copenhagen, Madrid, Paris", value: "t34" },
  { label: "GMT+01:00 Sarajevo, Skopje, Warsaw, Zagreb", value: "t35" },
  { label: "GMT+01:00 West Central Africa", value: "t36" },
  { label: "GMT+02:00 Amman", value: "t37" },
  { label: "GMT+02:00 Athens, Bucharest, Istanbul", value: "t38" },
  { label: "GMT+02:00 Beirut", value: "t39" },
  { label: "GMT+02:00 Cairo", value: "t40" },
  { label: "GMT+02:00 Harare, Pretoria", value: "t41" },
  { label: "GMT+02:00 Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius", value: "t42" },
  { label: "GMT+02:00 Jerusalem", value: "t43" },
  { label: "GMT+02:00 Minsk", value: "t44" },
  { label: "GMT+02:00 Windhoek", value: "t45" },
  { label: "GMT+03:00 Baghdad", value: "t46" },
  { label: "GMT+03:00 Kuwait, Riyadh", value: "t47" },
  { label: "GMT+03:00 Moscow, St. Petersburg, Volgograd", value: "t48" },
  { label: "GMT+03:00 Nairobi", value: "t49" },
  { label: "GMT+03:00 Tbilisi", value: "t50" },
  { label: "GMT+03:30 Tehran", value: "t51" },
  { label: "GMT+04:00 Abu Dhabi, Muscat", value: "t52" },
  { label: "GMT+04:00 Baku", value: "t53" },
  { label: "GMT+04:00 Yerevan", value: "t54" },
  { label: "GMT+04:30 Kabul", value: "t55" },
  { label: "GMT+05:00 Ekaterinburg", value: "t56" },
  { label: "GMT+05:00 Islamabad, Karachi, Tashkent", value: "t57" },
  { label: "GMT+05:30 Chennai, Kolkata, Mumbai, New Delhi", value: "t58" },
  { label: "GMT+05:30 Sri Jayawardenepura", value: "t59" },
  { label: "GMT+05:45 Kathmandu", value: "t60" },
  { label: "GMT+06:00 Almaty, Novosibirsk", value: "t61" },
  { label: "GMT+06:00 Astana, Dhaka", value: "t62" },
  { label: "GMT+06:30 Yangon (Rangoon)", value: "t63" },
  { label: "GMT+07:00 Bangkok, Hanoi, Jakarta", value: "t64" },
  { label: "GMT+07:00 Krasnoyarsk", value: "t65" },
  { label: "GMT+08:00 Beijing, Chongqing, Hong Kong, Urumqi", value: "t66" },
  { label: "GMT+08:00 Kuala Lumpur, Singapore", value: "t67" },
  { label: "GMT+08:00 Irkutsk, Ulaanbaatar", value: "t68" },
  { label: "GMT+08:00 Perth", value: "t69" },
  { label: "GMT+08:00 Taipei", value: "t70" },
  { label: "GMT+09:00 Osaka, Sapporo, Tokyo", value: "t71" },
  { label: "GMT+09:00 Seoul", value: "t72" },
  { label: "GMT+09:00 Yakutsk", value: "t73" },
  { label: "GMT+09:30 Adelaide", value: "t74" },
  { label: "GMT+09:30 Darwin", value: "t75" },
  { label: "GMT+10:00 Brisbane", value: "t76" },
  { label: "GMT+10:00 Canberra, Melbourne, Sydney", value: "t77" },
  { label: "GMT+10:00 Hobart", value: "t78" },
  { label: "GMT+10:00 Vladivostok", value: "t79" },
  { label: "GMT+10:00 Guam, Port Moresby", value: "t80" },
  { label: "GMT+11:00 Magadan, Solomon Is., New Caledonia", value: "t81" },
  { label: "GMT+12:00 Auckland, Wellington", value: "t82" },
  { label: "GMT+12:00 Fiji, Kamchatka, Marshall Is.", value: "t83" },
  { label: "GMT+13:00 Nuku'alofa", value: "t84" }
];


export const UserType = [
  { label: "Employee", value: "Employee" },
  { label: "Customer", value: "Customer" },
  { label: "Other", value: "Other" },
]

export const CRMRoles = [
  { label: "CRM1", value: "CRM1" },
  
]

export const workingDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export const userDevice  = [
  { id: 1, status: "Online", device: "Laptop1", macId: "1881.22.2.2.2.2"},
  { id: 2, status: "offline", device: "Mobile1", macId: "11.1.11.1..1"},
  { id: 3, status: "offline", device: "Laptop2", macId: "223.444.4456.777"},
  { id: 4, status: "Online", device: "Mobile2", macId: "333.5555.777.888"},
  { id: 5, status: "Online", device: "Laptop2", macId: "113.555.7.777" },
  
];

export const roleTabData = {
  tab1: [
    { id: 1, ProfileName: 'Portal', Status: 'added' },
    { id: 2, ProfileName: 'profile2', Status: 'added'},
    { id: 3, ProfileName: 'Portal', Status: 'added' },
    { id: 4, ProfileName: 'profile2', Status: 'added'},
    { id: 5, ProfileName: 'Portal', Status: 'added' },
    { id: 6, ProfileName: 'profile2', Status: 'added'},
    { id: 7, ProfileName: 'Portal', Status: 'added' },
    { id: 8, ProfileName: 'profile2', Status: 'added'},
    { id: 9, ProfileName: 'Portal', Status: 'added' },
    { id: 10, ProfileName: 'profile2', Status: 'added'},
    { id: 11, ProfileName: 'Portal', Status: 'added' },
    { id: 12, ProfileName: 'profile2', Status: 'added'},
    { id: 13, ProfileName: 'Portal', Status: 'added' },
    { id: 14, ProfileName: 'profile2', Status: 'added'},
  ],
  tab2: [
    { id: 1, Action: 'test', Menu: 'test', Status: 'test' },
    
  ],
  tab3: [
    { id: 1, Action: 'test', Menu: 'test', Status: 'test' },
    
  ],
  tab4: [
    { id: 1, MasterName: 'Master', NewValue: 'test', Oldvalue: 'test',NewAction:"test",OldAction:"test",Status:"test" },
    
  ],
  tab5: [
    { id: 1, MasterName: 'Master', Value: 'test', Status: 'test' },
  ],
  tab6: [
    { id: 1, FieldName: 'test', NewValue: 'test', OldValue: 'test' },
  ],
};
export const userTabData = {
  tab1: [
    { id: 1, FiledName: 'Email Password',  NewValue: 'email password changed', Oldvalue: '---',},
    { id: 2, FiledName: 'Erp Roles',  NewValue: 'role', Oldvalue: 'portal role',},
    
  ],
  tab2: [
    { id: 1, MasterName: '',  NewValue: '', Oldvalue: '', NewAction: '', OldAction: '',Status:""},
    { id: 2, MasterName: '',  NewValue: '', Oldvalue: '', NewAction: '', OldAction: '',Status:""},
    
    
  ],
  tab3: [],
  
};
export const entityList = [
  { label: 'Entity1', value: 'Entity1' },
  { label: 'Entity2', value: 'Entity2' },
 
];

export const EntityMasterTable = [{
  iId: 1,
  EntityName: 'Entity1',
  createdOn: '2020-01-01',
  CreatedBy: 'user2',
  ModifiedOn: '2020-01-01',
  CheckerName: 'Sijina',
 
  
  
},{
  iId: 2,
  EntityName: 'Entity2',
  createdOn: '2020-01-01',
  CreatedBy: 'user1',
  ModifiedOn: '2020-01-01',
  CheckerName: 'Sijina',
  
},{
  iId: 3,
  EntityName: 'Entity3',
  createdOn: '2020-01-01',
  CreatedBy: 'user2',
  ModifiedOn: '2020-01-01',
  CheckerName: 'Sijina',

  
}];

export const TagCreationTable = [{
  iId: 1,
  Name: 'Tag1',
  Caption: 'Caption1',
  isDefault: 'Yes',
  multilanguage: 'Yes',
 
 
  
  
},{
  iId: 2,
  Name: 'Tag2',
  Caption: 'Caption2',
  isDefault: 'Yes',
  multilanguage: 'Yes',
  
},{
  iId: 3,
  Name: 'Tag3',
  Caption: 'Caption3',
  isDefault: 'Yes',
  multilanguage: 'Yes',

  
},{
  iId: 4,
  Name: 'Tag4',
  Caption: 'Caption4',
  isDefault: 'Yes',
  multilanguage: 'Yes',

  
},{
  iId: 5,
  Name: 'Tag5',
  Caption: 'Caption5',
  isDefault: 'Yes',
  multilanguage: 'Yes',

  
}];
