import { useState } from 'react'

/**
 * @feature: Заказать звонок
 * Figma: ссылка в шапке и кнопка в подвале
 * Где: виджеты Header, Footer
 */
export function RequestCallbackButton({ variant = 'button', className = '' }) {
	const buttonClass =
		variant === 'link'
			? 'border-b border-dashed text-xs text-primary'
			: 'w-fit rounded-md border border-[#1C6EB4] px-4 py-2 text-xs font-bold tracking-wide text-[#1C6EB4] uppercase transition-colors hover:bg-[#1C6EB4] hover:text-white'

	const [open, setOpen] = useState(false)
	const [phone, setPhone] = useState('')
	const [sent, setSent] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		setSent(true)
	}

	function close() {
		setOpen(false)
		setSent(false)
		setPhone('')
	}

	return (
		<div data-feature='request-callback'>
			<button
				type='button'
				onClick={() => setOpen(true)}
				className={`${buttonClass} ${className}`}
			>
				Заказать звонок
			</button>

			{open && (
				<div
					className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'
					onClick={close}
				>
					<div
						className='w-full max-w-sm rounded-xl bg-white p-6 shadow-xl'
						onClick={(e) => e.stopPropagation()}
					>
						{sent ? (
							<div className='py-4 text-center'>
								<p className='text-lg font-bold text-[#00396B]'>Спасибо!</p>
								<p className='mt-2 text-sm text-gray-500'>
									Мы перезвоним вам в ближайшее время.
								</p>
								<button
									type='button'
									onClick={close}
									className='mt-6 w-full rounded-md bg-[#1C6EB4] py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#00396B]'
								>
									Закрыть
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className='space-y-4'>
								<div className='flex items-center justify-between'>
									<h3 className='text-lg font-bold text-[#00396B]'>Заказать звонок</h3>
									<button
										type='button'
										onClick={close}
										aria-label='Закрыть'
										className='text-xl leading-none text-gray-400 hover:text-gray-600'
									>
										×
									</button>
								</div>
								<p className='text-sm text-gray-500'>
									Оставьте номер, и наш менеджер перезвонит вам в течение 15 минут.
								</p>
								<input
									type='tel'
									required
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									placeholder='+7 (___) ___-__-__'
									className='w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1C6EB4] focus:outline-none'
								/>
								<button
									type='submit'
									className='w-full rounded-md bg-[#1C6EB4] py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#00396B]'
								>
									Перезвоните мне
								</button>
							</form>
						)}
					</div>
				</div>
			)}
		</div>
	)
}
