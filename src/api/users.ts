const baseUrl = 'https://fakestoreapi.com/users';

export const fetchUsers = async () => {
  const response = await fetch(baseUrl);
  return response.json();
};
