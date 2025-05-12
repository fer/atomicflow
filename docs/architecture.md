# AtomicFlow infrastructure

Below is a high-level technical review and a set of concrete, production-grade recommendations for each area of your AtomicFlow stack.

Everything is framed for a single-node homelab that must stay private, minimal, and secure, yet be easy to evolve into a small SaaS platform.

## Linux

Tools:

- age

  ```
  age-keygen -o /home/fer/server/age.key

  grep -m 1 "# public key:" /home/fer/server/age.key | cut -d ' ' -f 4 > /home/fer/server/age.pub
  
  ```

- sops

```
curl -sSL https://github.com/getsops/sops/releases/latest/download/sops_3.8.1_amd64.deb -o sops.deb
sudo dpkg -i sops.deb
```
