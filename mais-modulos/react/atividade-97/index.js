const root = document.querySelector("#root")
const t1 = React.createElement("h1", {id:"titulo-principal"}, "Hello Wrld")
const t2 = React.createElement("h3", {id:"titulo-complementar"}, "Subtítulos")

const headline = React.createElement("div", {id: "read-line"}, t1, t2)



ReactDOM.render(headline, root)