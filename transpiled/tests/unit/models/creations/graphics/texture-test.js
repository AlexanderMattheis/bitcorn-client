import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
module('Unit | Model | creations/graphics/texture', function (hooks) {
    setupTest(hooks);
    // Replace this with your real tests.
    test('it exists', function (assert) {
        let store = this.owner.lookup('service:store');
        let model = run(() => store.createRecord('creations/graphics/texture', {}));
        assert.ok(model);
    });
});
//# sourceMappingURL=texture-test.js.map