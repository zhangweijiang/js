var b = {};     
b.test = function(input){  
    alert("b.js");  
} 

$.fn.extend({          
    alertWhileClick:function() {            
          alert('extend');         
     }       
});  