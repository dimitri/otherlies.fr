#
# The fgallery upstream Dockerfile was found there:
#
UPSTREAM   = https://github.com/skorokithakis/docker-fgallery.git
DOCKERFILE = /Users/dim/dev/temp/docker-fgallery/Dockerfile

MOUNT = -v .:/fgallery/src
OPTS  = --min-thumb 112x150 --max-thumb 200x267 -i -d
CMD   = ./fgallery $(OPTS) ./src/img ./src/photo-shoot 

all: gallery

gallery:
	docker run -it --rm $(MOUNT) -t fgallery $(CMD)

serve:
	echo open http://localhost:8000/
	cd photo-shoot && python3 -m http.server

help:
	docker run -it --rm $(MOUNT) -t fgallery ./fgallery --help

build:
	docker build -t fgallery -f $(DOCKERFILE)  .
