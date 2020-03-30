---
title: Virtual Machines
---

### Create Two Virtual Machines

> Install KVM
https://wiki.debian.org/KVM

> Create a new SSH key pair
```bash
mkdir -p ~/.ssh && ssh-keygen -t rsa -b 4096 -C "repo and VM bootstrap key" -P "" -f ~/.ssh/myorb_bootstrap -q
```

> Create and setup two new Virtual Machines. Make sure you have a sudo user called orbiter on the guest OS
```bash
./examples/k8s/static/machine.sh ./examples/k8s/static/kickstart.cfg ~/.ssh/orbitertest_bootstrap.pub master1
./examples/k8s/static/machine.sh ./examples/k8s/static/kickstart.cfg ~/.ssh/orbitertest_bootstrap.pub worker1
```

> List the new virtual machines IP addresses
```bash
for MACHINE in master1 worker1
do
    virsh domifaddr $MACHINE
done
```