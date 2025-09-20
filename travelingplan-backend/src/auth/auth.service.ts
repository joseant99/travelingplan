import { Injectable } from '@nestjs/common';
import { authAdmin } from '../firebase/firebase';

@Injectable()
export class AuthService {
  async verifyToken(idToken: string) {
    try {
      const decodedToken = await authAdmin.verifyIdToken(idToken);
      return decodedToken; // contiene uid, email, etc.
    } catch (error) {
      return null;
    }
  }
}
