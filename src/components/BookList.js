import Book from "./Book"

import { books } from "./books"

const BookList = () => {
	return (
		<div className="title">
			<h1>Best Selling Books</h1>
			<section className="booklist">
				{books.map((book, index) => {
					return <Book {...book} key={book.id} number={index} />
				})}
			</section>
		</div>
	)
}

export default BookList
