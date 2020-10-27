CONFIGURATIONS=docker-compose -f docker-compose.yml \
	-f docker/configurations/storage.docker-compose.yml \
	-f docker/configurations/external-services.docker-compose.yml \
	-f docker/configurations/backend.docker-compose.yml

# usage: TODO

setup: setup-backend

setup-backend: cp-env build setup-databases down

cp-env:
	@echo "Copying env variables..."
	cp ./backend/.env.development ./docker/envs/.backend.development.local
	cp ./backend/.env.test ./docker/envs/.backend.test.local

build: 
	@echo "Building images"
	$(CONFIGURATIONS) build --no-cache

setup-databases:
	@echo "Setting up databases..."
	$(CONFIGURATIONS) run development bundle exec rake db:setup
	$(CONFIGURATIONS) run test bundle exec rake db:setup

up:
	@echo "Up services..."
	$(CONFIGURATIONS) up

run:
	$(CONFIGURATIONS) run $(app) $(command)

down:
	$(CONFIGURATIONS) down 

cleanup:
	$(CONFIGURATIONS) down -v --rmi local	