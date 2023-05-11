import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

import Image from 'next/image';
import { Siderbar } from './components/Sidebar';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Siderbar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-4xl mt-10'>
            Good Afternoon
          </h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/vel.jpg" alt="Capa do Album Victor e Léo Irmãos" width={104} height={104} />
              <strong>
                Victor e Léo - Irmãos
              </strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/vel.jpg" alt="Capa do Album Victor e Léo Irmãos" width={104} height={104} />
              <strong>
                Victor e Léo - Irmãos
              </strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/vel.jpg" alt="Capa do Album Victor e Léo Irmãos" width={104} height={104} />
              <strong>
                Victor e Léo - Irmãos
              </strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/vel.jpg" alt="Capa do Album Victor e Léo Irmãos" width={104} height={104} />
              <strong>
                Victor e Léo - Irmãos
              </strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/vel.jpg" alt="Capa do Album Victor e Léo Irmãos" width={104} height={104} />
              <strong>
                Victor e Léo - Irmãos
              </strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/vel.jpg" alt="Capa do Album Victor e Léo Irmãos" width={104} height={104} />
              <strong>
                Victor e Léo - Irmãos
              </strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>
            Made for Vinicius Vieira Parizoto
          </h2>

          <div className='grid grid-cols-5 gap-6 mt-4'>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/vel.jpg" alt="Capa do Album Victor e Léo Irmãos" className='w-full' width={104} height={104} />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, CCONS, firl in red and more</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/vel.jpg" alt="Capa do Album Victor e Léo Irmãos" className='w-full' width={104} height={104} />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, CCONS, firl in red and more</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/vel.jpg" alt="Capa do Album Victor e Léo Irmãos" className='w-full' width={104} height={104} />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, CCONS, firl in red and more</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/vel.jpg" alt="Capa do Album Victor e Léo Irmãos" className='w-full' width={104} height={104} />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, CCONS, firl in red and more</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/vel.jpg" alt="Capa do Album Victor e Léo Irmãos" className='w-full' width={104} height={104} />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, CCONS, firl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
