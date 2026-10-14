import { useEffect, useState } from 'react'
import { ArticleCard, getArticles } from '@/entities/article'
import { Carousel, Container, SectionTitle } from '@/shared/ui'

export function Articles() {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		getArticles().then((data) => setArticles(data))
	}, [])

	return (
		<section data-section='articles' className='py-8'>
			<Container>
				<SectionTitle>Статьи</SectionTitle>
				<Carousel
					items={articles}
					slidesPerView={4}
					renderItem={(article) => <ArticleCard article={article} />}
				/>
			</Container>
		</section>
	)
}
