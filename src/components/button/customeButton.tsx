import Link, { type LinkProps } from 'next/link';

interface CustomeButtonProps extends LinkProps {
    icon?: React.ElementType;
    text: string;
    gradientColors?: { from: string; to: string };
  }

const CustomeButton = ({
  href,
  text,
  icon: Icon,
  gradientColors = { from: '#75A3B1', to: 'rgb(152,108,172)' },
  className = '',
}: CustomeButtonProps) => {
  return (
    <div className="inline-flex pb-10 sm:pb-20 md:pb-32 lg:pb-40 ">
      <Link
        href={href}
        className={` mt-8 flex items-center justify-center whitespace-nowrap rounded-[20px] bg-gradient-to-r from-[${gradientColors.from}] to-[${gradientColors.to}] px-12 py-4 text-lg font-semibold text-white sm:px-16 sm:py-5 sm:text-2xl md:w-[380px] md:text-3xl lg:w-[400px] lg:text-4xl ${className}  hover:bg-gradient-to-l`}
      >
        {text}
        {Icon && (
          <Icon
            strokeWidth={3.5}
            className="mr-2"
            height={30}
            width={30}
          />
        )}
      </Link>
    </div>
  );
};

export default CustomeButton;
