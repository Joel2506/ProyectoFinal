import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { db, auth } from "../ConfiguracionFirebase";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const postColletionRef = collection(db, "posts");
  let navigate = useNavigate();
  
  const createPost = async () => {
    await addDoc(postColletionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  return (
    <div className='Posts'>
      <div className='PostsContainer'>
        <h1>¿En qué piensas?</h1>
        <div className='SubirPosts'>
          <input placeholder='Título aquí...' onChange={(event) => {
            setTitle(event.target.value);
          }}
          />
        </div>
        <div className='SubirPosts'>
          <textarea placeholder='Escribe aquí...' onChange={(event) => {
            setPostText(event.target.value);
          }}
          />
        </div>
        <button onClick={createPost}>Publicar Post</button>
      </div>
    </div>
  );
}
export default CreatePost
