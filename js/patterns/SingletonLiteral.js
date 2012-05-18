/**
 * Singleton Literal
 */
var SingletonLiteral = {
    _int     : 1,
    _arr     :[], 
    _str     :"lorem",
    _obj     :{
        objp1  : undefined,
        objp2  : ""
    },
    
    _rx      : /\s+/,
    _und     : undefined,
    _nul     : null,
    
    doSome   : function(){
        
    },
    createArr   : function(){
        return [];
    },
    getArr      : function(){
        return this._arr;
    },

    _innerWork  : function(){
        this;               // OK: IDE show the inner scope.
        this.getArr();      // FAIL: IDE doesn't get the type.
        this.createArr();   // FAIL: IDE doesn't get the type.
        
        this._arr; // FAIL: IDE doesn't get the type.
        this._rx; // FAIL: IDE doesn't get the type.
    }
}
SingletonLiteral; // FAIL: IDE doesn't show properties (take as a class)
SingletonLiteral.getArr(); // FAIL: IDE doesn't return type
SingletonLiteral.createArr(); // OK IDE show Array methods
SingletonLiteral.doSome();// OK: return global scope


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
 */


// final check
var test = new SingletonLiteral();
test; // fail to expose props.



