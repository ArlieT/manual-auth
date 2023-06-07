import {Nunito} from 'next/font/google'
import '../../app/globals.css'
import SessionWrapper from '../Sessionwrapper';



const nonito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Login",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  // useEffect(() => {
  //   isTokenExpired(router);
  // }, [router]);
  return (
    <html lang="en">
      <body className={nonito.className}>
      <SessionWrapper>
        {children}
        </SessionWrapper>
        </body>
    </html>
  );
}
