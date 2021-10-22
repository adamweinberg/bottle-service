import React, { useState } from 'react'

const Test = () => {
  const [name, setName] = useState('Bottle Service')

  return <h1>Hello {name}</h1>
}

export default Test
