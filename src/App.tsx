export const App = () => {
  const ideas = [
    { nick: 'cool-idea-nick-1', name: 'Idea 1', description: 'Description of idea1...' },
    { nick: 'cool-idea-nick-2', name: 'Idea 2', description: 'Description of idea1...' },
    { nick: 'cool-idea-nick-3', name: 'Idea 3', description: 'Description of idea1...' },
    { nick: 'cool-idea-nick-4', name: 'Idea 4', description: 'Description of idea1...' },
    { nick: 'cool-idea-nick-5', name: 'Idea 5', description: 'Description of idea1...' },
  ]
  return (
    <div>
      <h1>Ideanick</h1>
      {ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        )
      })}
    </div>
  )
}
