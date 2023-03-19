const BASE_URL: string = "http://localhost:8080/api/v1/";

const ACTIVITIES_URL: string = BASE_URL + "activities";
const LOCATIONS_URL: string = BASE_URL + "locations";
const TAGS_URL: string = BASE_URL + "tags";
const COMPANIES_URL: string = BASE_URL + "companies";
const USERS_URL: string = BASE_URL + "users";

const headersContentType = { "Content-Type": "application/json" };

type RequestOptions = {
  method: string;
  headers?: {
    "Content-Type": string;
  };
  body?: string;
};

async function baseApiCall(completeUrl: string, options: RequestOptions) {
  try {
    const response = await fetch(completeUrl, options);
    if (response.ok) {
      if (options.method == "DELETE") {
        return "Successful delete";
      }
      return await response.json();
    }
  } catch (error) {
    return { ok: false, data: error };
  }
}

async function getFromSearch(
  url: string,
  keyword?: string,
  tags?: number[],
  activities?: number[]
) {
  let separator: string = "/search?";
  let path: string = "";

  const addPiece = (name?: string, value?: string): void => {
    path += separator + name + "=" + value;
    separator = "&";
  };

  keyword && addPiece("keyword", keyword);
  tags && addPiece("tags", tags?.join());
  activities && addPiece("activities", activities?.join());
  return baseApiCall(url + path, { method: "GET" });
}

// General API functions
async function get(url: string, id?: number) {
  const path: string = id ? `/${id}` : "";
  return baseApiCall(url + path, { method: "GET" });
}

export async function post(
  url: string,
  object: Activity | Tag | Location | Company | User
) {
  return baseApiCall(url, {
    method: "POST",
    headers: headersContentType,
    body: JSON.stringify(object),
  });
}

async function put(
  url: string,
  id: number,
  object: Activity | Tag | Location | Company | User
) {
  return baseApiCall(`${url}/${id}`, {
    method: "PUT",
    headers: headersContentType,
    body: JSON.stringify(object),
  });
}

export async function deleteById(url: string, id: number) {
  return baseApiCall(`${url}/${id}`, {
    method: "DELETE",
  });
}

// relational APIs
export async function addOneToAnother(
  url: string,
  ownerId: number,
  ownedName: string,
  ownedId: number
) {
  return baseApiCall(`${url}/${ownerId}/${ownedName}/${ownedId}`, {
    method: "POST",
    headers: headersContentType,
  });
}

export async function removeOneFromAnother(
  url: string,
  ownerId: number,
  ownedName: string,
  ownedId: number
) {
  return baseApiCall(`${url}/${ownerId}/${ownedName}/${ownedId}`, {
    method: "DELETE",
  });
}

// Activities API
export async function getActivities(id?: number) {
  return get(ACTIVITIES_URL, id);
}
export async function postActivity(activity: Activity) {
  return post(ACTIVITIES_URL, activity);
}
export async function putActivity(id: number, activity: Activity) {
  return put(ACTIVITIES_URL, id, activity);
}
export async function deleteActivity(id: number) {
  return deleteById(ACTIVITIES_URL, id);
}

// Activity's tags:
export async function addTagToActivity(actId: number, tagId: number) {
  return addOneToAnother(ACTIVITIES_URL, actId, "tags", tagId);
}
export async function removeTagFromActivity(actId: number, tagId: number) {
  return removeOneFromAnother(ACTIVITIES_URL, actId, "tags", tagId);
}

// Tags API
export async function getTags(id?: number) {
  return get(TAGS_URL, id);
}
export async function postTag(tag: Tag) {
  return post(TAGS_URL, tag);
}
export async function putTag(id: number, tag: Tag) {
  return put(TAGS_URL, id, tag);
}
export async function deleteTag(id: number) {
  return deleteById(TAGS_URL, id);
}

// Locations API
export async function getLocations(id?: number) {
  return get(LOCATIONS_URL, id);
}

export async function getLocationsFromSearch(
  keyword?: string,
  tags?: number[],
  activities?: number[]
) {
  return getFromSearch(LOCATIONS_URL, keyword, tags, activities);
}

export async function postLocation(location: Location) {
  return post(LOCATIONS_URL, location);
}
export async function putLocation(id: number, location: Location) {
  return put(LOCATIONS_URL, id, location);
}
export async function deleteLocation(id: number) {
  return deleteById(LOCATIONS_URL, id);
}

// Companies API
export async function getCompanies(id?: number) {
  return get(COMPANIES_URL, id);
}
export async function postCompany(company: Company) {
  return post(COMPANIES_URL, company);
}
export async function putCompany(id: number, company: Company) {
  return put(COMPANIES_URL, id, company);
}
export async function deleteCompany(id: number) {
  return deleteById(COMPANIES_URL, id);
}

// Users API
export async function getUsers(id?: number) {
  return get(USERS_URL, id);
}
export async function postUser(user: User) {
  return post(USERS_URL, user);
}
export async function putUser(id: number, user: User) {
  return put(USERS_URL, id, user);
}
export async function deleteUser(id: number) {
  return deleteById(USERS_URL, id);
}
