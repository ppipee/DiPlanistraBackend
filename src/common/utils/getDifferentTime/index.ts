import dayjs from 'dayjs'
import { OpUnitType, QUnitType } from 'dayjs'

export enum DifferentDateUnit {
	Year = 'year',
	Month = 'month',
	Quarter = 'quarter',
	Week = 'week',
	Day = 'day',
	Hour = 'hour',
	Minute = 'minute',
	Seconde = 'second',
	Millisecond = 'millisecond',
}

export default function getDifferentTime(
	startDate: Date,
	endDate: Date,
	unit = DifferentDateUnit.Day as OpUnitType | QUnitType,
	floatingPoint = false,
) {
	const end = dayjs(endDate)

	return end.diff(startDate, unit, floatingPoint)
}
