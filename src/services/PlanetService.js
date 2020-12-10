export class PlanetService {
    url = 'https://swapi.dev/api/planets';

   async getAllPlanets() {
      return await fetch(this.url).then(value => value.json());
    }

   async getPlanet(id) {
       return await fetch(`${this.url}/${id}`)
           .then(value => value.json());
   }
}