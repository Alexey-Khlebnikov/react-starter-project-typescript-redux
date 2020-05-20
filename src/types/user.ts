export enum UserRole {
	'Admin' = 'ADMIN',
	'User' = 'USER',
	'Guest' = 'GUEST'
}

export interface User {
	role: UserRole
}