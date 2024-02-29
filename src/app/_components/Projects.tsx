import React from 'react'
import { projects } from '../../../public/data'
import Card from './Card'

function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {projects.map(project => (
      <Card
        key={project.id}
        imageUrl={project.imageUrl}
        title={project.title}
        description={project.description}
      />
    ))}
  </div>
  )
}

export default Projects