This is a [Next.js](https://nextjs.org) example project to use with [`gorunn`](https://github.com/parapidcom/gorunn).

## Getting Started

### Add project to the stack

Create file **myreact.yaml** with contents :

```bash
name: myreact
git_repo: git@github.com:parapidcom/gorunn-example-react
type: node
version: "20"
endpoint: myreact.local.gorunn.io
env_vars: true
start_command: npm run dev
listen_port: 3000
build_commands:
  - npm i
```

Save it in `~/gorunn/projects/`

### Parse the project
```bash
gorunn parse
```

### Build the project
```bash
gorunn build --app myreact
```

### Open it
Open [https://myreact.local.gorunn.io](https://myreact.local.gorunn.io) with your browser to see the result.

### Exec
You can execute shell commands inside container:
```bash
gorunn terminal --app myreact
```
