/*!
 * Drag'n'Drop, http://tpkn.me/
 */

function DnD(target, options){
   if(typeof target !== 'object' || target == null){
      throw new TypeError('No target element');
   }

   var drop = typeof options.drop !== 'function' ? function(e){} : options.drop;
   var over = typeof options.over !== 'function' ? function(e){} : options.over;
   var out =  typeof options.out  !== 'function' ? function(e){} : options.out;

   target.ondrop = function(e){
      e.preventDefault();

      var files = e.dataTransfer.files;
      var text = e.dataTransfer.getData('text');
      
      drop(e, files, text);
      out(e);
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

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
   module.exports = DnD;
}else{
   if(typeof define === 'function' && define.amd){
      define([], function(){
         return DnD;
      });
   }else{
      window.DnD = DnD;
   }
}
