import { useState } from "react"

export default function PostWritter() {
    const [postsStates, setPostsStates] = useState([]);
    let currentTextValue = '';
    return <>
        <textarea onChange={(event) => {
            currentTextValue = event.target.value;
            console.log(currentTextValue);
        }} />

        <button onClick={() => {
            // setPostsStates([3]);
            setPostsStates((prevState) => { return [...prevState, currentTextValue] });
        }}>Add Post</button>

        {postsStates.map(
            (post) => { return <h1>{post}</h1> })}
    </>
}

// posts = ['post1', 'post2', 'post3'];
// posts = [<h1>'post1'</h1>, <h1>'post2'</h1>, <h1>'post3'</h1>];