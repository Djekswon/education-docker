# Education docker project [![Build Status](https://travis-ci.org/Djekswon/education-docker.svg?branch=main)](https://travis-ci.org/Djekswon/education-docker)

## Установка docker и запуск рабочего окружения 

Устанавливаем Docker CE по инструкции https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#install-docker-ce

```
sudo apt-get update
sudo apt-get install \
         apt-transport-https \
         ca-certificates \
         curl \
         gnupg2 \
         software-properties-common
    
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
    
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
       
sudo apt-get update
       
sudo apt-get install docker-ce docker-ce-cli containerd.io
```
       
Устанавливаем docker-compose по иструкции https://github.com/docker/compose/releases
       
```       
curl -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose       
```

Запускаем проект

```
docker-compose up -d
```
