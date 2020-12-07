### Docker Basics

#### Concept: 
- like a virtual machine
- allow developer to packaging up the local application and deploy it to docker environment for running the app


#### Common Commands: 

- `docker build -t docker-container-name:latest .`: copy your local app code to docker container
- `docker images`: check all images docker are running
- `docker ps`: check docker container(s) currently up & running
- `docker ps -a`: check all the docker containers (even not running ones)
- `docker run -it -p portYouWant:originalPort docker-container-name:latest`: run the docker container !!
- `docker stop docker-container-hash-ID`: shutdown docker container from running
- `docker container rm docker-container-hash-ID`: remove container from docker containers list
- `docker image rm docker-image-hash-ID`: remove docker image from docker images list
- `docker container ls -a`: shows all docker containers
- `docker pull image-name`: download docker image to local machine [eg: `docker pull nginx`]
- `docker container exec -it container-name bash`: access container from terminal !!!!!!!!
- `docker rm $(docker ps -aq) -f`: remove all the docker containers from your local docker environment


#### Docker Configuration Commands:

- `FROM`: setup the image (which image is going to be used for this docker configuration) [very first step]
- `RUN`: execute the commands on top of the current image
- `WORKDIR`: setup working directory for `RUN`, `CMD`, `ENTRYPOINT`, `COPY` and `ADD` instructions that follow it in the `Dockerfile`
- `COPY`: copy local folder path to container folder path (from `src` to `dest`)
- `EXPOSE`: tell docker which port need to be listened on at runtime
- `ENTRYPOINT`: config executable command, such as `node`
- `CMD`: the following commands after entrypoint, eg: `server/index.js`, so combine together: `node server/index.js`
- `ENV`: setup environment variable for docker container to read (use)
- `ADD`: copy new files/directories from `src` to `dest`


#### General findings:
- `docker run -d IMAGE`: `-d` means `--detach`, which refers to a docker container runs in the background of your terminal, which will not show input/output logs in terminal. [Reference <a href="https://docs.docker.com/engine/reference/commandline/container_run/" target="_blank">here</a>]
- `docker run -i -t debian /bin/bash`: `-i` & `-t` means we want an interactive session with a `tty` attached. `tty` means a terminal which allows user to do input and display the output.
Normally we have `-it` command, which means it make container start look like a terminal connection session. [Reference <a href="https://stackoverflow.com/questions/30137135/confused-about-docker-t-option-to-allocate-a-pseudo-tty/54254380" target="_blank">here</a>]
- Why we need docker-compose? `docker-compose` is a `tool` for running multiple containers at the same time
- How to create volume locally?
```js
docker volume create --name=localstore
```
- Recent Practice: <a href="https://github.com/DamengRandom/docker-node-mongo" target="_blank">Run A Simple Node API Locally by using Express + MongoDB + Docker</a>
