import { useState, useEffect } from "react";
import { getTags } from "../../api";
import { Form } from "react-bootstrap";
import {
  getActivities,
  postActivity,
  putActivity,
  deleteActivity,
} from "../../api";
import AdminActivity from "../../components/adminComponents/AdminActivity";
import "./AdminPage.scss";

const AdminActPage = (
  props: ActivitiesProps &
    addActClickProps &
    updateActClickProps &
    deleteActClickProps
): JSX.Element => {
  const { activities, onAdd, onUpdate, onDelete } = props;
  const [createMode, setCreateMode] = useState(false);
  const [allTags, setAllTags] = useState<Tag[]>([] as Tag[]);

  const emptyActivity: Activity = {
    id: -1,
    name: "",
    description: "",
    imgFileName: "",
    locations: [],
    tags: [],
    usersFavorite: [],
  };

  const [newActivity, setNewActivity] = useState<Activity>(emptyActivity);

  function clearForm() {
    setNewActivity(emptyActivity);
  }

  function toggleCreateMode() {
    setCreateMode(!createMode);
  }

  function handleAddActClick(event: React.SyntheticEvent) {
    event.preventDefault();
    onAdd(newActivity);
    toggleCreateMode();
  }

  async function loadTags() {
    setAllTags(await getTags());
  }

  useEffect(() => {
    loadTags();
  }, []);

  return (
    <>
      <h2>Activities</h2>
      <div className="mt-4">
        {!createMode ? (
          <button
            className="btn btn-dark btn-dark-green btn-sm ms-1 c-green-hover"
            onClick={toggleCreateMode}>
            Add activity
          </button>
        ) : (
          <Form
            onSubmit={(e) => {
              handleAddActClick(e);
              clearForm();
            }}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={newActivity.name}
                onChange={(e) => {
                  setNewActivity({ ...newActivity, name: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                type="text"
                value={newActivity.description}
                onChange={(e) => {
                  setNewActivity({
                    ...newActivity,
                    description: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>File Name</Form.Label>
              <Form.Control
                type="text"
                value={newActivity.imgFileName}
                onChange={(e) => {
                  setNewActivity({
                    ...newActivity,
                    imgFileName: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <button
              className="btn btn-dark btn-dark-green btn-sm mt-2 c-green-hover me-2"
              onClick={handleAddActClick}>
              Save
            </button>
            <button
              className="btn btn-dark btn-dark-green btn-sm mt-2 c-green-hover"
              onClick={toggleCreateMode}>
              Cancel
            </button>
          </Form>
        )}
      </div>
      <div>
        {activities.map((el) => {
          return (
            <div
              className="border rounded p-3 mt-4 c-bg-beige position-relative"
              key={el.id}>
              <AdminActivity
                activity={el}
                onUpdate={onUpdate}
                onDelete={onDelete}
                allTags={allTags}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdminActPage;
