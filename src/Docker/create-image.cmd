docker build --no-cache -f SQL\Dockerfile.PostgreSql -t mirrors/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t mirrors/app ../..
