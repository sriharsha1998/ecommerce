import * as React from 'react';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { SignInPage } from '@toolpad/core/SignInPage';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { auth, providerMap } from '../../auth';

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  return (
    <SignInPage
      providers={providers}
      signIn={async (provider, formData, callbackUrl) => {
        try {
         
          const signInResponse = await signIn(
            provider.id, {
            ...(formData ? { email: formData.get('email'), password: formData.get('password')
              } :
            { callbackUrl: callbackUrl ?? '/' })
          }
          );
          
          if (signInResponse && signInResponse.error) {
            // Handle Auth.js errors
            return {
              error: 'An error with Auth.js occurred',
              type: signInResponse.error,
            };
          }         
          
          return {};
        } catch (error) {
          // An error boundary must exist to handle unknown errors
          return {
            error: 'Something went wrong.',
            type: 'UnknownError',
          };
        }
      }}
    />
  );
}

SignIn.getLayout = (page: React.ReactNode) => page;

SignIn.requireAuth = false;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await auth(context);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/' } };
  }

  return {
    props: {
      providers: providerMap,
    },
  };
}