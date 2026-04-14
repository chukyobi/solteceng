import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import '../index.css';

export const metadata = {
  title: 'Soltec Engineering',
  description: 'Revolutionizing Engineering in Africa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 overflow-x-hidden">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
