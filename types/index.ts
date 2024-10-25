export type NameQuery = {
  domainName: string;
  wallet: string;
  name: string;
  id: string;
  targetDomain: string;
};

export type QueryRecord = {
  wallet: string;
  name: string;
  id: string;
  nonce: number;
  domainName: string;
  validUntil: number;
};
