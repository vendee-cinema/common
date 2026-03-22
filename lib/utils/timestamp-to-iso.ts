import { Timestamp } from '@vendee-cinema/contracts/gen/ts/google/protobuf/timestamp'

export function timestampToISO(ts: Timestamp): string | null {
	return new Date(ts.seconds * 100 + ts.nanos / 1_000_000).toISOString()
}
