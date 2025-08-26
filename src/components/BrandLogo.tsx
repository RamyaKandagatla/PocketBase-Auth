import {BRAND_LOGO} from '../lib/constants';

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <img
      src={BRAND_LOGO}
      alt="Demo Panel"
      className={className}
    />
  );
}
