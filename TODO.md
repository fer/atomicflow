## Mantenimiento
- [ ] [Restaurar workfflows y credenciales backup desde Github](https://n8n.io/workflows/2289-restore-backed-up-workflows-from-github-to-n8n/)
# Marketing
- [ ] poner IVA
- [ ] Digital Card
- [ ] Carlos Magic Inventory
## Obsidian
- [x] integrate with git
- [x] .github/profile
- [ ] Definir procesos
- [ ] Hacer plantilla de budget
- [ ] Hacer plantilla de email
- [ ] Normas de uso / Términos y Condiciones
- [ ] Los nodos que se desarrollen: OSS
- [ ] Hacer especiales
	- [ ] Abogado
	- [ ] Marketing digital
	- [ ] Ingeniería
	- [ ] Diseño
- [ ] Soluciones
	- [ ] Web Chatbot - Tomi
	- [ ] AI Butler
	- [ ] Batch Process / Report
## Web
- [ ] meter que los almacenamientos de daros y api keys son del cliente 
- [ ] Crear chatbot
  - [ ] Información de Obsidian
- [ ] Crear clockwise para control de agenda
- [ ] Pasarela de pago
- [ ] Contacto
- [ ] Términos y condiciones
- [ ] Status page

## Workflow ideas
- [ ] Set date via Whatsapp (osteo)
- [ ] Print something via workflow
- [ ] Bitwarden Vault Management API
## Deploy
- [ ] detectar 2nd hd
- [x] Arreglar persistencia BD
- [ ] install community nodes
- [ ] security hardening ubuntu
- [ ] reinstall server & refactor server/README.md
## repo > `.github`
- [ ] Workflows de GitHub Actions reutilizables
	-  .github/workflows/ o workflows reutilizables en .github/workflows/ con el objetivo de ser llamados desde otros repos en la organización usando uses: org/.github/.github/workflows/workflow.yml@main.
- [ ] Plantillas de issues : `.github/ISSUE_TEMPLATE/bug.md` 
- [ ] Plantilla PR: `.github/pull_request_template.md`  para estandarizar cómo los colaboradores crean issues y PRs en todos los repositorios.
- [ ] Archivos comunitarios comunes 
	- [ ] CODE_OF_CONDUCT.md
	- [ ] CONTRIBUTING.md
	- [ ] SECURITY.md
	- [ ] FUNDING.yml 
- [ ] Configuración predeterminada para Dependabot (`.github/dependabot.yml` para configurar Dependabot de forma centralizada)

## .tailscale
```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
ssh fer@ser5max  # If you named it `ser5max` in Tailscale admin

# optional
sudo tailscale up --ssh # 
```