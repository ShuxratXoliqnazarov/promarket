// Простые контурные иконки соцсетей для подвала (своих ассетов в shared/assets ещё нет,
// библиотека иконок в проект не подключена — рисуем inline SVG).

export function WhatsAppIcon(props) {
	return (
		<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' {...props}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M12 3a9 9 0 0 0-7.75 13.5L3 21l4.64-1.22A9 9 0 1 0 12 3Z'
			/>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M8.5 8.6c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.6.6 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.6-.7.8-.9.2-.2.4-.2.6-.1l1.5.7c.2.1.3.2.4.3.1.2.1.9-.2 1.4-.3.6-1.5 1.1-2.1 1.2-.5.1-1.2.1-3.6-.9-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4Z'
			/>
		</svg>
	)
}

export function InstagramIcon(props) {
	return (
		<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' {...props}>
			<rect x='3.5' y='3.5' width='17' height='17' rx='5' />
			<circle cx='12' cy='12' r='4' />
			<circle cx='17' cy='7' r='1' fill='currentColor' stroke='none' />
		</svg>
	)
}

export function TelegramIcon(props) {
	return (
		<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' {...props}>
			<circle cx='12' cy='12' r='9' />
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='m7 11.8 10-4-2.3 10.4-3.6-2.8-1.9 1.9-.4-3.1-1.8-2.4Z'
			/>
			<path strokeLinecap='round' strokeLinejoin='round' d='m9.2 13.9 7.5-6.1' />
		</svg>
	)
}
