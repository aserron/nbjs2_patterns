<qoute>This is kept for historical purposes only, it was related to netbeans 6 javascript parsing engine migration</quote>

<h1>Netbeans Javascript Patterns Test.</h2>

This repo was created to help in the design process of the new netbeans javascript editor.

Beyond this, this code will have little use for you, feel free to look in.

The patterns in part pure js, other part ExtJS specific where intented to help 
the team to check for features like: 
<ul>
<li> scope awareness (global, execution, bound, delegated, instance, event)
<li> class, instance, package differentiation (yes we emulate them, don't argue about definitions)
<li> module pattern recognition, paired with extension definitions (lends, constructs)
<li> JSDoc, java-doc support
<li> Edge multi-inheritance situations.
<li> callback, event, handler scope awareness through annotations (very hard but possible)
</ul>


