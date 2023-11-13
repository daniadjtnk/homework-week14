import { useState} from "react";

const BookForm = ({onBookCreated}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [year, setYear] = useState('');
    const [pages, setPages] = useState('');
    const [image, setImage] = useState('');


    const handleInputChange = (e) => {
        setNewBook(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/books', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: title, author: author, publisher: publisher, year:year, pages: pages, image: image})
            });
    
            if (res.ok) {
                const createdBook = await Response.json();
                onBookCreated(createdBook);
                setNewBook(' ')
            } else {
                console.error('Error creating book')
            }
    
        } catch(err) {
            console.log(err)
        }
        
        }

        return (
             <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Title"
                value={name}
                onChange={(e) => setName (e.target.value)}
                />
                <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor (e.target.value)}
                />
                <input
                type="text"
                placeholder="Publisher"
                value={publisher}
                onChange={(e) => setPublisher (e.target.value)}
                />
                <input
                type="number"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear (e.target.value)}
                />
                <input
                type="number"
                placeholder="Pages"
                value={pages}
                onChange={(e) => setPages (e.target.value)}
                />
                <input
                type="file"
                placeholder="Image"
                value={image}
                onChange={(e) => setImage (e.target.value)}
                />
                <button type="submit">Create Book</button>
            </form>

        )

    
}

export default BookForm;