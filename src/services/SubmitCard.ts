export async function SubmitCard(tirada: Tirada) {
  const response = await fetch('https://ruleta-empresa.vercel.app/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tirada),
  })

  const data = await response.json()

  return data
}

export const createNewContact = async (email: string) => {
  console.log(email)
  const response = await fetch(
    `https://ruleta-empresa.vercel.app/api/contacts`,
    {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return await response.json()
}
