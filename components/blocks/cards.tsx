import {
  Blocks,
  ChevronRight,
  Infinity,
  Laptop,
  ListEnd,
  Zap,
  ZoomIn,
} from 'lucide-react';

const features = [
  {
    title: '.gg/linux',
    description: 'An extremely popular Linux server for any skill level',
    icon: <ZoomIn className='size-6' />,
    link: '#',
  },
  {
    title: 'atl.wiki',
    description: 'A Linux wiki designed with beginners in mind',
    icon: <Blocks className='size-6' />,
    link: '#',
  },
  {
    title: 'atl.tools',
    description: 'Self-hosted applications for nerds, by nerds',
    icon: <Laptop className='size-6' />,
    link: '#',
  },
  {
    title: 'atl.chat',
    description:
      'Access our community through other platforms like IRC and XMPP',
    icon: <Zap className='size-6' />,
    link: '#',
  },
  {
    title: 'tux',
    description: 'Tux is an all in one Discord bot that powers our community',
    icon: <ListEnd className='size-6' />,
    link: '#',
  },
  {
    title: '?',
    description: 'And More to Come...',
    icon: <Infinity className='size-6' />,
    link: '#',
  },
];

const Cards = () => {
  return (
    <section className='relative py-32 before:absolute before:inset-0 before:bg-primary/10 before:[mask-image:url(https://www.shadcnblocks.com/images/block/waves.svg)] before:[mask-repeat:repeat] before:[mask-size:_64px_32px]'>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background'></div>
      <div className='container relative'>
        <h2 className='mb-8 max-w-screen-sm text-balance text-2xl font-semibold lg:text-4xl'>
          Explore our Network
        </h2>
        <div className='z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='flex flex-col gap-10 rounded-lg border bg-background p-8'>
              <div>
                {feature.icon}
                <h3 className='mb-2 mt-6 font-medium'>{feature.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {feature.description}
                </p>
              </div>
              <a
                href={feature.link}
                className='flex items-center gap-2 text-sm font-medium'>
                Learn more
                <ChevronRight className='w-4' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
