import { ThemeProvider } from 'next-themes';

import { ProvidersProps } from './Providers.props';

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div
        className="dark:bg-gray-700 dark:text-gray-200 
          text-gray-700 transition-colors duration-300 min-h-screen select-none"
      >
        {children}
      </div>
    </ThemeProvider>
  );
};
export default Providers;
