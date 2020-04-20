FROM mariadb:10.3.9

ENV MYSQL_DATABASE=main_db
ENV MYSQL_USER=root
ENV MYSQL_ROOT_PASSWORD=root123

COPY ./database-main-schema.sql /docker-entrypoint-initdb.d/database-main-schema.sql
