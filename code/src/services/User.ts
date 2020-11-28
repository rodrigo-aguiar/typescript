interface Tech {
  title: string,
  experience: number,
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | Tech>;
}

export default function createUser({ name, email, password } : CreateUserData) {
  return {
    name,
    email,
    password
  };
}