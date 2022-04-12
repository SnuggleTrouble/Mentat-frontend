import { useState } from "react";
import "./Menti.module.css";

// I receuve the id, the content and the setTweets function
export function Menti({ id, title, content , setMenti , menti }) {
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newMentiContent, setNewMentiContent] = useState(content);
  const [newMentiTitle, setNewMentiTitle] = useState(title);

  // handle tweet deletion
  const handleDelete = () => {
    setMenti((previousMentis) => {
      // return the new array or filtered tweets
      return previousMentis.filter((menti) => {
        // a tweet is gonna stay in the array if its id is different from the the id of the curretn tweet
        return menti.id !== id;
      });
    });
  };

  // handle the change of variable showAll
  const handleShowAll = () => {
    setShowAll((previousValue) => {
      return !previousValue;
    });
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  const handleSave = () => {
    setMenti((previousMentis) => {
      return previousMentis.map((menti) => {
        if (menti.id === id) {
          return {
            id: menti.id,
            content: newMentiContent,
          };
        } else {
          return menti;
        }
      });
    });
    handleCancel();
  };
  return (
    <div className="menti">
      <div className="menti__input">
        <div className="username">{`${menti.user.firstName} ${menti.user.lastName}`}</div>
        {edit ? (
          <textarea
            value={newMentiContent}
            onChange={(event) => setNewMentiContent(event.target.value)}
          />
        ) : showAll ? (
          <p>{content}</p>
        ) : (
          <p>
            {content.length > 100 ? `${content.substring(0, 100)}...` : content}
          </p>
        )}

        {edit ? (
          <div className="menti__actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div className="menti__actions">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            {content.length > 100 && (
              <button onClick={handleShowAll}>
                {showAll ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
 }