# Mini-PopOver
A JS, CSS Photon-Plugin for Mini-PopOvers in style of OS X El Capitan.

If you don't include the deafult "photon.css" file, the popups will work but don't looks nice.

To initiale a target element like a button, a, div or any other tag for a Mini-PopOver, the target element needs a "data-popover" attribute wich contains a querySelector for the PopOver-Element.

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

That's it!
The three tags:
"left", "center" and "right".

Except the "center" tag you can omit the other tags("left" & "right") just as you want. They are'nt required.

#Settings

If you want to change the color of the "left" tag, just change the "background-color" CSS property of it.


#It doesn't work

If you are to stupid to understand the framework or the documentation is stupid or when I made  mistakes, test the example.html file.


