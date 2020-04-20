@echo off 
if "%~1" == "--build" call :build else
if "%~1" == "--deploy" call :deploy else
if "%~1" == "--stop" call :stop else call :help_info
goto :eof

:build
    docker build -t "lab-app-api" -f ./api/Dockerfile . 
    docker build -t "lab-app-proxy" -f ./proxy/Dockerfile .
    docker build -t "lab-app-database" -f ./database/Dockerfile .
goto :eof

:deploy
        docker volume create db_volume
        docker swarm init
        docker stack deploy -c docker-compose.yml lab-app
goto :eof

:stop
    docker stack rm lab-app 
    docker swarm leave -f
goto :eof

:help_info
    echo Usage: app-control COMMAND
    echo Options:
    echo    --build     Build app
    echo    --deploy    Start app
    echo    --stop      Stop app
goto :eof
