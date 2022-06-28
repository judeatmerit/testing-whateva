import {randomBytes} from 'crypto';

export const getStuff = function () { return randomBytes(16).toString('hex'); }

