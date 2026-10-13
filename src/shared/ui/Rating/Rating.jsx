// @shared-ui: звёзды рейтинга в карточке товара
export function Rating({ value = 0 }) {
	return <div aria-label={`Рейтинг ${value}`}>{'★'.repeat(Math.round(value))}</div>
}
