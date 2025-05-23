export interface StockReportInterfaceData {
  id: number;
  date: string;
  warehouse: string;
  name: string;
  unit: string;
  openingStock: number;
  received: number;
  totalStock: number;
  sales: number;
  closingStock: number;
}
export const stockReportData: StockReportInterfaceData[] = [
  {
    id: 1,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 2',
    name: 'Samsung Phone',
    unit: 'Quantity (q)',
    openingStock: 364,
    received: 450,
    totalStock: 814,
    sales: 60,
    closingStock: 754,
  },
  {
    id: 2,
    date: '02 Jan 2024',
    warehouse: 'Warehouse 2',
    name: 'Samsung Phone',
    unit: 'Quantity (q)',
    openingStock: 400,
    received: 420,
    totalStock: 820,
    sales: 70,
    closingStock: 750,
  },
  {
    id: 3,
    date: '03 Jan 2024',
    warehouse: 'Warehouse 3',
    name: 'HP Laptop',
    unit: 'Quantity (q)',
    openingStock: 380,
    received: 440,
    totalStock: 820,
    sales: 65,
    closingStock: 755,
  },
  {
    id: 4,
    date: '04 Jan 2024',
    warehouse: 'Warehouse 3',
    name: 'HP Laptop',
    unit: 'Quantity (q)',
    openingStock: 370,
    received: 430,
    totalStock: 800,
    sales: 55,
    closingStock: 745,
  },
  {
    id: 5,
    date: '05 Jan 2024',
    warehouse: 'Warehouse 4',
    name: 'Dell Desktop',
    unit: 'Quantity (q)',
    openingStock: 360,
    received: 460,
    totalStock: 820,
    sales: 62,
    closingStock: 758,
  },
  {
    id: 6,
    date: '06 Jan 2024',
    warehouse: 'Warehouse 4',
    name: 'Dell Desktop',
    unit: 'Quantity (q)',
    openingStock: 350,
    received: 480,
    totalStock: 830,
    sales: 68,
    closingStock: 762,
  },
  {
    id: 7,
    date: '07 Jan 2024',
    warehouse: 'Warehouse 5',
    name: 'Apple MacBook',
    unit: 'Quantity (q)',
    openingStock: 340,
    received: 470,
    totalStock: 810,
    sales: 63,
    closingStock: 747,
  },
  {
    id: 8,
    date: '08 Jan 2024',
    warehouse: 'Warehouse 5',
    name: 'Apple MacBook',
    unit: 'Quantity (q)',
    openingStock: 330,
    received: 490,
    totalStock: 820,
    sales: 58,
    closingStock: 762,
  },
  {
    id: 9,
    date: '09 Jan 2024',
    warehouse: 'Warehouse 6',
    name: 'Asus Router',
    unit: 'Quantity (q)',
    openingStock: 320,
    received: 460,
    totalStock: 780,
    sales: 66,
    closingStock: 714,
  },
  {
    id: 10,
    date: '10 Jan 2024',
    warehouse: 'Warehouse 6',
    name: 'Asus Router',
    unit: 'Quantity (q)',
    openingStock: 310,
    received: 450,
    totalStock: 760,
    sales: 59,
    closingStock: 701,
  },
  {
    id: 11,
    date: '11 Jan 2024',
    warehouse: 'Warehouse 7',
    name: 'Sony Camera',
    unit: 'Quantity (q)',
    openingStock: 300,
    received: 440,
    totalStock: 740,
    sales: 57,
    closingStock: 683,
  },
  {
    id: 12,
    date: '12 Jan 2024',
    warehouse: 'Warehouse 7',
    name: 'Sony Camera',
    unit: 'Quantity (q)',
    openingStock: 290,
    received: 430,
    totalStock: 720,
    sales: 63,
    closingStock: 657,
  },
  {
    id: 13,
    date: '13 Jan 2024',
    warehouse: 'Warehouse 8',
    name: 'Logitech Mouse',
    unit: 'Quantity (q)',
    openingStock: 280,
    received: 420,
    totalStock: 700,
    sales: 55,
    closingStock: 645,
  },
  {
    id: 14,
    date: '14 Jan 2024',
    warehouse: 'Warehouse 8',
    name: 'Logitech Mouse',
    unit: 'Quantity (q)',
    openingStock: 270,
    received: 410,
    totalStock: 680,
    sales: 50,
    closingStock: 630,
  },
  {
    id: 15,
    date: '15 Jan 2024',
    warehouse: 'Warehouse 9',
    name: 'Amazon Echo',
    unit: 'Quantity (q)',
    openingStock: 260,
    received: 400,
    totalStock: 660,
    sales: 45,
    closingStock: 615,
  },
];
