export interface Order {
    selectedIndex: number;
    orderNumber: number
    orderDate: Date
    customerId: number
    customerName: string
    itemNumber:number
    orderAddress:string

    price:number
    quantity:number
    total:number
    
  }