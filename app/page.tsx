import Image from 'next/image';
import Header from '@/components/Header/page';
import Banner from '@/components/Banner/page';
import Story from '@/components/Story/page';
import Collections from '@/components/Collections/page';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col  px-24 bg-main bg-cover text-white max-w-[1429px] mx-auto'>
      <Header />
      <Banner />
      <Story />
      <Collections />
    </main>
  );
}
