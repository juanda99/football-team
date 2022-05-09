import React from 'react'

interface Props {
  name: string
  desc?: string
}

const TeamPage = ({ name, desc }: Props): JSX.Element => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{desc}</h2>
    </>
  )
}

export default TeamPage
