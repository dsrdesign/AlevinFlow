export interface IResRoleGet {
  data: IRoleGet[]
  status: number
  message: string
}

export interface IRoleGet {
  id: number
  nom: string
  created_at: string
  updated_at: string
}
