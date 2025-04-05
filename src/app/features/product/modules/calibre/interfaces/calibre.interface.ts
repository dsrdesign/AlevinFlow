export interface IResCalibreGet {
    data: ICalibreGet[]
    status: number
    message: string
  }
  
  export interface ICalibreGet {
    id: number
    grammage: string
    stock: number
    prix_unitaire: number
    created_at: string
    updated_at: string
  }
  