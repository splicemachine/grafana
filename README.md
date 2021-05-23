# grafana

## Development Setup

### Quickstart

Checkout the code:

```bash
git clone https://github.com/splicemachine/grafana.git
ROOT_DIR=$(PWD)
SPLICE_GF_PLUGIN=${ROOT_DIR}/grafana
```

Build the code

```bash
cd ${SPLICE_GF_PLUGIN}/grafana-plugins/splice-plugin && yarn install && yarn dev
```

Start Grafana

```bash
cd ${ROOT_DIR}

docker run --rm -p 3000:3000 \
	-v $SPLICE_GF_PLUGIN/grafana-plugins:/var/lib/grafana/plugins/splicemachine \
	--env=GF_USERS_DEFAULT_THEME=light \
	--name=grafana grafana/grafana:7.5.4
```

Start the splice-http server:

```bash
docker run -p 1111:1111 \
	--env=DB_HOST=<YOUR_JDBC_URL> \
	--env=SSL=basic \
	--env=WORKERS=5 \
	-v /tmp:/tmp \
	--name=splice-http splicemachine/splice-https:0.0.9
```

Open Browser (admin)

```bash
http://localhost:3000
default credentails admin / admin
```

Create a Splicemachine datasource

```bash
If you are using a local splice-http docker image, create a splicemachine datasource where the url is:

http://host.docker.internal:1111	

```

Restart Grafana (after making changes to code and recompiling)

```bash
docker stop grafana
docker rm grafana
```

## Resources

API
https://grafana.com/docs/grafana/latest/packages_api/
