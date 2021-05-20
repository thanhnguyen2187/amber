SELECT
    *,
    UNIX_TIMESTAMP(date_modified) AS unix_ts_in_secs
FROM contract
WHERE
(
    UNIX_TIMESTAMP(date_modified) > :sql_last_value
    AND date_modified < NOW()
)
ORDER BY date_modified ASC
