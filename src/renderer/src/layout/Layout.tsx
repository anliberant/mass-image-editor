import Providers from './providers/Providers';
import { LayoutProps } from './Layout.props';
import Footer from '../components/footer/Footer';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Providers>
      {children}
      <Footer />
    </Providers>
  );
};

export default Layout;
