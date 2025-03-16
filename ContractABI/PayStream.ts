const PayStreamABI = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "addEmployee",
    inputs: [
      {
        name: "_employeeAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_name",
        type: "string",
        internalType: "string",
      },
      {
        name: "_salary",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "approveEmployeeKYC",
    inputs: [
      {
        name: "_employeeAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "depositToken",
    inputs: [
      {
        name: "_tokenAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amountToDeposit",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "success",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "employees",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "employeeAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "name",
        type: "string",
        internalType: "string",
      },
      {
        name: "salary",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "lastPaymentDate",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "isActive",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "kycStatus",
        type: "uint8",
        internalType: "enum PayStream.KYCStatus",
      },
      {
        name: "kycDocumentHash",
        type: "string",
        internalType: "string",
      },
      {
        name: "taxRate",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "employeesCounter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "employerToEmployees",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "employers",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "employerAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "name",
        type: "string",
        internalType: "string",
      },
      {
        name: "isVerified",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "paymentHistory",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "employer",
        type: "address",
        internalType: "address",
      },
      {
        name: "employee",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "taxAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "processPayment",
    inputs: [
      {
        name: "_employeeAddress",
        type: "address",
        internalType: "address payable",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "registerEmployer",
    inputs: [
      {
        name: "_employerAddr",
        type: "address",
        internalType: "address",
      },
      {
        name: "_name",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "rejectEmployeeKYC",
    inputs: [
      {
        name: "_employeeAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_reason",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setEmployeeTaxRate",
    inputs: [
      {
        name: "_employeeAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_taxRate",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "submitEmployeeKYC",
    inputs: [
      {
        name: "_documentHash",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateEmployeeSalary",
    inputs: [
      {
        name: "_employeeAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_newSalary",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "userTypes",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum PayStream.UserType",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "viewAllEmployees",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct PayStream.Employee[]",
        components: [
          {
            name: "employeeAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "salary",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "lastPaymentDate",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "isActive",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "kycStatus",
            type: "uint8",
            internalType: "enum PayStream.KYCStatus",
          },
          {
            name: "kycDocumentHash",
            type: "string",
            internalType: "string",
          },
          {
            name: "taxRate",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "viewAllPayments",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct PayStream.PaymentRecord[]",
        components: [
          {
            name: "employer",
            type: "address",
            internalType: "address",
          },
          {
            name: "employee",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "timestamp",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "taxAmount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "viewBalance",
    inputs: [
      {
        name: "_tokenAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "balance",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "viewMyPaymentHistory",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct PayStream.PaymentRecord[]",
        components: [
          {
            name: "employer",
            type: "address",
            internalType: "address",
          },
          {
            name: "employee",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "timestamp",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "taxAmount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "EmployeeRegistered",
    inputs: [
      {
        name: "employeeAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "name",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "employer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EmployerRegistered",
    inputs: [
      {
        name: "employerAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "name",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "KYCRejected",
    inputs: [
      {
        name: "userAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "userType",
        type: "uint8",
        indexed: false,
        internalType: "enum PayStream.UserType",
      },
      {
        name: "reason",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "KYCRequested",
    inputs: [
      {
        name: "userAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "userType",
        type: "uint8",
        indexed: false,
        internalType: "enum PayStream.UserType",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "KYCVerified",
    inputs: [
      {
        name: "userAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "userType",
        type: "uint8",
        indexed: false,
        internalType: "enum PayStream.UserType",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PaymentProcessed",
    inputs: [
      {
        name: "employer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "employee",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "taxAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SalaryUpdated",
    inputs: [
      {
        name: "employee",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newSalary",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TaxRateUpdated",
    inputs: [
      {
        name: "employee",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newTaxRate",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

export default PayStreamABI;
