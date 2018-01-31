# React Transition Group Example
Just to show how to use React Transition Group to apply animation (styles) between mounting and unmounting a component which is to be animated.
This is especially important when unmounting a component as unmounting does not wait style transition to be applied.  With react transition group, we can apply transition styles to the unmounting component.  This will let us avoid just hiding the component for the sake of keeping the transition styles (e.g. fading, sliding out).

## Example
Look at index.js under src folder for the example
