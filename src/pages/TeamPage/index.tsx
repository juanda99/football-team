import React from 'react'

interface Props {
  name: string
  desc?: string
}

export const TeamPage: React.FC<Props> = ({ name, desc }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{desc}</h2>
    </>
  )
}
