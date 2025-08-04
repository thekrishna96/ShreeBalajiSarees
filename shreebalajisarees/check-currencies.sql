-- Check existing currencies
SELECT * FROM currency;

-- Check store supported currencies
SELECT id, supported_currencies FROM store;

-- Check existing regions
SELECT id, name, currency_code FROM region;
