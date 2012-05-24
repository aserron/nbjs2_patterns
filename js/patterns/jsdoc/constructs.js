var Person = makeClass(
    /**
      @lends Person.prototype
    */
    {
        /** 
         * All documenation for Person should be here.
         * @constructs 
         */
        initialize: function(name) {
            this.name = name;
        },
        say: function(message) {
            return this.name + " says: " + message;
        }
    }
);

/*
* not even a clue of what Person is it.
* 
* Note that the literal inside the function is the key.
* Lends is a powerfull tool that is informing that the next literal is the 
* actual class agumentation or definition.
*
* 
* After @lends Class.proto @constructs sequence found
* makeClass return type should be adjusted automaticly to the Class type.
* 
* The literal inside should augment the Class prototype a new class should 
* be indexed.    
*/

