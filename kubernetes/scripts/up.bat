kubectl apply -k ../services
timeout /t 60 /nobreak >nul
kubectl apply -k ../apps
