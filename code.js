// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
// This shows the HTML page in "ui.html". 
figma.showUI(__html__, { width: 400, height: 400, title: "Create Json" });
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
const createList = (events) => __awaiter(this, void 0, void 0, function* () {
    const newMainComponentObject = yield figma.importComponentByKeyAsync("b85dcd56250c5e11b4d914956fa36b1223757569"); //9ba198a50dac6d18f66abe6149e7594f2efa7e15
    // console.log("aerga", newMainComponentObject)
    for (let i = 0; i < events.length; i++) {
        const listItem = newMainComponentObject.createInstance();
        yield figma.loadFontAsync(listItem.children[0].fontName);
        listItem.children[0].characters = events[i].homeName;
        listItem.y = i * 14;
        figma.currentPage.appendChild(listItem);
        // console.log(listItem)
    }
});
// myfunc();
figma.ui.onmessage = msg => {
    // console.log("got this from the UI", msg.type);
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === 'create-list') {
        console.log("This from the UI", msg.payload);
        createList(msg.payload);
    }
    //   const nodes: SceneNode[] = [];
    //   for (let i = 0; i < msg.count; i++) {
    //     const rect = figma.createRectangle();
    //     rect.x = i * 400;
    //     rect.fills = [{type: 'SOLID', color: {r: 0.3, g: 0.5, b: 0}}];
    //     figma.currentPage.appendChild(rect);
    //     nodes.push(rect);
    //   }
    //   figma.currentPage.selection = nodes;
    //   figma.viewport.scrollAndZoomIntoView(nodes);
    // }
    // Make sure to close the plugin when you're done. Otherwise the plugin will abst
    // keep running, which shows the cancel button at the bottom of the screen.
    // figma.closePlugin();
};
