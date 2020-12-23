export class UserService {
    url = 'https://jsonplaceholder.typicode.com/users'

   async getUser() {
      return await fetch(`${this.url}`)
            .then(value => value.json())
            .then(value => {return value})
    }
}