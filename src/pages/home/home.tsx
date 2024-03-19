import Trust from '@/components/sections/trust';
import Hero from '@/components/sections/hero';
import Course from '@/components/sections/course';
import Achievements from '@/components/sections/achievements';
import PageWrapper from '@/components/ui/PageWrapper';
export const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <Course />
      <Trust />
      <Achievements />
    </PageWrapper>
  );
};
export default Home;
