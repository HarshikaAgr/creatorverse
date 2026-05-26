import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import Card from '../components/Card'

const ShowCreators = () => {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select()
        .order('created_at', { ascending: false })

      if (error) {
        console.log('Error fetching creators:', error)
      } else {
        setCreators(data)
      }
    }

    fetchCreators()
  }, [])

  return (
    <div>
      <header className="hero">
        <h1>Creatorverse</h1>
        <p>My favorite creators worth following.</p>

        <Link to="/new">
          <button>Add Creator</button>
        </Link>
      </header>

      <div className="creator-list">
        {creators.length === 0 ? (
          <p>No creators yet. Add one!</p>
        ) : (
          creators.map((creator) => (
            <Card key={creator.id} creator={creator} />
          ))
        )}
      </div>
    </div>
  )
}

export default ShowCreators