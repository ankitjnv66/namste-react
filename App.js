const heading = React.createElement(
    "h1",
    {
        id: "heading"
    },
    "Hello World from React!"
);

//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

/*
<div id ="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>
</div>
*/


const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "I am h1 tag")
    )
);

//root.render(parent);
//console.log(parent);

/*
<div id ="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h1 tag</h2>
    </div>
</div>
*/


const parentWithSibling = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ]
    )
);

//root.render(parentWithSibling);

/*
<div id ="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h1 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h1 tag</h2>
    </div>
</div>
*/

const parentWithSiblingDivs = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ]
    )
    ]
);

root.render(parentWithSiblingDivs);