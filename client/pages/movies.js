import {useState, Fragment} from 'react'
import {Sidebar} from '../components/sidebar'
export default function Movies() {
  const [movies, setMovies] = useState([])

  return (
    <Sidebar>
      <div>Choose a movie</div>
      <ul>
        {movies.map(m =>
          <li key={m.id}>
            {m.title}
          </li>
        )}
      </ul>
    </Sidebar>
  )
}
