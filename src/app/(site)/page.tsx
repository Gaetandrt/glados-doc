import React from 'react'
import Box from '@/components/HomeBox';
import Button from '@/components/Button';
import Image from 'next/image';
import LispLogo from '@/components/LispLogo';
import Link from 'next/link';

export default function Team() {
  return (
    <div className=''>
      <Box className='bg-bg-color h-[600px]'>
        <div className='flex flex-col items-center'>
          <div className='w-32 h-32 mb-6 mt-20'>
            <LispLogo />
          </div>
          <div className='text-white font-medium text-5xl mb-4'>
            <h1>
              Glados
            </h1>
          </div>
          <div>
            <h2 className='text-white font-medium text-2xl'>
              Generic Language and Data Operand Syntax
            </h2>
          </div>
          <div className='mt-6 flex flex-row gap-x-5'>
            <Link href='/learn'>
              <Button className=' w-[175px] p-3 rounded-2xl text-xl font-semibold hover:bg-[#398eab] bg-[#149ECA]'>
                Get Started
              </Button>
            </Link>
            <Link href='/learn'>
              <Button className=' w-[100px] p-3 rounded-2xl text-xl font-semibold hover:bg-button-bg border-solid border border-opacity-10 border-white shadow'>
                Learn
              </Button>
            </Link>
          </div>
        </div>
      </Box>
      <Box className='bg-home-box-bg h-[600px]'>

      </Box>
    </div>
  )
}
