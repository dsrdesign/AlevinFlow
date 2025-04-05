export interface IResAlimentGet {
  data: IAlimentGet[]
  status: number
  message: string
}

export interface IAlimentGet {
  id: number
  nom: string
  type: string
  stock: number
  categorie: string
  prix_unitaire: number
  created_at: string
  updated_at: string
}
