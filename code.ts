// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html". 
figma.showUI(__html__, { width: 400, height: 400, title: "Create Json" }); 

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.



const createList = async (events) => {
  const newMainComponentObject = await figma.importComponentByKeyAsync("b85dcd56250c5e11b4d914956fa36b1223757569"); //9ba198a50dac6d18f66abe6149e7594f2efa7e15
  
  // console.log("aerga", newMainComponentObject)
  for (let i = 0; i < events.length; i++) {
    const listItem = newMainComponentObject.createInstance();

    await figma.loadFontAsync(listItem.children[0].fontName as FontName);
    listItem.children[0].characters = events[i].homeName;
    listItem.y =  i * 14;
    figma.currentPage.appendChild(listItem);
    // console.log(listItem)
  }
  
}

// myfunc();

figma.ui.onmessage = msg => {

  // console.log("got this from the UI", msg.type);
  
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'alert-me') {

    console.log("This from the UI", msg.payload);

  } else {
    figma.closePlugin();
  }

};
