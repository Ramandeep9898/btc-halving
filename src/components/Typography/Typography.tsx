import React from 'react';

// Define the available variants and their styles
type Variant = 'title' | 'subtitle' | 'body' | 'caption';

const variantStyles: Record<Variant, React.CSSProperties> = {
  title: {
    whiteSpace:"nowrap",
    color:"#333",
    fontSize: '24px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '18px',
    color:"#333",

    fontWeight: 'normal',
  },
  body: {
    fontSize: '16px',
    color:"#333",

    whiteSpace:"nowrap",

    fontWeight: 'normal',
  },
  caption: {
    fontSize: '12px',
    color:"#333",
    fontWeight: 'lighter',
  },
};

interface TypographyProps {
  variant: Variant;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ variant, children, ...props }) => {
  const style = variantStyles[variant];

  return <div style={style} {...props}>{children}</div>;
};

