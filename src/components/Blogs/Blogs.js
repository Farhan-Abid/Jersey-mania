import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>My blogs</h1>
            <h2>What is Context Api?</h2>
            <p>Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</p>

        <br />
        <h2>What is Semantic Tag in HTML? </h2>
        <p>In any language, it is essential to understand the meaning of words during communication. And if this is a computer communication then it becomes more critical. So HTML5 provides more semantic elements which make easy understanding of the code. Hence Semantics defines the meaning of words and phrases, i.e.
        Semantic elements= elements with a meaning. Semantic elements have a simple and clear meaning for both, the browser and the developer.in a word,he HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.</p>
        </div>
    );
};

export default Blogs;