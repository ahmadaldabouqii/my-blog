import {useState} from 'react';
import './Admin.css';

const Admin = (props) => {

  const [post, setPost] = useState({
    post: '',
  });

  const all_posts = [];

  const postHanddler = (e) => {
    setPost(prevState => {
      return { ...prevState, post: e.target.value };
    });
  };


  const submitHandler = (event) => {
    event.preventDefault();

    if(!post) return;

    all_posts.push(post);

    if (!localStorage.getItem('posts')) {
      localStorage.setItem('posts', JSON.stringify(all_posts));
    } else {
      let data = JSON.parse(localStorage.getItem('posts'));
      data.push(all_posts);
      localStorage.setItem('posts', JSON.stringify(all_posts));
    }

    console.log(all_posts);
    console.log(post);
  };

  return (
    <div className="box_content">
      <div className="form_header">
        <h1>Welcome {props.toAdmin('loggedAccount').role} {props.toAdmin('loggedAccount').name}😎</h1>
        <p className="subtitle">
          Send a general post of any context you'd like to make this world better ❤️.
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="field">
          <label htmlFor="message">Add A Post<code>*</code></label>
          <textarea
            rows="4"
            cols="50"
            name="message"
            id="message"
            placeholder="Enter your Post..."
            // value={post}
            onChange={postHanddler}
          ></textarea>
        </div>
        <div className="field">
          <button type="submit" id="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
