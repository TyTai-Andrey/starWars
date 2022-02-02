import {useState, useCallback} from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const request = useCallback(async (url: string, method: methodTypes = 'GET', body: any = null, headers: any = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }

      const response = await fetch(url, {method, body, headers})
      const data = await response.json()

      if (!response.ok) {
      return false
      }

      setLoading(false)

      return data
    } catch (e) {
      setLoading(false)
      setError(true)
      return false
    }
  }, [])

  const clearError = useCallback(() => setError(false), [])

  return { loading, request, error, clearError }
}
