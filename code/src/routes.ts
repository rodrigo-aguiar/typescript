import { Request, Response } from 'express';
import createUser from './services/User';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'user@test.example',
    password: '123456',
    techs: [
      'NodeJs', 
      'ReactJs', 
      'React Native',
      { title: 'Typescript', experience: 1000 }
    ]
  });
  
  return response.json({ message: 'Hello World', user });
}