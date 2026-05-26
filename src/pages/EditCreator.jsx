import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', url: '', description: '', imageURL: '' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators').select('*').eq('id', id).single()
      if (!error) setForm(data)
      setLoading(false)
    }
    fetchCreator()
  }, [id])

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase
      .from('creators')
      .update({ name: form.name, url: form.url, description: form.description, imageURL: form.imageURL })
      .eq('id', id)
    if (!error) navigate('/')
    else alert('Error updating creator.')
  }

  if (loading) return <div className="loading">Loading...</div>

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
      <div className="page-title">Edit Creator</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name *</label>
          <input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Channel URL *</label>
          <input name="url" value={form.url} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description *</label>
          <textarea name="description" value={form.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Image URL (optional)</label>
          <input name="imageURL" value={form.imageURL || ''} onChange={handleChange} />
        </div>
        <button className="submit-btn" type="submit">Save Changes</button>
      </form>
    </div>
  )
}

export default EditCreator