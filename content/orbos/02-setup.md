---
title: Setup
---

### Initialize A Git Repository

> Create a new Git Repository

> Add the public part of your new SSH key pair to the git repositories trusted deploy keys.
```bash
cat ~/.ssh/myorb_bootstrap
```

> Copy the file [orbiter.yml] to the root of your Repository.

> Replace the IPs in your orbiter.yml accordingly

### Complete Your Orb Setup

> Download the latest orbctl
```bash
curl -s https://api.github.com/repos/caos/orbiter/releases/latest | grep "browser_download_url.*orbctl-$(uname)-$(uname -m)" | cut -d '"' -f 4 | sudo wget -i - -O /usr/local/bin/orbctl
sudo chmod +x /usr/local/bin/orbctl
sudo chown $(id -u):$(id -g) /usr/local/bin/orbctl
```

> Create an orb file

```bash
mkdir -p ~/.orb
cat > ~/.orb/config << EOF
url: git@github.com:me/my-orb.git
masterkey: $(openssl rand -base64 21)
repokey: |
$(sed s/^/\ \ /g ~/.ssh/myorb_bootstrap)
EOF
```

> Encrypt and write your ssh key pair to your repo

```bash
# Add the bootstrap key pair to the remote secrets file. For simplicity, we use the repokey here.
orbctl writesecret kvm.bootstrapkeyprivate --file ~/.ssh/myorb_bootstrap
orbctl writesecret kvm.bootstrapkeypublic --file ~/.ssh/myorb_bootstrap.pub
```
