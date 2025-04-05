export interface IResPurchaseGet {
    data: IPurchaseGet[]
    status: number
    message: string
  }
  
  export interface IPurchaseGet {
    id: number
    grammage: string
    stock: number
    prix_unitaire: number
    created_at: string
    updated_at: string
  }
  