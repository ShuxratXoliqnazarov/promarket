export function RequestCallbackButton() {
	function handleClick() {
		alert('Спасибо! Мы скоро вам перезвоним')
	}

	return (
		<button onClick={handleClick} className='border-b border-dashed text-xs text-primary'>
			Заказать звонок
		</button>
	)
}
