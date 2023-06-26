import jwt from 'jsonwebtoken';
import * as cookie from 'cookie';

const USERFRONT_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
YOUR USERFRONT ACCOUNT PUBLIC KEY
-----END PUBLIC KEY-----`;

export const USERFRONT_ACCOUNT_ID = 'YOUR-USERFRONT-ACCOUNT-ID';

export async function verify(request: Request) {
  /**
   * Userfront puts the ID token in a cookie named `id.{account_id}`.
   * So let's parse the incoming cookie and see what we got at that key
   */
  const token = cookie.parse(request.headers.get('Cookie') ?? '')[
    `id.${USERFRONT_ACCOUNT_ID}`
  ];

  if (!token) {
    return null;
  }

  try {
    const verified = jwt.verify(token, USERFRONT_PUBLIC_KEY, {
      algorithms: ['RS256'],
    });
    return verified as jwt.JwtPayload;
  } catch (error) {
    // Alternatively, this could be a redirect or whatever your application calls for
    throw new Response(null, {
      status: 401,
      statusText: 'Unauthorized',
    });
  }
}
