import * as runtime from 'react/jsx-runtime';
import Image from 'next/image';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const component = {
  Image,
};

interface MdxProps {
  code: string;
}

export const MDXContent = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);
  return <Component components={component} />;
};
