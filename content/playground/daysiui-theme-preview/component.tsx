const themes = [
  {
    name: '🌝  light',
    id: 'light'
  },
  {
    name: '🌚  dark',
    id: 'dark'
  },
  {
    name: '🧁  cupcake',
    id: 'cupcake'
  },
  {
    name: '🐝  bumblebee',
    id: 'bumblebee'
  },
  {
    name: '✳️  Emerald',
    id: 'emerald'
  },
  {
    name: '🏢  Corporate',
    id: 'corporate'
  },
  {
    name: '🌃  synthwave',
    id: 'synthwave'
  },
  {
    name: '👴  retro',
    id: 'retro'
  },
  {
    name: '🤖  cyberpunk',
    id: 'cyberpunk'
  },
  {
    name: '🌸  valentine',
    id: 'valentine'
  },
  {
    name: '🎃  halloween',
    id: 'halloween'
  },
  {
    name: '🌷  garden',
    id: 'garden'
  },
  {
    name: '🌲  forest',
    id: 'forest'
  },
  {
    name: '🐟  aqua',
    id: 'aqua'
  },
  {
    name: '👓  lofi',
    id: 'lofi'
  },
  {
    name: '🖍  pastel',
    id: 'pastel'
  },
  {
    name: '🧚‍♀️  fantasy',
    id: 'fantasy'
  },
  {
    name: '📝  Wireframe',
    id: 'wireframe'
  },
  {
    name: '🏴  black',
    id: 'black'
  },
  {
    name: '💎  luxury',
    id: 'luxury'
  },
  {
    name: '🧛‍♂️  dracula',
    id: 'dracula'
  },
  {
    name: '🖨  CMYK',
    id: 'cmyk'
  },
  {
    name: '🍁  Autumn',
    id: 'autumn'
  },
  {
    name: '💼  Business',
    id: 'business'
  },
  {
    name: '💊  Acid',
    id: 'acid'
  },
  {
    name: '🍋  Lemonade',
    id: 'lemonade'
  },
  {
    name: '🌙  Night',
    id: 'night'
  },
  {
    name: '☕️  Coffee',
    id: 'coffee'
  },
  {
    name: '❄️  Winter',
    id: 'winter'
  }
];

export function Previewer() {
  return (
    <div className=' rounded-box grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {themes.map((theme) => (
        <div
          key={theme.id}
          className='border-base-content/20 hover:border-base-content/40 outline-base-content overflow-hidden rounded-lg border outline outline-2 outline-offset-2'
          data-set-theme={theme.id}
          data-act-class='outline'>
          <div
            data-theme={theme.id}
            className='bg-base-100 text-base-content w-full cursor-pointer font-sans'>
            <div className='grid grid-cols-5 grid-rows-3'>
              <div className='bg-base-200 col-start-1 row-span-2 row-start-1' />
              <div className='bg-base-300 col-start-1 row-start-3' />
              <div className='bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2'>
                <div className='font-bold'>{theme.id}</div>
                <div className='flex flex-wrap gap-1'>
                  <div className='bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6'>
                    <div className='text-primary-content text-sm font-bold'>
                      A
                    </div>
                  </div>
                  <div className='bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6'>
                    <div className='text-secondary-content text-sm font-bold'>
                      A
                    </div>
                  </div>
                  <div className='bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6'>
                    <div className='text-accent-content text-sm font-bold'>
                      A
                    </div>
                  </div>
                  <div className='bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6'>
                    <div className='text-neutral-content text-sm font-bold'>
                      A
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
