import { Link } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

const DiscordCta = () => {
  return (
    <section className='py-32'>
      <div className='container'>
        <div className='grid items-center gap-8 lg:grid-cols-2'>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <span className='flex size-12 items-center justify-center rounded-full bg-primary'>
              <FaDiscord className='size-6' />
            </span>
            <h1 className='my-6 text-pretty text-3xl font-bold lg:text-4xl'>
              Join our Discord Community
            </h1>
            <p className='mb-8 max-w-xl text-balance text-muted-foreground lg:text-lg'>
              Make new friends, share your knowledge and learn from the biggest
              Linux community on Discord.
            </p>
            <div className='flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start'>
              <Button
                variant='outline'
                className='w-full sm:w-auto'
                size={'lg'}>
                <Link className='mr-2 size-4' />
                <a
                  href='https://discord.gg/linux'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Join now
                </a>
              </Button>
            </div>
          </div>
          <img
            src='https://delet3.web.app/assets/svg/welcome-discord.svg'
            alt='placeholder hero'
            className='max-h-96 w-full rounded-md'
          />
        </div>
      </div>
    </section>
  );
};

export default DiscordCta;
