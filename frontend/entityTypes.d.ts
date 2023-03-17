type addActClickProps = {
  onAdd: (obj: Activity) => void;
};

type updateActClickProps = {
  onUpdate: (arg: number, obj: Activity) => void;
};

type deleteActClickProps = {
  onDelete: (arg: number) => void;
};

type addTagClickProps = {
  onAdd: (obj: Activity) => void;
};

type updateTagClickProps = {
  onUpdate: (arg: number, obj: Activity) => void;
};

type deleteTagClickProps = {
  onDelete: (arg: number) => void;
};

interface Obj {
  id: number;
}

interface ActivityProps {
  activity: Activity;
}

interface ActivitiesProps {
  activities: Activity[];
}

interface TagProps {
  tag: Tag;
}

interface TagsProps {
  tags: Tag[];
}

interface LocationProps {
  location: Location;
}

interface LocationsProps {
  locations: Location[];
}

interface CompanyProps {
  company: Company;
}
interface CompaniesProps {
  companies: Company[];
}

interface UserProps {
  user: User;
}

interface UsersProps {
  users: User[];
}

interface Activity extends Obj {
  name: string;
  description: string;
  imgFileName: string;
  locations: Location[];
  tags: Tag[];
  usersFavorite: User[];
}

interface Tag extends Obj {
  name: string;
  color: string;
  activities: Activity[];
}

interface Location extends Obj {
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  company: Company;
  activities: Activity[];
}

interface Company extends Obj {
  name: string;
  websiteLink: string;
  locations: Location[];
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
  favActivities: Activity[];
}
