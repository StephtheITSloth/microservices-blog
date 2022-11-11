import React, {useState} from 'react'
import axios from 'axios'

const PostCreate = () => {
    const [title, setTitle] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await axios({
                method: 'post',
                data: {title},
                url:  'localhos:4000/posts',
                headers: {
                    "Content-Type": "application.json"
                }
            })

            setTitle('')
        }
        catch(err){
            console.error(err)
        }
    }
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '20%'
        }}>
                <label htmlFor='title'>Title</label>
                <input type='text' onChange={e => setTitle(e.target.value)} value={title} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate