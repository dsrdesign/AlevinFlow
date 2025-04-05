export interface PurchaseReportInterfaceData {
  id: number;
  date: string;
  company: string;
  name: string;
  code: number;
  unit: string;
  purchaseQty: number;
  amount: number;
}
export const purchaseReportData: PurchaseReportInterfaceData[] = [
  {
    id: 1,
    date: '01 Jan 2024',
    company: 'Organic Food',
    name: 'China Apple',
    code: 58756689,
    unit: 'Kilogram (kg)',
    purchaseQty: 30,
    amount: 582.0,
  },
  {
    id: 2,
    date: '02 Jan 2024',
    company: 'Billa Traders',
    name: 'Australian Orange',
    code: 58756690,
    unit: 'Kilogram (kg)',
    purchaseQty: 40,
    amount: 720.0,
  },
  {
    id: 3,
    date: '03 Jan 2024',
    company: 'Dell Incoporation',
    name: 'Acer',
    code: 58756691,
    unit: 'Quantity (q)',
    purchaseQty: 20,
    amount: 390.0,
  },
  {
    id: 4,
    date: '04 Jan 2024',
    company: 'A4Tech',
    name: 'T-shirt',
    code: 58756692,
    unit: 'Quantity (q)',
    purchaseQty: 50,
    amount: 880.0,
  },
  {
    id: 5,
    date: '05 Jan 2024',
    company: 'HP Technology',
    name: 'Dell Laptop',
    code: 58756693,
    unit: 'Quantity (q)',
    purchaseQty: 35,
    amount: 675.0,
  },
  {
    id: 6,
    date: '06 Jan 2024',
    company: 'Amazon',
    name: 'Mouse',
    code: 58756694,
    unit: 'Quantity (q)',
    purchaseQty: 25,
    amount: 480.0,
  },
  {
    id: 7,
    date: '07 Jan 2024',
    company: 'HP',
    name: 'HP Monitor',
    code: 58756695,
    unit: 'Quantity (q)',
    purchaseQty: 45,
    amount: 810.0,
  },
  {
    id: 8,
    date: '08 Jan 2024',
    company: 'Lenovo',
    name: 'LED TV',
    code: 58756696,
    unit: 'Quantity (q)',
    purchaseQty: 60,
    amount: 1080.0,
  },
  {
    id: 9,
    date: '09 Jan 2024',
    company: 'Honor',
    name: 'Thai Pineapple',
    code: 58756697,
    unit: 'Kilogram (kg)',
    purchaseQty: 15,
    amount: 240.0,
  },
  {
    id: 10,
    date: '10 Jan 2024',
    company: 'Sony',
    name: 'Mexican Avocado',
    code: 58756694,
    unit: 'Kilogram (kg)',
    purchaseQty: 25,
    amount: 480.0,
  },
  {
    id: 11,
    date: '11 Jan 2024',
    company: 'Greno Store',
    name: 'Italian Lemon',
    code: 58756695,
    unit: 'Kilogram (kg)',
    purchaseQty: 45,
    amount: 810.0,
  },
];
