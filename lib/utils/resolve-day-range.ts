export function resolveDayRange(dateString: string | Date) {
	const date = new Date(dateString)

	const start = new Date(date)
	start.setHours(0, 0, 0, 0)

	const end = new Date(start)
	end.setDate(end.getDate() + 1)

	return { start, end }
}
