import * as React from "react";
import type { SVGProps } from "react";

import ExploreOutline from './ExploreOutline';
import Grid from './Grid';
import Home from './Home';
import Search from './Search';

export type IconName = 'exploreOutline' | 'grid' | 'home' | 'search';

export interface PalCityIconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  color?: string;
}

const iconMapping: Record<IconName, React.FC<SVGProps<SVGSVGElement>>> = {
  'exploreOutline': ExploreOutline,
  'grid': Grid,
  'home': Home,
  'search': Search,
};

export const PalCityIcon: React.FC<PalCityIconProps> = ({ name, size = 24, color, style, ...rest }) => {
  const IconComponent = iconMapping[name];

  if (!IconComponent) {
    console.warn(`PalCityIcon: Icon "${name}" not found.`);
    return null;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      color={color}
      style={style as any}
      {...rest}
    />
  );
};
