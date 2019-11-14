import { IEpochOverview } from '../epochs/types';
import { ITransactionDetails } from '../transactions/types';

export interface IBlockOverview {
  createdAt: Date;
  createdBy: string;
  epoch: IEpochOverview['number'];
  id: string;
  number: number | null;
  size: number;
  slotWithinEpoch: number | null;
  output: number;
  transactionsCount: number;
}

export interface IBlockDetailed extends IBlockOverview {
  merkleRoot: string;
  nextBlock: string;
  prevBlock: {
    id: IBlockOverview['id'];
    number: IBlockOverview['number'];
  };
  transactions: ITransactionDetails[];
}
