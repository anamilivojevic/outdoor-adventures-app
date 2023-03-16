import { getTags, getLocations } from "../api";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BiSearch } from "react-icons/bi";
import Map from "../components/Map";
import "./SearchPage.scss";

const SearchPage = ({ activities }: ActivitiesProps): JSX.Element => {
  const [tags, setTags] = useState<Tag[]>([] as Tag[]);
  const [searchString, setSearchString] = useState<string>("");
  const [locations, setLocations] = useState<Location[]>([] as Location[]);

  async function loadLocations() {
    setLocations(await getLocations());
  }

  async function loadTags() {
    setTags(await getTags());
  }

  function searchByActivity(actId: number) {
    console.log("searching by act " + actId);
  }

  function searchByTag(tagId: number) {
    console.log("searching by tag " + tagId);
  }

  function searchFromInput(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log("searching by input " + searchString);
  }

  useEffect(() => {
    loadTags();
    loadLocations();
  }, []);

  return (
    <main className="my-4">
      <div className="container">
        <h1>Search activities</h1>
        <div>
          <div className="row">
            <Form className="col-12 col-md-6" onSubmit={searchFromInput}>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Type..."
                  autoFocus
                  value={searchString}
                  onChange={(e) => setSearchString(e.target.value)}
                />
                <button
                  className="btn btn-dark-green c-green-hover"
                  type="submit">
                  <BiSearch />
                </button>
              </InputGroup>
            </Form>
          </div>
          <div id="filters" className="mb-5">
            <div className="mb-3">
              <p className="mb-1">Filter by activity:</p>
              <div id="act-filter-btns">
                {activities.map((act) => {
                  return (
                    <button
                      key={act.id}
                      onClick={() => {
                        setSearchString(act.name);
                        searchByActivity(act.id);
                      }}>
                      {act.name.toLowerCase()}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="mb-1">Filter by tag:</p>
              <div id="tag-filter-btns">
                {tags.map((tag) => {
                  return (
                    <button
                      key={tag.id}
                      style={{ backgroundColor: `${tag.color}` }}
                      onClick={() => {
                        setSearchString(tag.name);
                        searchByTag(tag.id);
                      }}>
                      {tag.name.toLowerCase()}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="map-container">
          <h3>{searchString ? `Results for "${searchString}":` : ""}</h3>
          <Map locations={[]} />
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
