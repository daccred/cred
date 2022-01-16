import { GetServerSideProps } from 'next';

export default function RedirectPage() {
  return;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  };
};
