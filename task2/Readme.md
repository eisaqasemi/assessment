### Create Secret
`
kubectl create secret docker-registry dockerhub-creds --docker-server=https://index.docker.io/v1/ --docker-username=xxxx --docker-password=xxxx --docker-email=xxxx
`
`kubectl create secret generic nodeserver-envs --from-literal=username=xxx --from-literal=password=yyy`

### Create Daemonset
`kubectl apply -f daemonset.yml`

### Create Service
`kubectl apply -f service.yml`
