export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number,
): Promise<T> => {
  const response = await fetch(process.env.HYGRAPHCMS_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPHCMS_TOKEN}`,
    },
    // next: {
    //   revalidate,
    // },
    body: JSON.stringify({
      query,
    }),
  })

  const { data } = await response.json()

  return data
}
