const title = <h1>My first React Element! </h1>;
const desc = <p>I just learned how to create a React node and render it into the Dom</p>
console.log(title);


const header = React.createElement(
    'header',
    null,
    title,
    desc
);



ReactDOM.render(
    header,
    document.getElementById('root')
);