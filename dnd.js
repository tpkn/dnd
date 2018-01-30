/*!
 * DnD (v1.0.0.20180128), http://tpkn.me/
 */

function DnD(config){
	if(typeof config !== 'object' || config == null) throw new Error('No config!');
	if(typeof config.target !== 'object' || config.target == null) throw new Error('No target!')

	var target = config.target;
	var drop = typeof config.drop !== 'function' ? function(e){} : config.drop;
	var over = typeof config.over !== 'function' ? function(e){} : config.over;
	var out = typeof config.out   !== 'function' ? function(e){} : config.out;

	target.ondrop = function(e){
		e.preventDefault();
		out(e);
		drop(e);
	};

	target.ondragover = function(e){
		e.preventDefault();
		over(e);
	};

	target.ondragenter = function(e){
		e.preventDefault();
		over(e);
	};

	target.ondragleave = function(e){
		e.preventDefault();
		out(e);
	};

	target.ondragend = function(e){
		e.preventDefault();
		out(e);
	};
}
