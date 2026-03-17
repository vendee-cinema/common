import { PROTO_PATHS } from '@vendee-cinema/contracts'

export const GRPC_CLIENTS = {
	AUTH_PACKAGE: {
		package: 'auth.v1',
		protoPath: PROTO_PATHS.AUTH,
		env: 'AUTH_GRPC_URL'
	},
	ACCOUNT_PACKAGE: {
		package: 'account.v1',
		protoPath: PROTO_PATHS.ACCOUNT,
		env: 'ACCOUNT_GRPC_URL'
	},
	USER_PACKAGE: {
		package: 'user.v1',
		protoPath: PROTO_PATHS.USER,
		env: 'USER_GRPC_URL'
	}
} as const
