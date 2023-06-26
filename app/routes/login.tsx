import Userfront from '@userfront/react';
import { USERFRONT_ACCOUNT_ID } from '~/auth.server';

Userfront.init(USERFRONT_ACCOUNT_ID);

const LoginForm = Userfront.build({
  toolId: 'YOUR-LOGIN-TOOL-ID',
});

export default function Login() {
  return <LoginForm />;
}
