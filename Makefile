setup:
	yarn install || npm install

run:
	make build && yarn start || npm start

watch:
	yarn watch || npm watch

build:
	yarn build || npm run build

test:
	yarn test || npm test


.PHONY: test build watch run setup