const baseUrl = process.env.BASE_URL || "http://localhost:3000"

export const api = {
  get: async (endpoint: string) => {
    const response = await fetch(new URL(`/api/${endpoint}`, baseUrl))

    if (!response.ok) {
      return undefined
    }

    const data = await response.json()
    return data
  }
}
