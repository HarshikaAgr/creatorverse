import { useNavigate } from 'react-router-dom'

function Card({ creator, onDelete }) {
  const navigate = useNavigate()

  const handleEdit = (e) => {
    e.stopPropagation()
    navigate(`/edit/${creator.id}`)
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    const confirmed = window.confirm(
      `Are you sure you want to delete "${creator.name}"?\n\nThis cannot be undone.`
    )
    if (confirmed) {
      onDelete(creator.id)
    }
  }

  return (
    <div className="card" onClick={() => navigate(`/creator/${creator.id}`)}>

      {creator.imageURL
        ? <img className="card-bg" src={creator.imageURL} alt={creator.name} />
        : <div className="card-no-image" />
      }

      <div className="card-overlay" />

      <div className="card-actions">
        <button className="icon-btn edit-icon" onClick={handleEdit} title="Edit">
          Edit
        </button>
        <button className="icon-btn delete-icon" onClick={handleDelete} title="Delete">
          Delete
        </button>
      </div>

      <div className="card-content">
        <div className="card-name">{creator.name}</div>
        <div className="card-desc">{creator.description}</div>
        
        <a className="card-link" href={creator.url} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Visit Channel</a>
      </div>

    </div>
  )
}

export default Card