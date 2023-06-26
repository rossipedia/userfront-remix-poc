import type { DataFunctionArgs } from '@remix-run/node';
import { json, type V2_MetaFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { verify } from '~/auth.server';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export async function loader({ request }: DataFunctionArgs) {
  const user = await verify(request);
  return json({ user });
}

export default function Index() {
  const { user } = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Remix</h1>
      <p>
        {!user ? (
          <>
            You are not currently logged in. Click <Link to="/login">here</Link>{' '}
            to log in.
          </>
        ) : (
          <>
            You are currently logged in as:
            <pre>{JSON.stringify(user, void 0, 2)}</pre>
          </>
        )}
      </p>
    </div>
  );
}
