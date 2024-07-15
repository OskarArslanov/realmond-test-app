export type UserType = {
  address: AddressType;
  email: string;
  id: number;
  name: NameType;
  password: string;
  phone: string;
  username: string;
};

type AddressType = {
  geolocation: GeolocationType;
  city: string;
  street: string;
  number: number;
  zipcode: string;
};

type GeolocationType = {
  lat: string;
  long: string;
};

type NameType = {
  firstname: string;
  lastname: string;
};
