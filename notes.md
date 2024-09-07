# Basic Redis Commands

## Keys
- `DEL key`
- `DUMP key`
- `EXISTS key`
- `EXPIRE key seconds`
- `KEYS pattern`
- `MOVE key db`
- `RENAME key newkey`
- `SCAN cursor`

## Strings
- `APPEND key value`
- `DECR key`
- `GET key`
- `GETSET key value`
- `INCR key`
- `INCRBY key increment`
- `DECRBY key decrement`
- `MGET key1 key2 ... keyN`
- `SET key value`

## Hashes
- `HDEL key field1`
- `HEXISTS key field`
- `HGET key field`
- `HGETALL key`
- `HINCRBY key field increment`
- `HSET key field value`
- `HVALS key`

## Lists
- `BLPOP key timeout`
- `BRPOP key timeout`
- `LPUSH key value1 value2 ...`
- `LPOP key`
- `LRANGE key start stop`
- `RPUSH key value1 value2 ...`

## Sets
- `SADD key member1 member2 ...`
- `SISMEMBER key member`
- `SMEMBERS key`
- `SPOP key`
- `SRANDMEMBER key`
- `SREM key member`

## Sorted Sets
- `ZADD key score1 member1 score2 member2 ...`
- `ZCARD key`
- `ZCOUNT key min max`
- `ZINCRBY key increment member`
- `ZRANGE key start stop`
- `ZRANGEBYSCORE key min max`
- `ZREM key member`

## Extra
`NX` -- Only set the key if it does not already exist.
`XX` -- Only set the key if it already exists.
`GET` -- Return the old string stored at key, or nil if key did not exist.
