export const QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND = `

SELECT
  Value
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'ConfirmedCases'
ORDER BY Date DESC LIMIT 1

`;

export const QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND = `
SELECT
  Value - COALESCE(
    LAG(Value) OVER (
      PARTITION BY Indicator
      ORDER BY
        Date
    ),
    0
  )
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'ConfirmedCases'
ORDER BY
  Date DESC
LIMIT 1
`;


export const QUERY_TOTAL_TESTS_SCOTLAND = `

SELECT
  Value
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'Tests'
ORDER BY Date DESC LIMIT 1

`;

export const QUERY_DAILY_CHANGE_TESTS_SCOTLAND = `
SELECT
  Value - COALESCE(
    LAG(Value) OVER (
      PARTITION BY Indicator
      ORDER BY
        Date
    ),
    0
  )
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'Tests'
ORDER BY
  Date DESC
LIMIT 1
`;


export const QUERY_TOTAL_DEATHS_SCOTLAND = `

SELECT
  Value
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'Deaths'
ORDER BY Date DESC LIMIT 1

`;

export const QUERY_DAILY_CHANGE_DEATHS_SCOTLAND = `
SELECT
  Value - COALESCE(
    LAG(Value) OVER (
      PARTITION BY Indicator
      ORDER BY
        Date
    ),
    0
  )
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'Deaths'
ORDER BY
  Date DESC
LIMIT 1
`;


export const QUERY_TOTAL_CASES_BY_AREA = `
SELECT
  Area,
  AreaCode,
  CAST(COALESCE(TotalCases, 0) AS Integer) AS TotalCases,
  Date
FROM
  cases
WHERE
  Country = 'Scotland'
  AND (AreaCode = '##AREACODE##' OR Area = '##AREA##')
ORDER BY Date ASC
`;

export const QUERY_DAILY_CHANGE_CASES_SCOTLAND = `
with _confirmed AS (
  SELECT
    Date,
    Country,
    Value AS ConfirmedCases
  FROM
    indicators
  WHERE
    Indicator = 'ConfirmedCases'
),
_tests AS (
  SELECT
    Date,
    Country,
    Value AS Tests
  FROM
    indicators
  WHERE
    Indicator = 'Tests'
),
_deaths AS (
  SELECT
    Date,
    Country,
    Value AS Deaths
  FROM
    indicators
  WHERE
    Indicator = 'Deaths'
),
collapsed AS (
  SELECT
    _confirmed.Date,
    _Confirmed.Country,
    COALESCE(ConfirmedCases, 0) AS ConfirmedCases,
    COALESCE(Tests, 0) AS Tests,
    COALESCE(Deaths, 0) AS Deaths
  FROM
    _confirmed
    LEFT JOIN _tests ON (
      _confirmed.Country = _tests.Country
      AND _confirmed.Date = _tests.Date
    )
    LEFT JOIN _deaths ON (
      _confirmed.Country = _deaths.Country
      AND _confirmed.Date = _deaths.Date
    )
),
latest AS (
  SELECT
    Date,
    ConfirmedCases - COALESCE(
      LAG(ConfirmedCases) OVER (
        PARTITION BY Country
        ORDER BY
          Date
      ),
      0
    ) AS DalyChangeConfirmedCases,
    Tests - COALESCE(
      LAG(Tests) OVER (
        PARTITION BY Country
        ORDER BY
          Date
      ),
      0
    ) AS DailyChangeTests,
    Deaths - COALESCE(
      LAG(Deaths) OVER (
        PARTITION BY Country
        ORDER BY
          Date
      ),
      0
    ) AS DailyChangeDeaths
  FROM
    collapsed
  WHERE
    Country IN ('Scotland')
  ORDER BY
    Date DESC
  LIMIT
    45
)
SELECT
  *
FROM
  latest
ORDER BY
  Date ASC
`;