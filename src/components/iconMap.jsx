// 把 recipes.js 中的 iconName 對應到實際圖示元件
import * as Icons from './icons.jsx';

export function ProfileIcon({ name, className = 'w-5 h-5' }) {
  const Cmp = Icons[name];
  if (!Cmp) return null;
  return <Cmp className={className} />;
}
