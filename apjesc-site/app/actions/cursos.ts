'use server'

export interface CourseProps {
  id: string;
  description: string;
  link: string;
  title: string;
  avatar: string;
}

export async function getCursos(): Promise<CourseProps[]> {
  try {
    const response = await fetch(`https://associados-fastify-api.onrender.com/free/course`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 3600
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