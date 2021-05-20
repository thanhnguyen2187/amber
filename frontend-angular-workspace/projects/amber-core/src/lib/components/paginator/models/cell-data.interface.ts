import { CellType } from './cell-data.type';

export interface CellData {
  key: string | number;
  label: string;
  type: CellType;
  action: () => void;
}

