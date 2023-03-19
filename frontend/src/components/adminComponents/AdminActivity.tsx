import { useState } from "react";
import { BsFillPencilFill, BsFillTrashFill, BsX } from "react-icons/bs";
import ActivityEdit from "./ActivityEdit";
import "../../pages/SearchPage.scss";
import {
  AiOutlinePlus,
  AiFillPlusCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { addTagToActivity, removeTagFromActivity } from "../../api";

interface TagsProps {
  allTags: Tag[];
}

const AdminActivity = (
  props: ActivityProps & updateActClickProps & deleteActClickProps & TagsProps
): JSX.Element => {
  const { activity, onUpdate, onDelete, allTags } = props;
  const [activityTags, setActivityTags] = useState<Tag[]>(activity.tags);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [showTagsToAdd, setShowTagsToAdd] = useState<boolean>(false);

  const sameTagsIds: number[] = [];
  for (const tag of allTags) {
    for (const t of activityTags) {
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

  function handleAddTagToActClick(tag: Tag) {
    addTagToActivity(activity.id, tag.id);
    setActivityTags([...activityTags, tag]);
  }

  function handleRemoveTagFromActClick(tagId: number) {
    removeTagFromActivity(activity.id, tagId);
    setActivityTags(activityTags.filter((t) => t.id !== tagId));
  }

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
          {activityTags.map((tag) => {
            return (
              <button
                key={tag.id}
                style={{
                  backgroundColor: `${tag.color}`,
                }}>
                <span>{tag.name.toLowerCase()}</span>
                <BsX
                  className="ms-1"
                  onClick={() => {
                    handleRemoveTagFromActClick(tag.id);
                  }}
                />
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
                <span className="me-2">Add:</span>
                {allTags
                  .filter((tag) => !sameTagsIds.includes(tag.id))
                  .map((tag) => {
                    return (
                      <button
                        key={tag.id}
                        style={{
                          backgroundColor: `${tag.color}`,
                        }}>
                        <span>{tag.name.toLowerCase()}</span>
                        <AiOutlinePlus
                          className="ms-1"
                          onClick={() => {
                            handleAddTagToActClick(tag);
                          }}
                        />
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
