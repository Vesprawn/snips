var MODULE = (function(a) {
	var privateFunc = function() {
		console.log('this function is private');
	};
	
	a.publicFunc = function() {
		console.log('public function');
	};
	
	return a;
})(MODULE || {});