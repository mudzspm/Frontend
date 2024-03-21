import { ReactNode } from 'react';
import Footer from './footer';

interface PageWrapperProps {
  children: ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return <div>
    {children}
  <Footer />
  </div>;
}

export default PageWrapper;
