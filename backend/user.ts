export class User {
  constructor(public email: string, public name: string, private password: string) { }

  matches(user: User): boolean {
    return user !== undefined && user.email === this.email && user.password === this.password
  }
}

export const users: { [key: string]: User } = {
  'jaderhenryk@gmail.com': new User('jaderhenryk@gmail.com', 'Jader Henryk', 'arceus493'),
  'joicyadriani@gmail.com': new User('joicyadriani@gmail.com', 'Joicy Adriani', 'mewtwo150')
}