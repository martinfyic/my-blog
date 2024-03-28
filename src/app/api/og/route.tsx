/**
 * Api para generar de forma dinámica los Graph Image de los blogs
 */

import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const runtime = 'edge';

const robotoBold = fetch(
  new URL('../../../assets/fonts/Roboto-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  try {
    const font = await robotoBold;
    const { searchParams } = request.nextUrl;
    const title = searchParams.get('title');

    if (!title) {
      return new Response('No se encontró el título', { status: 500 });
    }

    const heading = title.length > 120 ? `${title.substring(0, 120)}...` : title;

    return new ImageResponse(
      (
        <div tw='flex relative flex-col p-12 w-full h-full items-start text-black bg-white'>
          <div tw='flex items-center'>
            <svg fill='#000000' viewBox='0 0 24 24'>
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path
                  id='secondary'
                  d='M16.5,14a4.06,4.06,0,0,1-2.92-1.25,2,2,0,0,0-3.17,0,4,4,0,0,1-5.83,0A2.1,2.1,0,0,0,3,12a1,1,0,0,1,0-2,4,4,0,0,1,2.91,1.25,2,2,0,0,0,3.17,0,4,4,0,0,1,5.83,0,2,2,0,0,0,3.17,0A4.06,4.06,0,0,1,21,10a1,1,0,0,1,0,2,2.12,2.12,0,0,0-1.59.75A4,4,0,0,1,16.5,14Z'
                  style={{ fill: '#2ca9bc' }}
                ></path>
                <path
                  id='primary'
                  d='M16.5,8a4.06,4.06,0,0,1-2.92-1.25,2,2,0,0,0-3.17,0,4,4,0,0,1-5.83,0A2.1,2.1,0,0,0,3,6,1,1,0,0,1,3,4,4,4,0,0,1,5.91,5.25a2,2,0,0,0,3.17,0,4,4,0,0,1,5.83,0,2,2,0,0,0,3.17,0A4.06,4.06,0,0,1,21,4a1,1,0,0,1,0,2,2.12,2.12,0,0,0-1.59.75A4,4,0,0,1,16.5,8Zm2.91,10.75A2.12,2.12,0,0,1,21,18a1,1,0,0,0,0-2,4.06,4.06,0,0,0-2.92,1.25,2,2,0,0,1-3.17,0,4,4,0,0,0-5.83,0,2,2,0,0,1-3.17,0A4,4,0,0,0,3,16a1,1,0,0,0,0,2,2.1,2.1,0,0,1,1.58.75,4,4,0,0,0,5.83,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0Z'
                  style={{ fill: '#000000' }}
                ></path>
              </g>
            </svg>
            <p tw='ml-2 font-bold text-2xl'>{siteConfig.name}</p>
          </div>
          <div tw='flex flex-col flex-1 py-10'>
            <div tw='flex text-xl uppercase font-bold tracking-tight font-normal'>
              ARTÍCULO
            </div>
            <div tw='flex text-[80px] font-bold text-[50px]'>{heading}</div>
          </div>
          <div tw='flex items-center w-full justify-between'>
            <div tw='flex text-xl'>{siteConfig.url}</div>
            <div tw='flex items-center text-xl'>
              <div tw='flex ml-2'>{siteConfig.links.github}</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Roboto',
            data: font,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response('Error al generar Graph Image', { status: 500 });
  }
}
