import { lovelacesToAda } from 'cardano-js/dist/Currency';
import { SearchForAddressQuery } from '../../../../generated/typings/graphql-schema';
import { isNotNull } from '../../../lib/types';
import { transactionDetailsTransformer } from '../../transactions/api/transformers';
import { IAddressDetail } from '../types';

export const addressDetailTransformer = (
  address: string,
  s: SearchForAddressQuery
): IAddressDetail => ({
  address,
  finalBalance: lovelacesToAda(s.utxos_aggregate?.aggregate?.sum?.value || '0'),
  transactions: s.transactions
    .filter(isNotNull)
    .map(transactionDetailsTransformer),
  transactionsCount: s.transactions_aggregate?.aggregate?.count || 0,
});