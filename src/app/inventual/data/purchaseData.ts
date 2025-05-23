export interface PurchaseInterfaceData {
  id: number;
  date: any;
  reference: string | number;
  supplier: string;
  warehouse: string;
  status: string;
  payment: string;
  total: number;
  paid: number;
  due: number;
  action: any;
}
export const purchaseData: PurchaseInterfaceData[] = [
  {
    id: 1,
    date: '01/01/2024',
    reference: 'S-326564580710',
    supplier: 'William Prady',
    warehouse: 'Warehouse 8',
    status: 'Completed',
    payment: 'Paid',
    total: 5250,
    paid: 5250,
    due: 0,
    action: 'action',
  },
  {
    id: 2,
    date: '01/05/2024',
    reference: 'S-987654321098',
    supplier: 'Emily Jones',
    warehouse: 'Warehouse 3',
    status: 'Ordered',
    payment: 'Unpaid',
    total: 5000,
    paid: 0,
    due: 5000,
    action: 'action',
  },
  {
    id: 3,
    date: '01/12/2024',
    reference: 'S-456789012345',
    supplier: 'John Smith',
    warehouse: 'Warehouse 5',
    status: 'Completed',
    payment: 'Paid',
    total: 7500,
    paid: 7500,
    due: 0,
    action: 'action',
  },
  {
    id: 4,
    date: '01/20/2024',
    reference: 'S-123456789012',
    supplier: 'Sarah Johnson',
    warehouse: 'Warehouse 2',
    status: 'Ordered',
    payment: 'Unpaid',
    total: 4250,
    paid: 0,
    due: 4250,
    action: 'action',
  },
  {
    id: 5,
    date: '01/15/2024',
    reference: 'S-678901234567',
    supplier: 'Michael Brown',
    warehouse: 'Warehouse 4',
    status: 'Ordered',
    payment: 'Paid',
    total: 6100,
    paid: 6100,
    due: 0,
    action: 'action',
  },
  {
    id: 6,
    date: '01/28/2024',
    reference: 'S-345678901234',
    supplier: 'Jessica Miller',
    warehouse: 'Warehouse 1',
    status: 'Draft',
    payment: 'Partial',
    total: 4000,
    paid: 3000,
    due: 1000,
    action: 'action',
  },
  {
    id: 7,
    date: '01/03/2024',
    reference: 'S-890123456789',
    supplier: 'David Wilson',
    warehouse: 'Warehouse 6',
    status: 'Completed',
    payment: 'Unpaid',
    total: 3000,
    paid: 0,
    due: 3000,
    action: 'action',
  },
  {
    id: 8,
    date: '01/19/2024',
    reference: 'S-567890123456',
    supplier: 'Amanda Taylor',
    warehouse: 'Warehouse 9',
    status: 'Completed',
    payment: 'Partial',
    total: 8000,
    paid: 3000,
    due: 5000,
    action: 'action',
  },
  {
    id: 9,
    date: '01/22/2024',
    reference: 'S-234567890123',
    supplier: 'Daniel Martinez',
    warehouse: 'Warehouse 7',
    status: 'Draft',
    payment: 'Unpaid',
    total: 3000,
    paid: 0,
    due: 3000,
    action: 'action',
  },
  {
    id: 10,
    date: '01/19/2024',
    reference: 'S-567890128256',
    supplier: 'Taylor Swift',
    warehouse: 'Warehouse 9',
    status: 'Completed',
    payment: 'Paid',
    total: 5000,
    paid: 5000,
    due: 0,
    action: 'action',
  },
  {
    id: 11,
    date: '01/20/2024',
    reference: 'S-890123456349',
    supplier: 'Donald Wilson',
    warehouse: 'Warehouse 10',
    status: 'Completed',
    payment: 'Unpaid',
    total: 7500,
    paid: 0,
    due: 7500,
    action: 'action',
  },
];
