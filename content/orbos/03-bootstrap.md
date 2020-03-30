---
title: Bootstrap
---

### Bootstrap your local Kubernetes cluster
```bash
orbctl takeoff
```

> As soon as the Orbiter has deployed itself to the cluster, you can decrypt the generated admin kubeconfig
```bash
mkdir -p ~/.kube
orbctl readsecret k8s.kubeconfig > ~/.kube/config
```

> Wait for grafana to become running
```bash
kubectl --namespace caos-system get po -w
```

> Open your browser at localhost:8080 to show your new clusters dashboards
```bash
kubectl --namespace caos-system port-forward svc/grafana 8080:80
```

> Cleanup your environment
```bash
for MACHINE in master1 worker1
do
    virsh destroy $MACHINE
    virsh undefine $MACHINE
done
```
