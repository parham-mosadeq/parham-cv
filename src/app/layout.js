import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='w-screen px-5 md:max-w-3xl mx-auto'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
