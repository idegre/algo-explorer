const zeroInFront = (n: number): string => n < 10 ? `0${n}` : `${n}`

export const dateToDateValue = (timestamp: number): string => {
	const date = new Date(timestamp * 1000)
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	return `${year}-${zeroInFront(month)}-${zeroInFront(day)}`
}

export const timeToTimeValue = (timestamp: number): string => {
	const date = new Date(timestamp * 1000)
	const hour = date.getHours()
	const min = date.getMinutes()
	return `${zeroInFront(hour)}:${zeroInFront(min)}`
}
