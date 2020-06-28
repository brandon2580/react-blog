import React from 'react';
import '../../App.css'

const CreateBlog = () => {
    const [titleValue, setTitleValue] = React.useState('')
    const [authorValue, setAuthorValue] = React.useState('')
    const [contentValue, setContentValue] = React.useState('')
    const [success, setSuccess] = React.useState(false)

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
        // Makes sure user actually inputted text and not just empty spaces
        if (!titleValue.replace(/\s/g, '').length || !authorValue.replace(/\s/g, '').length || !contentValue.replace(/\s/g, '').length) {
            setSuccess(<h1 className='center red'>Please fill all fields above</h1>)
        } else {
            callAPI()

            // Resets all input fields after the data is sent to the server
            setTitleValue('')
            setAuthorValue('')
            setContentValue('')
            setSuccess(true)
        }
    }

    if (success == true) {
        setSuccess(<h1 className='center green'>Success!</h1>)
        setTimeout(function () {
            window.location.href = '/view-blogs'
        }, 500);    }

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

                {/* The value of success varies based on if what the user inputs is valid */}
                {success}
            </div>
        </div>
    )
}

export default CreateBlog;
