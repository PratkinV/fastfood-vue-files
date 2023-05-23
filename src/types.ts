import { ALL, NEW, POPULAR } from './constants';

export type Sticker = typeof NEW | typeof POPULAR;
export type StickerConfig = Record<Sticker, { label: string, backgroundColor: string }>;

interface BaseItem {
  id: number;
  name: string;
  image: string;
}

export interface MenuItem extends BaseItem {
  detailText: string;
  size?: string;
  sticker?: Sticker;
  price: number;
}

export interface PromoItem extends BaseItem  {
  period: string;
}

export type FilterBy = typeof ALL | typeof NEW | typeof POPULAR;