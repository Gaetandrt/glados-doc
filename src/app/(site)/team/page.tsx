import React from 'react'
import Box from '@/components/HomeBox';
import Button from '@/components/Button';
import Image from 'next/image';
import LispLogo from '@/components/LispLogo';
import Link from 'next/link';
import '/src/app/border-animation.css';

export default function Team() {
  return (
    <div className=''>
      <Box className='bg-bg-color h-[600px]'>
          <div className='flex flex-col items-center'>
                <div className='flex h-32 mb-0 mt-20 space-x-20 m'>
                  <div className='w-32 h-32 rounded-full bg-[url("/image/nicolas.jpg")] bg-cover bg-center mx-auto my-auto'></div>
                  <div className='w-32 h-32 rounded-full bg-[url("/image/sydney.jpg")] bg-cover bg-center mx-auto my-auto'></div>
                  <div className='w-32 h-32 rounded-full bg-[url("/image/flavio.jpg")] bg-cover bg-center mx-auto my-auto'></div>
                </div>
                <div className='flex h-6 mb-9 mt-1 space-x-20'>
                  <div className='w-32 text-center'>
                    Nico
                  </div>
                  <div className='w-32 text-center'>
                    Cindie
                  </div>
                  <div className='w-32 text-center'>
                    Flivio
                  </div>
                </div>
          <div className='flex flex-col items-center'>
            <div className='flex items-center space-x-20'>
              <div className='w-32 h-32 rounded-full bg-[url("/image/gaetan.jpg")] bg-cover bg-center mx-auto my-auto'></div>
              <div className='w-32 h-32 rounded-full bg-[url("/image/martin.jpg")] bg-cover bg-center mx-auto my-auto'></div>
            </div>
            <div className='flex h-6 mb-9 mt-1 space-x-20'>
              <div className='w-32 text-center'>
                Gaytan
              </div>
              <div className='w-32 text-center'>
                Mirtin
              </div>
            </div>
          </div>
          
          <div className='text-white font-medium text-5xl mb-4'>
            <h1>
              Dream Team
            </h1>
          </div>
          <div>
            <h2 className='text-white font-medium text-2xl'>
              We love Spiderman
            </h2>
          </div>
        </div>
      </Box>
      <Box className='bg-home-box-bg h-[600px] flex items-center justify-center'>
        <div className='flex h-[70%] w-[80%] rounded-3xl'>
          <div className='flex-none w-[30%]  bg-gradient-to-r from-transparent to-bg-color flex flex-col items-center rounded-l-3xl'>
            <div className='w-32 h-32 rounded-full bg-[url("/image/nicolas.jpg")] bg-cover bg-center mx-auto my-auto mt-[40%] rainbow-border-animation'>
            </div>
            <div className='mb-[9%] h-32 text-white'>
              Spiderman
            </div>
          </div>
          <div className='grow w-auto flex items-center justify-center bg-gradient-to-r from-bg-color to-purple-500 rounded-r-3xl'>
            <div className='text-center mx-8 text-white'>
              <a>
              Nicolas, le Tacticien du Code : Nicolas est un tacticien du software engineering, un fin stratège dans le domaine du code. Avec une intelligence tactique et un œil pour le détail, il orchestre les binaires et les langages de programmation pour créer des solutions logicielles qui sont à la fois robustes et innovantes, élevant l’ingénierie à la hauteur d'art.
              </a>
            </div>
          </div>
        </div>
      </Box>
      <Box className='bg-home-box-bg h-[600px] flex items-center justify-center'>
        <div className='flex h-[70%] w-[80%] rounded-3xl'>
          <div className='grow w-auto flex items-center justify-center bg-gradient-to-l from-bg-color to-blue-800 rounded-l-3xl'>
            <div className='text-center mx-8 text-white'>
              <a>
              Sydney, la Sculpteure de Logiciels : Sydney est la stratège de nos victoires logicielles, forgeant des programmes avec la précision d'un horloger et la créativité d'un artiste. Son code est un labyrinthe où chaque algorithme est une énigme résolue avec élégance, assurant que le moteur de notre technologie ronronne sans accroc.
              </a>
            </div>
          </div>
          <div className='flex-none w-[30%] bg-gradient-to-l from-transparent to-bg-color flex flex-col items-center rounded-r-3xl'>
            <div className='w-32 h-32 rounded-full bg-[url("/image/sydney.jpg")] bg-cover bg-center mx-auto my-auto mt-[40%]'></div>
            <div className='mb-[9%] h-32 text-white'>
              cindie
            </div>
          </div>
        </div>
      </Box>
      <Box className='bg-home-box-bg h-[600px] flex items-center justify-center'>
        <div className='flex h-[70%] w-[80%] rounded-3xl'>
          <div className='flex-none w-[30%]  bg-gradient-to-r from-transparent to-bg-color flex flex-col items-center rounded-l-3xl'>
            <div className='w-32 h-32 rounded-full bg-[url("/image/flavio.jpg")] bg-cover bg-center mx-auto my-auto mt-[40%]'>
            </div>
            <div className='mb-[9%] h-32 text-white'>
              flavroche
            </div>
          </div>
          <div className='grow w-auto flex items-center justify-center bg-gradient-to-r from-bg-color to-yellow-600 rounded-r-3xl'>
            <div className='text-center mx-8 text-white'>
              <a>
              Flavio, le Maître des Nuages : Flavio est l’architecte des cieux numériques, un véritable virtuose des infrastructures cloud. Avec une vision aussi large que l'horizon et une précision d’orfèvre, il tisse des solutions cloud qui soutiennent l’édifice de nos projets avec une fiabilité aussi inébranlable que les montagnes.
              </a>
            </div>
          </div>
        </div>
      </Box>
      <Box className='bg-home-box-bg h-[600px] flex items-center justify-center'>
        <div className='flex h-[70%] w-[80%] rounded-3xl'>
          <div className='grow w-auto flex items-center justify-center bg-gradient-to-l from-bg-color to-red-800 rounded-l-3xl'>
            <div className='text-center mx-8 text-white'>
              <a>
              Gaetan, l'Artisan des Mots : Gaetan possède un talent rare; ses doigts dansent sur le clavier avec la grâce d’un pianiste, composant des symphonies de documentation qui transforment les processus les plus complexes en narrations limpides. Chaque page qu'il produit est un parchemin de connaissance, rendant l’obscur lumineux et le compliqué accessible.
              </a>
            </div>
          </div>
          <div className='flex-none w-[30%] bg-gradient-to-l from-transparent to-bg-color flex flex-col items-center rounded-r-3xl'>
            <div className='w-32 h-32 rounded-full bg-[url("/image/gaetan.jpg")] bg-cover bg-center mx-auto my-auto mt-[40%]'></div>
            <div className='mb-[9%] h-32 text-white'>
              Gaytan
            </div>
          </div>
        </div>
      </Box>
      <Box className='bg-home-box-bg h-[600px] flex items-center justify-center'>
        <div className='flex h-[70%] w-[80%] rounded-3xl'>
          <div className='flex-none w-[30%]  bg-gradient-to-r from-transparent to-bg-color flex flex-col items-center rounded-l-3xl'>
            <div className='w-32 h-32 rounded-full bg-[url("/image/martin.jpg")] bg-cover bg-center mx-auto my-auto mt-[40%]'>
            </div>
            <div className='mb-[9%] h-32 text-white'>
              martie
            </div>
          </div>
          <div className='grow w-auto flex items-center justify-center bg-gradient-to-r from-bg-color to-green-800 rounded-r-3xl'>
            <div className='text-center mx-8 text-white'>
              <a>
              Martin, le Géant des Lettres : Martin, avec ses gros doigts agiles, défie les stéréotypes, transformant chaque frappe en une lettre précieuse qui contribue à créer des documents de référence impeccables. Son talent réside dans sa capacité à manier le clavier comme un maître sculpteur, où chaque document est taillé dans le marbre de l’expertise et poli par le souci du détail.
              </a>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}
