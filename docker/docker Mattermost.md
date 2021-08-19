### docker Mattermost

---

<br>

Mattermost install (linux)

```shell
git clone https://github.com/mattermost/mattermost-docker.git
```

설치 후, docker-compose.yml 파일 개인에 맞게 수정

<br>

<br>

docker-compose 사용 설치

```shell
cd mattermost-docker
mkdir -p ./volumes/app/mattermost/{data, logs, config, plugins}
chown -R 2000:2000 ./volumes/app/mattermost/
docker-compose build && docker-compose up -d
```
