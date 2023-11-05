import React from 'react';
import Image from 'next/image';

export default function Community() {
  return (
    <div className='flex items-center justify-center h-[92%]'>
      <div className='bg-bg-color rounded-3xl p-28 text-center'>
        <Image
          src='/image/discord-icon.svg'
          alt='Logo Discord'
          width={80}
          height={80}
          className='mx-auto mb-4'
        />
        <h1 className='text-2xl font-semibold mb-4'>Rejoignez notre serveur Discord</h1>
        <a
          href='https://discord.gg/rbTebHEm'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-[#5865F2] text-white px-4 py-2 rounded-md text-sm hover:bg-[#4055A8] hover:shadow-md transition duration-300'
        >
          Rejoindre
        </a>
      </div>
    </div>
  );
}
