# AtomicFlow infrastructure

Below is a high-level technical review and a set of concrete, production-grade recommendations for each area of your AtomicFlow stack.

Everything is framed for a single-node homelab that must stay private, minimal, and secure, yet be easy to evolve into a small SaaS platform.

## Linux

Tools:

- age

  ```
  age-keygen -o /data/atomicflow/keys/age.key

  age-keygen -o /home/fer/server/age.key | grep "# public key:" | cut -d ' ' -f 4 > /home/fer/server/age.pub
  ```
