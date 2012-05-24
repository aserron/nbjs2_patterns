

    
/**
     * @class Module
     */
module.Module = function(){
    
    /*
     *
     *
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
        
        
    /**
    * @type Function
    */
    var _moduleFn2;
    
    /**
         * @namespace module.Module  
         * @method          
         * @return {Array} An array.
         * @type Array
         */
    function _moduleFn1(){
        return []
    }    
    // ERROR : _moduleFn1 seen as global.
        
    _moduleFn1.join(separator)  ; // FAIL : fn 
    _moduleFn1().forEach(callback, thisObject); // OK : ide return array type
    
    
    function _moduleFn1b(){
        var res;
        res = [];
        return res;
    };
    
    _moduleFn1b;   // FAIL: No function type
    _moduleFn1b(); // FAIL: No return type
    
    // note: 1b fail to even been tracked as fn, even less return type data.
    
    /**
         * @namespace module.Module
         * @param {Array} arr
         * @param {RegExp} rx
         * @return {Array} An array.
         * @type Array
         */
    _moduleFn2 = function(arr, rx){
        arr;          // OK : IDE show array methods
        rx.exec(str); // OK : IDE show rx methods and docs.
        var res = [];
        return res;
    }
    
    _moduleFn2;   // OK : function type
    _moduleFn2(); // FAIL, No return type
    
    // Note: code complete show Fn2 as property, which is true if typed correctly.
    // Note: Any of them is located inside the Module class context, IDE set them to global.
    
    return /** @scope module.Module.prototype */{
            
        /**
             * A Number.
             * @type Number
             */
        myInt     : 1,
        /**
             * An Array.
             * @type Array
             */
        myArr     : [], 
        /**
             * A String.
             * @type String
             */
        myStr     :"lorem",
        /**
             * An Object.
             * @internal Magic props?
             * @property {Array} objep1 Test magic props.
             * @property {Number} objep2 Another Test.
             * @type Object
             */
        myObj     :{
            objp1  : undefined,
            objp2  : ""
        },
    
        myRx      : /\s+/,
        myUnd     : undefined,
        myNul     : null,
        
        /**
        * @constructor
        */
        constructor: function(){
            this.coco = 1; // fail : coco hasn't been added as property
        },
        doSome   : function(){
            this; // FAIL : scope is completly skiped
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
}();
// ERROR: IDE doesn't show the exposed module (js1 did).
    

module.Module;   // FAIL: Module is Object
module.Module(); // OK: found constructor!

// ERROR: Module can't be seen by IDE as 




