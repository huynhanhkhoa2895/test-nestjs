export const PAGE_LENGTH = 10;
export const GRPC_PACKAGE = {
  VENUE_PACKAGE: {
    name: 'venue',
    alias: 'VENUE_PACKAGE',
    service: 'VenueService',
  },
  PLAN_PACKAGE: {
    name: 'plan',
    alias: 'PLAN_PACKAGE',
    service: 'PlanService',
  },
  USER_PACKAGE: {
    name: 'user',
    alias: 'USER_PACKAGE',
    service: 'UserService',
  },
  BLOCKCHAIN_PACKAGE: {
    name: 'blockchain',
    alias: 'BLOCKCHAIN_PACKAGE',
    service: 'BlockchainService',
  },
};
export const URL = {
  KYBERSWAP:
    'https://ks-setting.kyberswap.com/api/v1/tokens?chainIds=56&isWhitelisted=true&pageSize=100&page=1',
  COINGECKO: 'https://api.coingecko.com/api/v3',
};

export const BLOCKCHAIN = {
  ETHEREUM: 'ethereum',
  BINANCE_SMART_CHAIN: 'bsc',
};
export enum MEDIA_TYPE {
  IMAGE = 'image',
  VIDEO = 'video',
}
export const AWS_VERSION = '2010-12-01';
export const AWS_IMAGE_SRC =
  'https://s3.ap-southeast-1.amazonaws.com/wisepass-assets/';
export const AWS_REGION = 'ap-southeast-1';

export enum TRANSACTION_STATUS {
  PENDING = 3,
  SUCCESS = 4,
  FAILED = 5,
  ABORT = 2,
  NEW = 1,
}

export enum QUEUE {
  SEND_TRANSACTION = 'send-transaction',
}

export enum QUEUE_EVENT {
  CALL_API_TRANSACTION = 'callApiTransaction',
}
