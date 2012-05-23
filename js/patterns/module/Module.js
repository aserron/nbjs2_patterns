module.Module = function(){
    
    /**
     * Lets define a set of private functions.
     * Either by named fn or variable assigment.
     * 
     * IDE should understand that they are functions in every case.
     * 
     * 1) Type returned from the name should be always function proto.
     * 
     * 2) Type return from the function should match the type no matter is 
     * returned explicity or by dropping a typed variable.
     * 
     * 3) Also, they should be CONTEXT AWARE, in this case, the module clousure.     * 
     */    
    var _moduleFn2;
    
    function _moduleFn1(){
        return []
    }    
    _moduleFn1.constructor;                      // FAIL: function taken as constructor of array
    _moduleFn1().concat(value1, value2, valueN); // OK. Return type
    
    
    function _moduleFn1b(){
        var res;
        res = [];
        return res;
    };
    
    _moduleFn1b;   // FAIL: No function type
    _moduleFn1b(); // FAIL: No return type
    
    // note: 1b fail to even been tracked as fn, even less return type data.
    
    _moduleFn2 = function(arr, rx){
        arr;// no info, no meta
        var res = [];
        return res;
    }
    
    _moduleFn2.arity; // ok fn type detected.    
    _moduleFn2(); // FAIL, No return type
    
    // Note: code complete show Fn2 as property, which is true if typed correctly.
    // Note: Any of them is located inside the Module class context, IDE set them to global.
    
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
        
        /**
         * Fail: constructor not parsed, (as other module props.
         */
        constructor: function(){
            this.coco = 1; // fail : coco hasn't been added as property
        },
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
            this;               // FAIL: No Context, global = this.
            this.getArr();      // FAIL: IDE doesn't get the type.
            this.createArr();   // FAIL: IDE doesn't get the type.
            
            // No scope, all broken.
            
           
            
        }
    }
}()
// ERROR: IDE doesn't show the exposed module (js1 did).


Module(); // ERROR: Module is inside module package. consturctor globally located.

module.Module;   // FAIL: Module is Object
module.Module(); // OK: module has Module class

// ERROR: Module can't be seen by IDE as 
