import { Link } from 'react-router-dom'

const Card = ({ creator }) => {
  return (
    <div className="card">
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="creator-image"
        />
      )}

      <h2>{creator.name}</h2>

      <p>{creator.description}</p>

      <a href={creator.url} target="_blank" rel="noreferrer">
        Visit Channel
      </a>

      <div className="card-buttons">
        <Link to={`/creator/${creator.id}`}>
          <button>View Details</button>
        </Link>

        <Link to={`/edit/${creator.id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  )
}

export default Card