(function() {
	'use strict';
	kintone.events.on([ 'app.record.edit.show', 'app.record.create.show' ],
			function(event) {
				event.record["è§ïi"].disabled = false;
				return event;
			});
})();