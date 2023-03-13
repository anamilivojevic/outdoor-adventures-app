interface Obj {
  id: number;
}

interface Activity extends Obj {
  name: string;
  description: string;
  imgPath: string;
  locations: Set<Location>;
  tags: Set<Tag>;
  usersFavorite: Set<User>;
}

interface Tag extends Obj {
  name: string;
  color: string;
  activities: Set<Activity>;
}

interface Location extends Obj {
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  company: Company;
  activities: Set<Activity>;
}

interface Company extends Obj {
  name: string;
  websiteLink: string;
  locations: Set<Location>;
}

interface User extends Obj {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  country: string;
  city: string;
  admin: boolean;
  favActivities: Set<Activity>;
}

// configure in tsconfig.json
//"typeRoots": ["./"]
/* "paths" : {
  "entityTypes": ["./entityTypes"]
} */
//"declaration": true,
