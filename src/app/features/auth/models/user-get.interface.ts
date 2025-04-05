
export interface IUtilisateurGet {
    data: {
        id: number,
        nom: string,
        prenom: string,
        matricule: string,
        email: string,
        id_role: string,
        nom_utilisateur: string,
        mot_de_passe?: string
    },
    token: string,
    message?: string,
    status?: number

}




