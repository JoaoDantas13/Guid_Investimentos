
export interface Chart {
  result: [
    {
      meta: {
        currency: string,
        symbol: string,
        exchangeName: string,
        instrumentType: string,
        firstTradeDate: number,
        regularMarketTime: number,
        gmtoffset: number,
        timezone: string,
        exchangeTimezoneName: string,
        regularMarketPrice: number,
        chartPreviousClose: number,
        previousClose: number,
        scale: number,
        priceHint: number
        currentTradingPeriod: {
          pre: {
            timezone: string,
            start: number,
            end: number,
            gmtoffset: number
          },
          regular: {
            timezone: string,
            start: number,
            end: number,
            gmtoffset: number
          },
          post: {
            timezone: string,
            start: number,
            end: number,
            gmtoffset: number
          }
        },
        tradingPeriods: [
          [
            {
              timezone: string,
              start: number,
              end: number,
              gmtoffset: number
            }
          ]
        ],
        dataGranularity: number,
        range: number,
        validRanges: []
      },
      timestamp: [],
      indicators: {
        quote: [
          {
            open: [],
            high: [],
            volume: [],
            low: [],
            close: []
          }
        ]
      }
    }
  ],
  error: null
}






