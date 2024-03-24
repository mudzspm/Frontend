import PageWrapper from '@/components/ui/PageWrapper';
import PriceCard from '@/components/priceCard/priceCard';
import Hero from './sections/hero';
export const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <PriceCard />
    </PageWrapper>
  );
};
export default Home;
