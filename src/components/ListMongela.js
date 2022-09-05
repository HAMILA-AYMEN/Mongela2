import MongelaCard from './MongelaCard'
import React from 'react'


function ListMongela({Data,searchTitle}) {
  return (
    <div className='row justify-content-center'>
      {Data.filter((mongela) =>mongela.title.toUpperCase()
.includes(searchTitle.toUpperCase().trim())  ) .map((mongela) => (
          <MongelaCard  mongela={mongela}
          key={mongela.id} />
        ))}
      
    </div>
  )
}

export default ListMongela
