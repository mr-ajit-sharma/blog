import { useState } from "react";

export default function Blog() {

    // const [title,setTitle] = useState("");
    // const [content,setContent] = useState("");
    const [formData, setFormData] = useState({ title: "", content: "" })
    const [blogs, setBlogs] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
        setFormData({ title: "", content: "" })
        // console.log(blogs);
    }

    function removeBlog(i) {
        setBlogs(blogs.filter((blog,index)=>i!==index))
    }

    return (
        <>
            <h1>Write a Blog!</h1>
            <div className="section">

                {/* Form for to write the blog */}
                <form onSubmit={handleSubmit}>
                    <Row label="Title">
                        <input className="input"
                            value={formData.title}
                            placeholder="Enter the Title of the Blog here.."
                            onChange={(e) => setFormData({ title: e.target.value, content: formData.content })}
                        />
                    </Row >

                    <Row label="Content">
                        <textarea className="input content"
                            value={formData.content}
                            placeholder="Content of the Blog goes here.."
                            onChange={(e) => setFormData({ title: formData.title, content: e.target.value })}
                        />
                    </Row >

                    <button className="btn">ADD</button>
                </form>

            </div>

            <hr />

            {/* Section where submitted blogs will be displayed */}
            <h2> Blogs </h2>
            {blogs.map((blog, i) => (
                <div key={i} className="blog">
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <div className="mainDelete">
                      <button className="btn" onClick={()=>removeBlog(i)}>Delete</button>
                    </div>
                </div>
            ))}

        </>
    )
}

//Row component to introduce a new row section in the form
function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    )
}