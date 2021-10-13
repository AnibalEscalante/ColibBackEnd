import { Auth } from '../../models/auth.model';
import model from './auth.schema';

async function addAuth(auth: Auth): Promise<Auth>{
  return model.create(auth);
}

async function getAuthByEmail(email: string): Promise<Auth | null>{
  return model.findOne({ email: email })
    .populate('authenticated')
}

export default { addAuth, getAuthByEmail };
