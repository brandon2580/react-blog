import React from 'react';
import '../../App.css'

const ViewBlogs = () => {
    const [data, setData] = React.useState(Array.from(Array().keys()));

    const callAPI = () => {
        fetch("http://localhost:9000/data", {
            method: "post",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
        }).catch(err => {
            console.log(err);
        })
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log(data)
            });
    }

    React.useEffect(() => {
        callAPI()
    }, []);

    return (
        <div>
            <div className='center'>
                <h1 className='pageHeader'>Published Blogs</h1>
                <h3>Published blogs will go here</h3>
                {data.reverse().map(blog => {
                    return (
                        <div className='blogs'>
                            <h1>{blog.title}</h1>
                            <h2>By: {blog.author}</h2>
                            <h4>{blog.content}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewBlogs;
