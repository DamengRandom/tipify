### Docker Basics

#### Concept: 
- like a virtual machine
- allow developer to packaging up the local application and deploy it to docker environment for running the app


#### Common Commands: 

- `docker build -t docker-container-name:latest .`: copy your local app code to docker container
- `docker images`: check all images docker are running
- `docker ps`: check docker container(s) currently `up & running`
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


### Docker concepts, commands and understandings (again):

1. Image: can treated as a `CD` which contains `Windows XP OS` inside

2. Container: `having image(s)` inside and also run the image(s), inside container we have `kernel` (middleware) to connect processes running on your PC with your PC hardware

3. docker run `behind the scenes`: docker client (user PC) -> docker server (docker cloud) -> pull/download docker related images (based on commands user typed) -> create a docker container and run the downloaded image
[Formula: docker run = docker create + docker start] 

4. `docker start -a`: `-a` means print the container logs to the user terminal !!!!!

5. `docker system prune`: `delete` all containers & images from your PC

6. docker stop vs kill: 
stop is only for `stopping` the container, and having a `10` seconds to do some clean up before container get stopped, kill means `shut down immediately` no time to do clean up

7. Meaning of `docker exec -it <container-id> commands`:
```
docker: docker client 
exec: run another command
-it: allow developer to provide input for the container
  -i: allow user to do some input 
  -t: make log more informative (helpful logs will print out)
command: execute the command

eg: docker exec -it <redi-container-id> redis-cli
```

8. `docker exec -it <redi-container-id> sh`: sh means shell, which allows developer to type shell commands inside docker container for debugging purposes (Type `Ctrl + D` to exit the shell terminal)
[eg: docker run -it busybox sh]

9. `FROM`: Normally pull an image from docker server, eg: alpine
   `RUN`: Run the shell commands to install some software into image, such as redis
   `CMD`: RUn the command inside new created container

10. Sometimes, if we change the RUN command sequence, we might improve the docker installation process

11. Give a docker container a `name` instead of using hash !!
    `docker build -t dockerdamon/redis:latest .`
    Then we can run:
    `docker run dockerdamon/redis:latest`

12. `docker run -p 8080:8080 docker-container-name`: -p means port, and first 8080 means incoming request port number from url, and second 8080 means docker handled port number, 2 different things, can port number can be different, request port number 7000, docker port number 8080 also works [8080 is the port number from node index.js file] !!

13. `COPY ./ ./`: first ./ means local project root folder, second ./ means docker container root folder

14. WORKDIR /usr/app: set up working directory for your project which is running inside docker container 

15. `docker run -it -p 6870:6869 dockerdamon:latest`: a better command example for running docker container locally

16. A way to boost up your build for npm install process:

```docker
COPY ./package.json ./
RUN npm install
COPY ./ ./
# it will be faster than first time !!!
```

