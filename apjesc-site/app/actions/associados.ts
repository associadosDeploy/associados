'use server'

export interface AssociateProps {
  id: string,
  cep: string,
  city: string,
  state: string,
  oab: string,
  user_id: string,
  name: string,
  birthDate: string,
  cpf: string,
  phone: string,
  rg: string,
  emissor: string,
  rg_uf: string,
  shipping_date: string,
  naturalness: string,
  naturalness_uf: string,
  address: string,
  email_data: string,
  profession: string,
  affiliation: string,
  education: string,
  specialization: string,
  email_profession: string,
  acting: string,
  avatar: string,
  visible: boolean,
  valid: number,
}


export async function getAssociados(name: string): Promise<AssociateProps[]> {
  try {
    const response = await fetch(`https://associados-fastify-api.onrender.com/free/associate?name=${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 3600 // revalida a cada 1 hora
      }
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar associados: ${response.status}`)
    }

    const associados = await response.json()
    return associados
  } catch (error) {
    console.error('Erro ao buscar associados:', error)
    return [] // retorna array vazio em caso de erro
  }
}