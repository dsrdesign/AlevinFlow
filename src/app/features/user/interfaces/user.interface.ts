export interface IResUserGet {
  data: IUserGet[]
  status: number
  message: string
}

export interface IUserGet {
  id: number
  nom: string
  prenom: string
  email: string
  telephone: number
  adresse: string
  statut: string
  fonction: string
  created_at: string
  updated_at: string
  id_role: string
}
