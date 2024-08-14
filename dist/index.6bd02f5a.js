// const heading = React.createElement(
//   "h1",
//   { id: "root" },
//   "Hello World from React !"
// );
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h1", {}, "I'm h2 tag")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I'm ch1 tag"),
        React.createElement("h1", {}, "I'm ch2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
