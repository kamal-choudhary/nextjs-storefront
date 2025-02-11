const baseUrl = process.env.BASE_URL || "http://localhost:3000"

export const api = {
  get: async (endpoint: string) => {
    const url = new URL(`/api/${endpoint}`, baseUrl)
    const response = await fetch(url)
    return response.json()
  }
}
