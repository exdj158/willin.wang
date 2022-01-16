import { useTheme, Theme } from 'remix-themes';
import { useLoaded } from '~/hooks/use-loaded';
import { MoonIcon, SunIcon } from './svg';

export const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();
  const loaded = useLoaded();

  return (
    <button
      className='absolute right-[80px] top-[21px] text-secondary dark:text-primary'
      aria-label='Toggle Theme'
      type='button'
      title='Toggle Theme'
      onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}>
      {theme === Theme.DARK && loaded && <SunIcon />}
      {theme === Theme.LIGHT && loaded && <MoonIcon />}
    </button>
  );
};
