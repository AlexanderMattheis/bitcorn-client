import Route from '@ember/routing/route';

export default class Index extends Route.extend({
    beforeModel() {
        this.transitionTo('home');
    }
}) {
  // normal class body definition here
}
