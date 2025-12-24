/**
 * Лайк поста (Callback - снизу вверх). Есть родительский компонент Post, который хранит количество лайков. Есть дочерний компонент LikeButton.
При клике на кнопку:
1) дочерний компонент вызывает callback-функцию.
2) родитель увеличивает счётчик лайков.
Отобразите текущее количество лайков в Post.
 
 */
import React, { useState } from "react";
const buttonStyle = {
  padding: "8px 16px",
  backgroundColor: "#c4d8ecff",
  color: "#360909ff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
const postStyle = {
  border: "1px solid #DDD",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "200px",
  gap: "8px",
};

export default function Post() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div style={postStyle}>
      <strong>Пост</strong>
      <img src="https://placehold.co/150x150?text=Im+Post" alt="Post" />
      <div style={{ color: `red` }}>♥{likes}</div>
      <LikeButton onLike={handleLike} myStyle={buttonStyle} />
    </div>
  );
}

function LikeButton({ onLike, myStyle }) {
  return (
    <button onClick={onLike} style={myStyle}>
      Лайк
    </button>
  );
}
