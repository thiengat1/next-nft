export interface Collections {
  id: number;
  name: string;
  volume: {
    total: string;
    change: string;
  };
  floorPrice: {
    total: string;
    change: string;
  };
  items: number | string;
}
