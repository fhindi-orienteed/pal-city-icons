const fs = require('fs');
const path = require('path');

function toCamelCase(str) {
  return str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  }).replace(/^[A-Z]/, (m) => m.toLowerCase());
}

function generateWrapper(platform) {
  const dir = path.join(__dirname, '..', 'src', platform);
  
  if (!fs.existsSync(dir)) {
    console.warn(`Directory ${dir} does not exist. Skipping ${platform}.`);
    return;
  }

  // Get all .tsx files except index.ts and PalCityIcon.tsx
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && f !== 'index.tsx' && f !== 'PalCityIcon.tsx');
  
  const icons = files.map(f => {
    const componentName = f.replace('.tsx', '');
    const iconName = toCamelCase(componentName); // e.g. ExploreOutline -> exploreOutline
    return { componentName, iconName };
  });

  if (icons.length === 0) return;

  const isNative = platform === 'native';
  const importSvgProps = isNative ? `import type { SvgProps } from "react-native-svg";` : `import type { SVGProps } from "react";`;
  const baseInterface = isNative ? `SvgProps` : `SVGProps<SVGSVGElement>`;
  
  const imports = icons.map(i => `import ${i.componentName} from './${i.componentName}';`).join('\n');
  const typeDef = `export type IconName = ${icons.map(i => `'${i.iconName}'`).join(' | ')};`;
  const mapping = `const iconMapping: Record<IconName, React.FC<${baseInterface}>> = {
${icons.map(i => `  '${i.iconName}': ${i.componentName},`).join('\n')}
};`;

  const wrapperContent = `import * as React from "react";
${importSvgProps}

${imports}

${typeDef}

export interface PalCityIconProps extends ${baseInterface} {
  name: IconName;
  size?: number | string;
  color?: string;
}

${mapping}

export const PalCityIcon: React.FC<PalCityIconProps> = ({ name, size = 24, color, style, ...rest }) => {
  const IconComponent = iconMapping[name];

  if (!IconComponent) {
    console.warn(\`PalCityIcon: Icon "\${name}" not found.\`);
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
`;

  const wrapperPath = path.join(dir, 'PalCityIcon.tsx');
  fs.writeFileSync(wrapperPath, wrapperContent);
  console.log(`Generated wrapper at ${wrapperPath}`);

  // Append to index.ts
  const indexPath = path.join(dir, 'index.ts');
  if (fs.existsSync(indexPath)) {
    let indexContent = fs.readFileSync(indexPath, 'utf-8');
    indexContent += `\nexport * from './PalCityIcon';\n`;
    fs.writeFileSync(indexPath, indexContent);
    console.log(`Updated index.ts at ${indexPath}`);
  }
}

generateWrapper('web');
generateWrapper('native');
