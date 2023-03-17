import { useState } from "react";
import { BsFillPencilFill, BsFillTrashFill, BsX } from "react-icons/bs";
import ActivityEdit from "./ActivityEdit";
import "../../pages/SearchPage.scss";
import {
  AiOutlinePlus,
  AiFillPlusCircle,
  AiFillCloseCircle,
} from "react-icons/ai";

interface TagsProps {
  allTags: Tag[];
}

const AdminActivity = (
  props: ActivityProps & updateActClickProps & deleteActClickProps & TagsProps
): JSX.Element => {
  const { activity, onUpdate, onDelete, allTags } = props;
  const [editMode, setEditMode] = useState<boolean>(false);
  const [showTagsToAdd, setShowTagsToAdd] = useState<boolean>(false);

  const sameTagsIds: number[] = [];

  // TODO: finish addTagToAct

  for (const tag of allTags) {
    for (const t of activity.tags) {
      if (tag.id === t.id) sameTagsIds.push(t.id);
    }
  }

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function toggleShowTags() {
    setShowTagsToAdd(!showTagsToAdd);
  }

  function handleActDeleteClick() {
    if (window.confirm(`Confirm delete activity with id ${activity.id}?`)) {
      //onDelete(activity.id, currentAct);
      console.log("deleting " + activity.id);
      onDelete(activity.id);
    }
  }

  function handleAddTagClick() {}

  if (!editMode) {
    return (
      <>
        <div className="admin-btns">
          <button
            className="btn btn-dark btn-dark-green btn-sm ms-1 c-green-hover"
            onClick={handleActDeleteClick}>
            <BsFillTrashFill />
          </button>
          <button className="btn btn-dark btn-dark-green btn-sm ms-1 c-green-hover">
            <BsFillPencilFill onClick={toggleEditMode} />
          </button>
        </div>
        <h5>{activity.name}</h5>
        <p>{activity.description}</p>
        <p>File name in resources/images/ : {activity.imgFileName}</p>
        <div className="tagList">
          Tags:
          {activity.tags.map((tag) => {
            return (
              <button
                key={tag.id}
                style={{
                  backgroundColor: `${tag.color}`,
                }}>
                <span>{tag.name.toLowerCase()}</span>
                <BsX className="ms-1" />
              </button>
            );
          })}
          {!showTagsToAdd ? (
            <AiFillPlusCircle
              className="ms-3"
              onClick={toggleShowTags}
              style={{
                cursor: "pointer",
              }}
            />
          ) : (
            <>
              <div className="mt-2 border-top border-success pt-3 position-relative">
                <AiFillCloseCircle
                  className="ms-3"
                  onClick={toggleShowTags}
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "7px",
                    right: "7px",
                  }}
                />
                {allTags
                  .filter((t) => !sameTagsIds.includes(t.id))
                  .map((el) => {
                    return (
                      <button
                        key={el.id}
                        style={{
                          backgroundColor: `${el.color}`,
                        }}>
                        <span>{el.name.toLowerCase()}</span>
                        <AiOutlinePlus className="ms-1" />
                      </button>
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </>
    );
  }

  return (
    <ActivityEdit
      activity={activity}
      onUpdate={onUpdate}
      toggle={toggleEditMode}
    />
  );
};

export default AdminActivity;
