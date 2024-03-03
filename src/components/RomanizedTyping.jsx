import { useState } from 'react'

export const RominizedTyping = () => {
  const [txt, setTxt] = useState('')
  return (
    <>
      <h1>Romanized typing</h1>
      <input value={txt} onChange={e => setTxt(e.target.value)} />
    </>
  )
}
