export class CommentService {

    url = 'https://jsonplaceholder.typicode.com';

    getAllComments() {
      return   fetch(`${this.url}/comments`)
          .then(value => value.json())
          .then(value => value);

    }

    getCommentById(id) {
       return  fetch(`${this.url}/comments/${id}`)
           .then(value => value.json())
           .then(value => value);
    }



}