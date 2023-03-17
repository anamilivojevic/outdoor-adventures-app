import { getTags, getLocations, getLocationsFromSearch } from "../api";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BiSearch } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import Map from "../components/Map";
import "./SearchPage.scss";
import { Set } from "typescript";

type searchObj = {
  inputString: string;
  actIds: number[];
  tagIds: number[];
};

const FILTER_BTNS_OUTLINE: string = "5px solid rgba(180, 180, 180, 0.33)";
const FILTER_BTNS_MARGIN: string = "7px 10px";

const SearchPage = ({ activities }: ActivitiesProps): JSX.Element => {
  const [tags, setTags] = useState<Tag[]>([] as Tag[]);
  const [locations, setLocations] = useState<Location[]>([] as Location[]);
  const [searchActIds, setSearchActIds] = useState<Set<number | void>>(
    new Set()
  );
  const [searchTagIds, setSearchTagIds] = useState<Set<number | void>>(
    new Set()
  );
  const [inputString, setSearchString] = useState<string>("");

  async function loadLocations() {
    setLocations(await getLocations());
  }

  async function loadTags() {
    setTags(await getTags());
  }

  async function search() {
    let arrTags: number[] = [];
    searchTagIds.forEach((x) => arrTags.push(x as number));

    let arrActs: number[] = [];
    searchActIds.forEach((x) => arrActs.push(x as number));

    return await getLocationsFromSearch(
      inputString.length == 0 ? undefined : inputString,
      arrTags.length == 0 ? undefined : arrTags,
      arrActs.length == 0 ? undefined : arrActs
    );
  }

  function searchFromInput(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log("searching by input " + inputString);

    (async () => {
      const result = await search();
      console.log(result);
    })();
  }

  useEffect(() => {
    loadTags();
    //loadLocations();
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
                  name="inputString"
                  placeholder="Type..."
                  autoFocus
                  value={inputString}
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
          <div className="filters mb-5">
            <div className="mb-3">
              <p className="mb-1">Filter by activity:</p>
              <div id="act-filter-btns">
                {activities.map((act) => {
                  return (
                    <button
                      key={act.id}
                      style={{
                        outline: searchActIds.has(act.id)
                          ? FILTER_BTNS_OUTLINE
                          : "",
                        margin: searchActIds.has(act.id)
                          ? FILTER_BTNS_MARGIN
                          : "",
                      }}>
                      <span
                        onClick={() => {
                          searchActIds.add(act.id);
                          setSearchActIds(structuredClone(searchActIds));
                        }}>
                        {act.name.toLowerCase()}
                      </span>
                      {searchActIds.has(act.id) && (
                        <BsX
                          className="ms-1"
                          onClick={() => {
                            searchActIds.delete(act.id);
                            setSearchActIds(structuredClone(searchActIds));
                            console.log(searchActIds);
                          }}
                        />
                      )}
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
                      style={{
                        backgroundColor: `${tag.color}`,
                        outline: searchTagIds.has(tag.id)
                          ? FILTER_BTNS_OUTLINE
                          : "",
                        margin: searchTagIds.has(tag.id)
                          ? FILTER_BTNS_MARGIN
                          : "",
                      }}>
                      <span
                        onClick={() => {
                          searchTagIds.add(tag.id);
                          // here we have to clone the set, otherwise the searchTagIds.has(tag.id)
                          // && <BsX /> will not rerender
                          setSearchTagIds(structuredClone(searchTagIds));
                          console.log(searchTagIds);
                        }}>
                        {tag.name.toLowerCase()}
                      </span>
                      {searchTagIds.has(tag.id) && (
                        <BsX
                          className="ms-1"
                          onClick={() => {
                            searchTagIds.delete(tag.id);
                            setSearchTagIds(structuredClone(searchTagIds));
                            console.log(searchTagIds);
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="map-container">
          {inputString && <h3>Results</h3>}
          {/* <Map locations={[]} /> */}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
function getFromSearch(tagIds: any) {
  throw new Error("Function not implemented.");
}
