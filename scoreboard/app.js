const desc = 'I just learned how to create a React node and render it into the Dom'
const myTitleID = 'main-title';
const name = 'Stuart';

const header = (
    <header>
    {/* this is a comment */}
        <h1 id={myTitleID}>{ name }'s First react element</h1>
        <p className="main-desc">{ desc }</p>
    </header>
)



ReactDOM.render(
    header,
    document.getElementById('root')
);