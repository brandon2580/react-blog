import React from 'react';
import '../../App.css'

const CreateBlog = () => {
    const [titleValue, setTitleValue] = React.useState('')
    const [authorValue, setAuthorValue] = React.useState('')
    const [contentValue, setContentValue] = React.useState('')

    const callAPI = () => {
        fetch("http://localhost:9000/", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            mode: "cors",
            body: JSON.stringify({ title: titleValue, author: authorValue, content: contentValue })
        }).catch(err => {
            console.log(err);
        })
    }

    const handleSubmit = () => {
        callAPI()
        console.log("Successfully submitted")
        setTitleValue('')
        setAuthorValue('')
        setContentValue('')
    }

    return (
        <div>
            <div className='center'>
                <h1 className='pageHeader'>Create Blog</h1>
                <div className='row'>
                    <div className='col-lg-12'>
                        <input name='titleValue' value={titleValue} onChange={e => { setTitleValue(e.target.value) }} type='input' className='createBlogInput' placeholder='Title'></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <input name='authorValue' value={authorValue} onChange={e => { setAuthorValue(e.target.value) }} type='input' className='createBlogInput' placeholder='Author'></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <input name='contentValue' value={contentValue} onChange={e => { setContentValue(e.target.value) }} type='input' className='createBlogInput' placeholder='Content'></input>
                    </div>
                </div>
                <button type="button" onClick={handleSubmit}>Post Blog</button>
            </div>
        </div>
    )
}

export default CreateBlog;
