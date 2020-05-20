(function() {
	'use strict';

	kintone.events.on([ 'app.record.create.submit', 'app.record.edit.submit' ],
			function(event) {


				var data = {
					offset : 0,
					size : 134
				};

				kintone.api("/v1/users.json", "GET", data).then(function(resp) {

					/*alert(JSON.stringify(resp));*/
					
					console.log(JSON.stringify(resp));

				}, function(err) {
					alert('REST API‚ÅƒGƒ‰[‚ª”­¶‚µ‚Ü‚µ‚½');
				});



				return event;

			});
})();