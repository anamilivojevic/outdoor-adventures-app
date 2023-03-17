import { useState } from "react";
import { Form } from "react-bootstrap";

type Toggle = {
  toggle: () => void;
};

const ActivityEdit = (
  props: ActivityProps & updateActClickProps & Toggle
): JSX.Element => {
  const { activity, onUpdate, toggle } = props;
  const [currentAct, setCurrentAct] = useState<Activity>(activity);

  function handleOnChange(input: string, value: string) {
    setCurrentAct({ ...currentAct, [input]: value });
    console.log(currentAct);
  }

  function handleActUpdateClick(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log(currentAct);
    onUpdate(activity.id, currentAct);
    toggle();
  }

  return (
    <div>
      <Form onSubmit={handleActUpdateClick}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={currentAct.name}
            onChange={(e) => {
              handleOnChange(e.target.id, e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            type="text"
            value={currentAct.description}
            onChange={(e) => {
              handleOnChange(e.target.id, e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imgFileName">
          <Form.Label>File Name</Form.Label>
          <Form.Control
            type="text"
            value={currentAct.imgFileName}
            onChange={(e) => {
              handleOnChange(e.target.id, e.target.value);
            }}
          />
        </Form.Group>
        <button
          className="btn btn-dark btn-dark-green btn-sm mt-2 c-green-hover me-2"
          onClick={handleActUpdateClick}>
          Save
        </button>
        <button
          className="btn btn-dark btn-dark-green btn-sm mt-2 c-green-hover"
          onClick={toggle}>
          Cancel
        </button>
      </Form>
    </div>
  );
};

export default ActivityEdit;
