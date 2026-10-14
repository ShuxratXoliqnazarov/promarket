export function CategoryTabs({ tabs, active, onChange }) {
	return (
		<div className='mb-4 flex flex-wrap gap-2'>
			{tabs.map((tab) => (
				<button
					key={tab.id}
					onClick={() => onChange(tab.id)}
					className={`rounded-sm px-3 py-1 text-xs transition ${
						active === tab.id ? 'bg-accent text-white' : 'bg-white text-primary hover:bg-accent/10'
					}`}
				>
					{tab.name}
				</button>
			))}
		</div>
	)
}
