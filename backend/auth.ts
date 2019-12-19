import {Request, Response} from 'express'
import {User, users} from './user'
import * as  jwt from 'jsonwebtoken'
import {apiConfig} from './apiConfig'

export const handleAuthentication = (request: Request, response: Response) => {
	const user = request.body
	if (isValid(user)) {
		const userFound = users[user.email];
		const token = jwt.sign({sub: userFound.email, iss: 'meat-api'}, apiConfig.secret);
		response.json({name: userFound.name, email: userFound.email, accessToken: token});
	} else {
		response.status(403).json({message: 'Dados inválidos.'})
	}
}

function isValid(user: User): boolean {
	if (!user) {
		return false;
	} 
	const userFound = users[user.email];
	return userFound !== undefined && userFound.matches(user);
}