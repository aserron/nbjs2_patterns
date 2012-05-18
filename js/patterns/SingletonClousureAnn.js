/**
 * Singleton Clousure
 * @name  SingletonClousureAnn
 */
SingletonClousureAnn =(function(){
    /**
     * @namespace SingletonClousureAnn
     */
    var _arr = [];
    var _rx  = /\s+/;
    // FAIL : IDE doesnt see the inner props
    
    /**
     * @namespace SingletonClousureAnn
     */
    function _privateWork(){
        return _arr;
    } // OK : fixed with namespace
    
    return {
        myInt     : 1,
        myArr     :[], 
        myStr     :"lorem",
        myObj     :{
            objp1  : undefined,
            objp2  : ""
        },
    
        myRx      : /\s+/,
        myUnd     : undefined,
        myNul     : null,
    
        doSome   : function(){
            ;
        },
        createArr   : function(){
            return [];
        },
        getArr      : function(){
            return _arr;
        },

        _innerWork  : function(){
            this;               // OK: IDE show the inner scope.
            this.getArr();      // FAIL: IDE doesn't get the type.
            this.createArr();   // FAIL: IDE doesn't get the type.
        
            _arr; // FAIL: IDE doesn't get the type.
            _rx; // FAIL: IDE doesn't get the type.
        }
    }
})();
SingletonClousureAnn; // FAIL: IDE doesn't show properties (take as a class)
SingletonClousureAnn.getArr(); // FAIL: IDE doesn't return type
SingletonClousureAnn.createArr(); // OK IDE show Array methods
SingletonClousureAnn.doSome();// OK: return global scope


/**
 * Overall IDE performs like in the past.
 * 
 * OK 
 * - Prototype access return type.
 * 
 * FAIL
 * - doesnt show properties
 * - obj literal scope isn't detected
 * - fail to return types.
 * 
 * NOTE:
 * Works as SingletonLiteral
 * 
 * But works better when instanced.
 */


// final check
var test = new SingletonClousureAnn();
test; // OK: SHOW properties



