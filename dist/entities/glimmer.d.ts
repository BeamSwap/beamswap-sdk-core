import { Currency } from './currency';
import { NativeCurrency } from './nativeCurrency';
import { Token } from './token';
export declare class Glimmer extends NativeCurrency {
    protected constructor(chainId: number);
    get wrapped(): Token;
    private static _cache;
    static onChain(chainId: number): Glimmer;
    equals(other: Currency): boolean;
    sortsBefore(): boolean;
}
