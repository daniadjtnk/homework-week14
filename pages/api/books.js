import Book from '../../sequelize/models/book'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const data = await Book.findAll()
        res.status(200).json(data)
        } else if (req.method === 'POST'){
            const { title, author, publisher, year, pages, image } = req.body

            try {
                const book = await Book.create({
                    title,
                    author,
                    publisher,
                    year,
                    pages,
                    image,
                    createdAt: new DATE(),
                    updatedAt: new DATE(),
                })
                res.status(200).json(book)
            }catch(err){
                res.status(400).json(err)
            }


        }
        
        else {
            res.status(405).end()
        }

    }

