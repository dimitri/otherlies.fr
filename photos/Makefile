MOUNT = -v .:/fgallery/src

OPTS  = --min-thumb 112x150 --max-thumb 200x267 -i
CMD   = ./fgallery $(OPTS) ./src/img ./src/photo-shoot 

all: gallery

gallery:
	docker run -it --rm $(MOUNT) -t fgallery $(CMD)

serve:
	echo open http://localhost:8000/
	cd photo-shoot && python3 -m http.server

help:
	docker run -it --rm $(MOUNT) -t fgallery ./fgallery --help
