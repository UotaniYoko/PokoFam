(function() {
	'use strict';
	kintone.events.on([ 'app.record.edit.show', 'app.record.create.show' ],
			function(event) {
				event.record["���i"].disabled = false;
				return event;
			});
})();