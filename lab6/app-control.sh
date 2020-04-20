#!/bin/bash

build() {
    docker build -t "lab-app-api" -f ./api/Dockerfile . 
    docker build -t "lab-app-proxy" -f ./proxy/Dockerfile .
    docker build -t "lab-app-database" -f ./proxy/Dockerfile .
}

deploy() {
    docker swarm init
    docker stack deploy -c docker-compose.yml lab-app
}

stop() {
    docker stack rm lab-app 
    docker swarm leave -f
}


help_info() {
    echo "Usage: ./app-control COMMAND"
    echo "Options:"
    echo "  --build     Build app"
    echo "	--deploy    Start app"
    echo "	--stop      Stop app"
}

if [ "$1" != " " ]; then
    case $1 in
        --build ) build
            exit
        ;;
        --deploy ) deploy
            exit
        ;;
        --stop ) stop
            exit
        ;;
        * ) help_info
            exit 1
    esac
fi