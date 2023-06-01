import invariant from 'tiny-invariant'
import { Currency } from './currency'
import { NativeCurrency } from './nativeCurrency'
import { Token } from './token'
import { WETH9 } from './weth9'

export class Glimmer extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'GLMR', 'Glimmer')
  }
  public get wrapped(): Token {
    const weth9 = WETH9[this.chainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  private static _cache: { [chainId: number]: Glimmer } = {}

  public static onChain(chainId: number): Glimmer {
    return this._cache[chainId] ?? (this._cache[chainId] = new Glimmer(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  public sortsBefore(other: Token): boolean {
    return false
  }
}
