export function ArticleCard({ article }) {
	return (
		<a href='#' className='block h-full bg-white'>
			<img src={article.image} alt={article.title} className='h-52 w-full object-cover' />
			<h3 className='p-4 text-sm font-semibold'>{article.title}</h3>
		</a>
	)
}
