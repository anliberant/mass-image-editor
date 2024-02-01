import { Toaster } from 'react-hot-toast';
import Footer from '../components/footer/Footer';
import { LayoutProps } from './Layout.props';
import Providers from './providers/Providers';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Providers>
      {children}
      <Toaster gutter={8} position="top-center" />
      <Footer />
    </Providers>
  );
};

export default Layout;
