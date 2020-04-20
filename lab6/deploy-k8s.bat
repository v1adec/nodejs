@echo off
if "%~1" == "--build" goto :build
if "%~1" == "--deploy" goto :deploy
if "%~1" == "--stop" goto :stop
goto :help_info
goto :eof

:build
    REM Enable minikube doker-env
    FOR /f "tokens=*" %%i IN ('minikube -p minikube docker-env') DO @%%i

    REM REM Build images 
    docker build -t lab-app-api -f ./api/Dockerfile .
    docker build -t lab-app-proxy -f ./proxy/Dockerfile .
    docker build -t lab-app-database -f ./database/Dockerfile .
goto :eof

:deploy
    REM Apply app k8s configs
    kubectl apply -f ./api/deployment/deployment.yaml
    kubectl apply -f ./proxy/deployment/deployment.yaml
    kubectl apply -f ./database/deployment/deployment.yaml

    kubectl apply -f ./api/deployment/service.yaml
    kubectl apply -f ./proxy/deployment/service.yaml
    kubectl apply -f ./database/deployment/service.yaml

    kubectl apply -f ./proxy/deployment/ingress.yaml
goto :eof

:stop
    kubectl delete -n default deployment lab-app-api
    kubectl delete -n default deployment lab-app-proxy
    kubectl delete -n default deployment lab-app-database
    kubectl delete -n default service lab-app-api
    kubectl delete -n default service lab-app-proxy
    kubectl delete -n default service lab-app-database
    kubectl delete -n default ingress lab-app-ingress
goto :eof

:help_info
    echo Usage: deploy-k8s COMMAND
    echo Options:
    echo    --build     Build app
    echo    --deploy    Start app
    echo    --stop      Stop app
goto :eof
