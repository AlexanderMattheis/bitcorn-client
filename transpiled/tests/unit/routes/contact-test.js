import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
module('Unit | Route | contact', function (hooks) {
    setupTest(hooks);
    test('it exists', function (assert) {
        let route = this.owner.lookup('route:contact');
        assert.ok(route);
    });
});
//# sourceMappingURL=contact-test.js.map