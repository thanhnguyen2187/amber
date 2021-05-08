FROM logstash:7.12.1

RUN curl -L \
    https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-8.0.24.tar.gz | tar -xz && \
    mv mysql-connector-java-8.0.24/mysql-connector-java-8.0.24.jar . && \
    rm -r mysql-connector-java-8.0.24/

ENTRYPOINT ["/usr/local/bin/docker-entrypoint"]
