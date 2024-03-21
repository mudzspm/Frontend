import Trust from '@/pages/home/sections/trust';
import Hero from '@/pages/home/sections/hero';
import Course from '@/pages/home/sections/course';
import Achievements from '@/pages/home/sections/achievements';
import PageWrapper from '@/components/ui/PageWrapper';
import QurbanService from '@/pages/home/sections/qurbanServicebanner';
import Services from '@/pages/home/sections/Services';

export const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <Course />
      <Trust />
      <Achievements />
      <QurbanService />
      <Services />
    </PageWrapper>
  );
};
export default Home;
