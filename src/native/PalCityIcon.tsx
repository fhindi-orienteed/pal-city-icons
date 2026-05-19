import * as React from "react";
import type { SvgProps } from "react-native-svg";

import Bank from './Bank';
import Chat from './Chat';
import Education from './Education';
import ExploreOutline from './ExploreOutline';
import Food from './Food';
import Government from './Government';
import Grid from './Grid';
import Health from './Health';
import Help from './Help';
import Home from './Home';
import Hotel from './Hotel';
import Info from './Info';
import Legal from './Legal';
import Location from './Location';
import Login from './Login';
import Logout from './Logout';
import Notification from './Notification';
import Search from './Search';
import Security from './Security';
import Settings from './Settings';
import Share from './Share';
import Shopping from './Shopping';
import Transportation from './Transportation';
import Travel from './Travel';

export type IconName = 'bank' | 'chat' | 'education' | 'exploreOutline' | 'food' | 'government' | 'grid' | 'health' | 'help' | 'home' | 'hotel' | 'info' | 'legal' | 'location' | 'login' | 'logout' | 'notification' | 'search' | 'security' | 'settings' | 'share' | 'shopping' | 'transportation' | 'travel';

export interface PalCityIconProps extends SvgProps {
  name: IconName;
  size?: number | string;
  color?: string;
}

const iconMapping: Record<IconName, React.FC<SvgProps>> = {
  'bank': Bank,
  'chat': Chat,
  'education': Education,
  'exploreOutline': ExploreOutline,
  'food': Food,
  'government': Government,
  'grid': Grid,
  'health': Health,
  'help': Help,
  'home': Home,
  'hotel': Hotel,
  'info': Info,
  'legal': Legal,
  'location': Location,
  'login': Login,
  'logout': Logout,
  'notification': Notification,
  'search': Search,
  'security': Security,
  'settings': Settings,
  'share': Share,
  'shopping': Shopping,
  'transportation': Transportation,
  'travel': Travel,
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
