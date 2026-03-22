import { Timestamp } from '@vendee-cinema/contracts/gen/ts/google/protobuf/timestamp'

export function dateToTimestamp(date: Date): Timestamp {
	const ms = date.getTime()
	return {
		seconds: Math.floor(ms / 1000),
		nanos: (ms % 1000) * 1_000_000
	}
}
