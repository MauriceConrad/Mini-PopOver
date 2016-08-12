# Mini-PopOver

![Result](https://camo.githubusercontent.com/042f55d0fd44c2853ce86b29879aa6440239c4c4/687474703a2f2f6673352e64697265637475706c6f61642e6e65742f696d616765732f3136303130342f6a6978736e36776d2e706e67)

A JS, CSS Photon-Plugin for Mini-PopOvers in style of OS X El Capitan.

If you don't include the deafult "photon.css" file, the popups will work but it wouldn't looks nice.

To initialize a target element like a button, a, div or any other tag for a Mini-PopOver, the target element needs a "data-popover" attribute that contains a querySelector for the PopOver-Element.

The PopOver Element is just a DIV construction.


#Documentation

First we had to integrate the "mini-popover.css", the "mini-popover.js" and of course "photon.css":

```html
  <link rel="stylesheet" href="photon.css">
  
  <link rel="stylesheet" href="mini-popover.css">
  <script src="mini-popover.js"></script>
```

 A example for a target element which installs itself with a PopOver Element:
 
 ```html
 <button class="btn btn-default" data-popover="#popover1">I'm just a button. No one gets hurt.</button>
```

Now, we need to create a DIV construction which can be selected by the querySelector in the data-popover attribute. That means, in this case the new DIV needs the id: "popover1":

 ```html
  <div class="pop-over" id="popover1">
    <div class="left" style="background-color: #f00">
       <!--You can use a icon or something similar here-->
    </div>
    <div class="center">
      <h1>Current Location</h1>
      <h2>5664 Greenridge Road, Castro Valley, California</h2>
    </div>
    <div class="right">
      <button class="btn-info"></button>
    </div>
  </div>
```

That's it.
You can style the three tags
"left", "center" and "right"
just as you want.

Except the "center" tag you can omit the other tags("left" & "right") just as you want. They aren't required.

# Questions?

You have questions? Ask me :)
