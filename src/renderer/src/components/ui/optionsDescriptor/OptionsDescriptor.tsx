import { OptionsDescriptorProps } from './OptionsDescriptor.props';

const OptionsDescriptor = ({ isChecked, children }: OptionsDescriptorProps): JSX.Element => {
  return (
    <div className="md:pl-10">
      <div
        className={`mt-[25px] ps-4 px-6 py-3 ${
          isChecked && 'outline-dotted'
        } border-gray-500 rounded`}
      >
        {children}
      </div>
    </div>
  );
};
export default OptionsDescriptor;
