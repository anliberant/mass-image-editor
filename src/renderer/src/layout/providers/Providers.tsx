import { ThemeProvider } from 'next-themes';

import { ProvidersProps } from './Providers.props';

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div
        className=" dark:text-white
          text-black transition-colors duration-300 min-h-screen h-full select-none"
      >
        {children}
      </div>
    </ThemeProvider>
  );
};
export default Providers;
